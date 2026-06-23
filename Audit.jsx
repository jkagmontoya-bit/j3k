import { useEffect, useState } from 'react'
import { ShieldCheck, Archive, Clock, FolderPlus } from 'lucide-react'
import { listDocuments, listModules } from '../lib/api'

export default function Dashboard({ setActive }) {
  const [documents, setDocuments] = useState([])
  const [modules, setModules] = useState([])

  useEffect(() => {
    listDocuments(8).then(setDocuments).catch(() => setDocuments([]))
    listModules().then(setModules).catch(() => setModules([]))
  }, [])

  return (
    <section className="content-stack">
      <div className="cards-grid">
        <button className="metric-card" onClick={() => setActive('compras')}>
          <Archive /><strong>Compras</strong><span>Registrar compra y subir ZIP</span>
        </button>
        <button className="metric-card" onClick={() => setActive('ventas')}>
          <Archive /><strong>Ventas</strong><span>Registrar venta y expediente</span>
        </button>
        <button className="metric-card" onClick={() => setActive('rrhh')}>
          <Archive /><strong>RRHH</strong><span>Boletas y expedientes</span>
        </button>
        <button className="metric-card" onClick={() => setActive('modulos')}>
          <FolderPlus /><strong>Módulos futuros</strong><span>Agregar nueva sección</span>
        </button>
      </div>

      <div className="panel">
        <div className="panel-title">
          <ShieldCheck />
          <div>
            <h2>Estado seguro</h2>
            <p>Datos protegidos con autenticación, RLS, historial y storage privado.</p>
          </div>
        </div>
      </div>

      <div className="two-columns">
        <div className="panel">
          <h2>Módulos activos</h2>
          <div className="list">
            {modules.map((item) => (
              <div className="list-row" key={item.id}>
                <strong>{item.name}</strong>
                <span>{item.category}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <h2>Últimos documentos</h2>
          <div className="list">
            {documents.map((item) => (
              <div className="list-row" key={item.id}>
                <strong>{item.title}</strong>
                <span><Clock size={14} /> {new Date(item.created_at).toLocaleString('es-PE')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
