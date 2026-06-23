# Portal J3K Seguro

App moderna preparada para **Vercel + Supabase**.

## Incluye

- Login real con Supabase Auth.
- Panel privado de Contabilidad.
- Módulos: Compras, Ventas, RRHH, Acuerdos, Bitácora y Módulos Futuros.
- Historial de registros.
- Auditoría básica.
- Subida de archivos ZIP/PDF/Excel a Supabase Storage privado.
- SQL inicial para base de datos y reglas RLS.

## Seguridad

No se guarda ninguna contraseña dentro del código ni dentro de GitHub.

Crea el usuario administrador directamente en Supabase Auth con el correo autorizado para J3K y la contraseña definida por el administrador. Luego actualiza su perfil a rol `admin`.

## Instalación local

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Configurar Supabase

1. Crea un proyecto en Supabase.
2. Ejecuta `supabase/schema.sql` en SQL Editor.
3. Ejecuta `supabase/storage.sql` en SQL Editor.
4. Crea el usuario administrador en Authentication > Users.
5. Actualiza su perfil a rol `admin`.

Lee `MANUAL_DESPLIEGUE.md`.
