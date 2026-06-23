import { useEffect, useState } from 'react'
import { Download, RefreshCcw } from 'lucide-react'
import Button from '../components/Button'
import Status from '../components/Status'
import { createSignedDownload, listDocuments } from '../lib/api'

export default function History() {
  const [documents, setDocuments] = useState([])
  const [status, setStatus] = useState('')

  async function load() {
    setStatus('')
    try {
      const rows = await listDocuments(100)
      setDocuments(rows)
    } catch (error) {
      setStatus(error.message || 'No se pudo cargar el historial.')
    }
  }

  useEffect(() => { load() }, [])

  async function download(path) {
    try {
      const url = await createSignedDownload(path)
      window.open(url, '_blank', 'noopener,noreferrer')
    } catch (error) {
      setStatus(error.message || 'No se pudo generar enlace privado.')
    }
  }

  return (
    <section className="panel">
      <div className="section-head">
        <div>
          <h2>Historial documental</h2>
          <p className="muted">Registros generados y archivos vinculados.</p>
        </div>
        <Button variant="ghost" onClick={load}><RefreshCcw size={16} /> Actualizar</Button>
      </div>

      <Status type="error">{status}</Status>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Módulo</th>
              <th>Categoría</th>
              <th>Título</th>
              <th>Versión</th>
              <th>Archivos</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id}>
                <td>{new Date(doc.created_at).toLocaleString('es-PE')}</td>
                <td>{doc.module_name}</td>
                <td>{doc.category}</td>
                <td>{doc.title}</td>
                <td>v{doc.version}</td>
                <td>
                  {doc.zip_archives?.length ? doc.zip_archives.map((file) => (
                    <button className="mini-link" key={file.id} onClick={() => download(file.storage_path)}>
                      <Download size={14} /> {file.file_name}
                    </button>
                  )) : <span className="muted">Sin archivo</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
