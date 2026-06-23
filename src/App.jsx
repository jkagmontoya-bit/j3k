import { useEffect, useState } from 'react'
import { supabase, hasSupabaseConfig } from './lib/supabase'
import { getCurrentProfile } from './lib/api'
import PublicLanding from './components/PublicLanding'
import Shell from './components/Shell'
import Status from './components/Status'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ModuleForm from './pages/ModuleForm'
import FutureModules from './pages/FutureModules'
import History from './pages/History'
import Audit from './pages/Audit'

export default function App() {
  const [screen, setScreen] = useState('public')
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [active, setActive] = useState('dashboard')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!hasSupabaseConfig) {
      setLoading(false)
      return
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
      if (newSession) setScreen('app')
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  useEffect(() => {
    async function loadProfile() {
      if (!session?.user) {
        setProfile(null)
        return
      }

      try {
        const data = await getCurrentProfile(session.user.id)
        setProfile(data)
      } catch {
        setProfile({ display_name: session.user.email, role: 'consulta' })
      }
    }

    loadProfile()
  }, [session])

  async function logout() {
    await supabase.auth.signOut()
    setScreen('public')
    setActive('dashboard')
  }

  if (loading) return <div className="loading">Cargando Portal J3K...</div>

  if (screen === 'login' && !session) {
    return <Login onBack={() => setScreen('public')} />
  }

  if (!session) {
    return (
      <>
        <PublicLanding onEnter={() => setScreen('login')} />
        {!hasSupabaseConfig && (
          <div className="config-warning">
            <Status type="error">
              Falta configurar Supabase. Agrega VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY.
            </Status>
          </div>
        )}
      </>
    )
  }

  function renderActive() {
    if (active === 'dashboard') return <Dashboard setActive={setActive} />
    if (active === 'compras') return <ModuleForm type="compras" />
    if (active === 'ventas') return <ModuleForm type="ventas" />
    if (active === 'rrhh') return <ModuleForm type="rrhh" />
    if (active === 'acuerdos') return <ModuleForm type="acuerdos" />
    if (active === 'bitacora') return <ModuleForm type="bitacora" />
    if (active === 'modulos') return <FutureModules />
    if (active === 'historial') return <History />
    if (active === 'auditoria') return <Audit />
    return <Dashboard setActive={setActive} />
  }

  return (
    <Shell user={session.user} profile={profile} active={active} setActive={setActive} onLogout={logout}>
      {renderActive()}
    </Shell>
  )
}
