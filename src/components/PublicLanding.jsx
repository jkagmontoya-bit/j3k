import { LockKeyhole, ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from './Button'

export default function PublicLanding({ onEnter }) {
  return (
    <div className="landing">
      <header className="landing-header">
        <div className="brand-block">
          <div className="brand-mark">J3</div>
          <div>
            <strong>J3K Ingeniería y Diseño</strong>
            <span>Portal corporativo</span>
          </div>
        </div>

        <nav className="landing-nav">
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#clientes">Clientes</a>
          <a className="contact-link" href="#contacto">Contáctanos</a>
        </nav>
      </header>

      <section className="hero" id="nosotros">
        <div>
          <p className="eyebrow">Consultoría & ejecución de ingeniería — Perú</p>
          <h1>Innovando el futuro. Juntos.</h1>
          <p>
            Portal institucional y área privada para gestión documental, compras, ventas,
            RRHH, historial y archivos protegidos.
          </p>
          <Button onClick={onEnter}>
            <LockKeyhole size={18} />
            Contabilidad
            <ArrowRight size={18} />
          </Button>
        </div>
        <div className="hero-card">
          <strong>Panel seguro</strong>
          <ul>
            <li><CheckCircle2 size={18} /> Login real con Supabase</li>
            <li><CheckCircle2 size={18} /> Base de datos con historial</li>
            <li><CheckCircle2 size={18} /> ZIP privados por área</li>
            <li><CheckCircle2 size={18} /> Auditoría de cambios</li>
          </ul>
        </div>
      </section>

      <section className="public-grid" id="servicios">
        <article>
          <h3>Servicios</h3>
          <p>Ingeniería, diseño, gestión documental y soporte administrativo modular.</p>
        </article>
        <article id="proyectos">
          <h3>Proyectos</h3>
          <p>Seguimiento de documentación, acuerdos, bitácoras y expedientes.</p>
        </article>
        <article id="clientes">
          <h3>Clientes</h3>
          <p>Organización clara para trazabilidad, cumplimiento y control interno.</p>
        </article>
        <article id="contacto">
          <h3>Contáctanos</h3>
          <p>Canal corporativo para solicitudes y coordinación con el equipo J3K.</p>
        </article>
      </section>
    </div>
  )
}
