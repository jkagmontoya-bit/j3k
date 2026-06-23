import { useEffect, useState } from 'react'
import { listAuditLogs } from '../lib/api'
import Status from '../components/Status'

export default function Audit() {
  const [logs, setLogs] = useState([])
  const [status, setStatus] = useState('')

  useEffect(() => {
    listAuditLogs()
      .then(setLogs)
      .catch((error) => setStatus(error.message || 'No se pudo cargar auditoría. Solo admin puede verla.'))
  }, [])

  return (
    <section className="panel">
      <h2>Auditoría</h2>
      <p className="muted">Historial técnico de altas, cambios y archivos.</p>
      <Status type="error">{status}</Status>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Acción</th>
              <th>Tabla</th>
              <th>Módulo</th>
              <th>Registro</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td>{new Date(log.created_at).toLocaleString('es-PE')}</td>
                <td>{log.action}</td>
                <td>{log.table_name}</td>
                <td>{log.module_name}</td>
                <td>{log.record_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
