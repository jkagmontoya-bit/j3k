import { useState } from 'react'
import Button from '../components/Button'
import FileField from '../components/FileField'
import Status from '../components/Status'
import { TextInput, SelectInput } from '../components/TextInput'
import { createPurchase, createSale, createHrRecord, createDocument } from '../lib/api'
import { today } from '../lib/helpers'

const initialByType = {
  compras: { supplier: '', concept: '', amount: '', currency: 'PEN', issue_date: today(), notes: '' },
  ventas: { customer: '', concept: '', amount: '', currency: 'PEN', issue_date: today(), notes: '' },
  rrhh: { employee_name: '', record_type: 'Boleta', amount: '', issue_date: today(), notes: '' },
  acuerdos: { title: '', agreement_type: 'Acta', description: '' },
  bitacora: { title: '', vehicle: '', month: '', kilometers: '', fuel: '', notes: '' },
}

export default function ModuleForm({ type }) {
  const [form, setForm] = useState(initialByType[type])
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState('info')
  const [loading, setLoading] = useState(false)

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setLoading(true)
    setStatus('')
    setStatusType('info')

    try {
      if (type === 'compras') await createPurchase({ form, file })
      if (type === 'ventas') await createSale({ form, file })
      if (type === 'rrhh') await createHrRecord({ form, file })
      if (type === 'acuerdos') {
        await createDocument({
          moduleName: 'Acuerdos',
          category: 'acuerdos',
          title: `${form.agreement_type} - ${form.title}`,
          payload: form,
          file,
        })
      }
      if (type === 'bitacora') {
        await createDocument({
          moduleName: 'Bitácora Vehicular',
          category: 'otros',
          title: form.title || `Bitácora ${form.vehicle}`,
          payload: form,
          file,
        })
      }

      setStatus('Registro guardado correctamente en la base de datos.')
      setStatusType('success')
      setForm(initialByType[type])
      setFile(null)
    } catch (error) {
      setStatus(error.message || 'No se pudo guardar el registro.')
      setStatusType('error')
    } finally {
      setLoading(false)
    }
  }

  const titles = {
    compras: 'Registrar compra',
    ventas: 'Registrar venta',
    rrhh: 'Registrar RRHH',
    acuerdos: 'Registrar acuerdo',
    bitacora: 'Registrar bitácora vehicular',
  }

  return (
    <section className="panel">
      <h2>{titles[type]}</h2>
      <p className="muted">El registro quedará guardado con historial y usuario creador.</p>

      <form className="form-grid" onSubmit={handleSubmit}>
        {type === 'compras' && (
          <>
            <TextInput label="Proveedor" value={form.supplier} onChange={(e) => update('supplier', e.target.value)} required />
            <TextInput label="Concepto" value={form.concept} onChange={(e) => update('concept', e.target.value)} required />
            <TextInput label="Monto" type="number" step="0.01" value={form.amount} onChange={(e) => update('amount', e.target.value)} required />
            <SelectInput label="Moneda" value={form.currency} onChange={(e) => update('currency', e.target.value)}>
              <option>PEN</option><option>USD</option>
            </SelectInput>
            <TextInput label="Fecha" type="date" value={form.issue_date} onChange={(e) => update('issue_date', e.target.value)} />
            <TextInput label="Observaciones" textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} />
          </>
        )}

        {type === 'ventas' && (
          <>
            <TextInput label="Cliente" value={form.customer} onChange={(e) => update('customer', e.target.value)} required />
            <TextInput label="Concepto" value={form.concept} onChange={(e) => update('concept', e.target.value)} required />
            <TextInput label="Monto" type="number" step="0.01" value={form.amount} onChange={(e) => update('amount', e.target.value)} required />
            <SelectInput label="Moneda" value={form.currency} onChange={(e) => update('currency', e.target.value)}>
              <option>PEN</option><option>USD</option>
            </SelectInput>
            <TextInput label="Fecha" type="date" value={form.issue_date} onChange={(e) => update('issue_date', e.target.value)} />
            <TextInput label="Observaciones" textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} />
          </>
        )}

        {type === 'rrhh' && (
          <>
            <TextInput label="Trabajador" value={form.employee_name} onChange={(e) => update('employee_name', e.target.value)} required />
            <SelectInput label="Tipo de registro" value={form.record_type} onChange={(e) => update('record_type', e.target.value)}>
              <option>Boleta</option><option>Contrato</option><option>Expediente</option><option>Liquidación</option>
            </SelectInput>
            <TextInput label="Monto / Remuneración" type="number" step="0.01" value={form.amount} onChange={(e) => update('amount', e.target.value)} />
            <TextInput label="Fecha" type="date" value={form.issue_date} onChange={(e) => update('issue_date', e.target.value)} />
            <TextInput label="Observaciones" textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} />
          </>
        )}

        {type === 'acuerdos' && (
          <>
            <TextInput label="Título" value={form.title} onChange={(e) => update('title', e.target.value)} required />
            <SelectInput label="Tipo" value={form.agreement_type} onChange={(e) => update('agreement_type', e.target.value)}>
              <option>Acta</option><option>Contrato</option><option>Acuerdo interno</option>
            </SelectInput>
            <TextInput label="Descripción" textarea value={form.description} onChange={(e) => update('description', e.target.value)} />
          </>
        )}

        {type === 'bitacora' && (
          <>
            <TextInput label="Título" value={form.title} onChange={(e) => update('title', e.target.value)} />
            <TextInput label="Vehículo" value={form.vehicle} onChange={(e) => update('vehicle', e.target.value)} required />
            <TextInput label="Mes" type="month" value={form.month} onChange={(e) => update('month', e.target.value)} />
            <TextInput label="Kilómetros" type="number" value={form.kilometers} onChange={(e) => update('kilometers', e.target.value)} />
            <TextInput label="Combustible" value={form.fuel} onChange={(e) => update('fuel', e.target.value)} />
            <TextInput label="Observaciones" textarea value={form.notes} onChange={(e) => update('notes', e.target.value)} />
          </>
        )}

        <FileField onChange={setFile} />

        <div className="form-footer">
          <Status type={statusType}>{status}</Status>
          <Button type="submit" disabled={loading}>{loading ? 'Guardando...' : 'Guardar en base de datos'}</Button>
        </div>
      </form>
    </section>
  )
}
