import { supabase } from './supabase'
import { buildStoragePath } from './helpers'

export async function getCurrentProfile(userId) {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single()
  if (error) throw error
  return data
}

export async function listDocuments(limit = 40) {
  const { data, error } = await supabase
    .from('documents_generated')
    .select('*, zip_archives(*)')
    .order('created_at', { ascending: false })
    .limit(limit)
  if (error) throw error
  return data || []
}

export async function listAuditLogs(limit = 60) {
  const { data, error } = await supabase
    .from('audit_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)
  if (error) throw error
  return data || []
}

export async function uploadArchive({ file, category, documentId }) {
  if (!file) return null
  const path = buildStoragePath(category, file.name)

  const { error: uploadError } = await supabase.storage
    .from('j3k-archivos')
    .upload(path, file, { cacheControl: '3600', upsert: false })
  if (uploadError) throw uploadError

  const { data: userData } = await supabase.auth.getUser()
  const { data, error } = await supabase
    .from('zip_archives')
    .insert({
      document_id: documentId,
      category,
      file_name: file.name,
      storage_bucket: 'j3k-archivos',
      storage_path: path,
      mime_type: file.type || 'application/octet-stream',
      size_bytes: file.size,
      created_by: userData.user?.id,
    })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function createDocument({ moduleName, category, title, payload, file }) {
  const { data: userData } = await supabase.auth.getUser()
  const uid = userData.user?.id

  const { data: document, error } = await supabase
    .from('documents_generated')
    .insert({
      module_name: moduleName,
      category,
      title,
      payload,
      created_by: uid,
      updated_by: uid,
    })
    .select()
    .single()
  if (error) throw error

  if (file) await uploadArchive({ file, category, documentId: document.id })
  return document
}

export async function createPurchase({ form, file }) {
  const document = await createDocument({
    moduleName: 'Compras',
    category: 'compras',
    title: `Compra - ${form.supplier}`,
    payload: form,
    file,
  })
  const { data: userData } = await supabase.auth.getUser()
  const { error } = await supabase.from('purchases').insert({
    document_id: document.id,
    supplier: form.supplier,
    concept: form.concept,
    amount: Number(form.amount || 0),
    currency: form.currency || 'PEN',
    issue_date: form.issue_date || null,
    notes: form.notes || null,
    created_by: userData.user?.id,
  })
  if (error) throw error
  return document
}

export async function createSale({ form, file }) {
  const document = await createDocument({
    moduleName: 'Ventas',
    category: 'ventas',
    title: `Venta - ${form.customer}`,
    payload: form,
    file,
  })
  const { data: userData } = await supabase.auth.getUser()
  const { error } = await supabase.from('sales').insert({
    document_id: document.id,
    customer: form.customer,
    concept: form.concept,
    amount: Number(form.amount || 0),
    currency: form.currency || 'PEN',
    issue_date: form.issue_date || null,
    notes: form.notes || null,
    created_by: userData.user?.id,
  })
  if (error) throw error
  return document
}

export async function createHrRecord({ form, file }) {
  const document = await createDocument({
    moduleName: 'RRHH',
    category: 'rrhh',
    title: `RRHH - ${form.employee_name}`,
    payload: form,
    file,
  })
  const { data: userData } = await supabase.auth.getUser()
  const { error } = await supabase.from('hr_records').insert({
    document_id: document.id,
    employee_name: form.employee_name,
    record_type: form.record_type,
    amount: Number(form.amount || 0),
    issue_date: form.issue_date || null,
    notes: form.notes || null,
    created_by: userData.user?.id,
  })
  if (error) throw error
  return document
}

export async function createFutureModule(form) {
  const { data: userData } = await supabase.auth.getUser()
  const { data, error } = await supabase
    .from('modules')
    .insert({
      name: form.name,
      category: form.category,
      route: form.route || null,
      description: form.description || null,
      created_by: userData.user?.id,
    })
    .select()
    .single()
  if (error) throw error
  return data
}

export async function listModules() {
  const { data, error } = await supabase.from('modules').select('*').order('category').order('name')
  if (error) throw error
  return data || []
}

export async function createSignedDownload(path) {
  const { data, error } = await supabase.storage.from('j3k-archivos').createSignedUrl(path, 60)
  if (error) throw error
  return data.signedUrl
}
