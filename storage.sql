import { useState } from 'react'
import Button from '../components/Button'
import Status from '../components/Status'
import { TextInput, SelectInput } from '../components/TextInput'
import { createFutureModule } from '../lib/api'

export default function FutureModules() {
  const [form, setForm] = useState({ name: '', category: 'contabilidad', route: '', description: '' })
  const [customCategory, setCustomCategory] = useState('')
  const [status, setStatus] = useState('')
  const [statusType, setStatusType] = useState('info')

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('')

    try {
      const category = form.category === 'nueva' ? customCategory : form.category
      await createFutureModule({ ...form, category })
      setStatus('Módulo futuro agregado correctamente.')
      setStatusType('success')
      setForm({ name: '', category: 'contabilidad', route: '', description: '' })
      setCustomCategory('')
    } catch (error) {
      setStatus(error.message || 'No se pudo agregar el módulo.')
      setStatusType('error')
    }
  }

  return (
    <section className="panel">
      <h2>Agregar módulo futuro</h2>
      <p className="muted">El sistema pregunta dónde irá el módulo y guarda la categoría en base de datos.</p>

      <form className="form-grid" onSubmit={handleSubmit}>
        <TextInput label="Nombre del módulo" value={form.name} onChange={(e) => update('name', e.target.value)} required />
        <SelectInput label="¿Dónde irá este módulo?" value={form.category} onChange={(e) => update('category', e.target.value)}>
          <option value="acuerdos">ACUERDOS</option>
          <option value="rrhh">RRHH</option>
          <option value="contabilidad">CONTABILIDAD</option>
          <option value="compras">COMPRAS</option>
          <option value="ventas">VENTAS</option>
          <option value="otros">OTROS</option>
          <option value="nueva">Nueva categoría</option>
        </SelectInput>

        {form.category === 'nueva' && (
          <TextInput label="Nombre de nueva categoría" value={customCategory} onChange={(e) => setCustomCategory(e.target.value)} required />
        )}

        <TextInput label="Ruta o enlace" value={form.route} onChange={(e) => update('route', e.target.value)} placeholder="/mi-modulo" />
        <TextInput label="Descripción" textarea value={form.description} onChange={(e) => update('description', e.target.value)} />

        <div className="form-footer">
          <Status type={statusType}>{status}</Status>
          <Button type="submit">Agregar módulo</Button>
        </div>
      </form>
    </section>
  )
}
