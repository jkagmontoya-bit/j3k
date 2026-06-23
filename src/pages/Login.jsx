import { useState } from 'react'
import { LockKeyhole, Mail } from 'lucide-react'
import { supabase, hasSupabaseConfig } from '../lib/supabase'
import Button from '../components/Button'
import Status from '../components/Status'

export default function Login({ onBack }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('')
    setLoading(true)

    try {
      if (!hasSupabaseConfig) {
        setStatus('Faltan variables VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY.')
        return
      }

      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
    } catch (error) {
      setStatus(error.message || 'No se pudo iniciar sesión.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-screen">
      <form className="login-card" onSubmit={handleSubmit}>
        <div className="login-icon">
          <LockKeyhole size={28} />
        </div>

        <p className="eyebrow">Área privada</p>
        <h1>Acceso a Contabilidad J3K</h1>
        <p>
          Ingresa con el correo autorizado en Supabase. La contraseña no se guarda
          en el código ni en GitHub.
        </p>

        <label className="field">
          <span>Correo</span>
          <div className="input-with-icon">
            <Mail size={16} />
            <input
              type="email"
              value={email}
              placeholder="correo@dominio.com"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
        </label>

        <label className="field">
          <span>Contraseña</span>
          <input
            type="password"
            value={password}
            placeholder="••••••••••"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        <Status type="error">{status}</Status>

        <div className="actions">
          <Button type="submit" disabled={loading}>{loading ? 'Validando...' : 'Ingresar'}</Button>
          <Button type="button" variant="ghost" onClick={onBack}>Volver</Button>
        </div>
      </form>
    </div>
  )
}
