import { Shield, LogOut, Building2, Database, FileArchive } from 'lucide-react'
import Button from './Button'

export default function Shell({ user, profile, active, setActive, onLogout, children }) {
  const items = [
    ['dashboard', 'Dashboard'],
    ['compras', 'Compras'],
    ['ventas', 'Ventas'],
    ['rrhh', 'RRHH'],
    ['acuerdos', 'Acuerdos'],
    ['bitacora', 'Bitácora'],
    ['modulos', 'Módulos futuros'],
    ['historial', 'Historial'],
    ['auditoria', 'Auditoría'],
  ]

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">J3</div>
          <div>
            <strong>J3K</strong>
            <span>Portal Seguro</span>
          </div>
        </div>

        <div className="secure-pill">
          <Shield size={16} />
          Área privada
        </div>

        <nav className="side-nav">
          {items.map(([key, label]) => (
            <button key={key} className={active === key ? 'active' : ''} onClick={() => setActive(key)}>
              {label}
            </button>
          ))}
        </nav>

        <div className="side-card">
          <Database size={18} />
          <div>
            <strong>Base de datos</strong>
            <span>Supabase PostgreSQL</span>
          </div>
        </div>

        <div className="side-card">
          <FileArchive size={18} />
          <div>
            <strong>ZIP privados</strong>
            <span>Storage protegido</span>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">Consultoría & ejecución de ingeniería — Perú</p>
            <h1>Contabilidad J3K</h1>
          </div>
          <div className="user-chip">
            <Building2 size={18} />
            <div>
              <strong>{profile?.display_name || user?.email}</strong>
              <span>{profile?.role || 'consulta'}</span>
            </div>
            <Button variant="ghost" onClick={onLogout}>
              <LogOut size={16} />
              Salir
            </Button>
          </div>
        </header>
        {children}
      </main>
    </div>
  )
}
