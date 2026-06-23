# Manual de despliegue — Portal J3K Seguro

## 1. GitHub

Sube este proyecto a GitHub.

Estructura principal:

```text
j3k-portal-seguro
├── index.html
├── package.json
├── src/
├── supabase/
├── public/
├── vercel.json
├── .env.example
└── README.md
```

No subas `.env.local`.

## 2. Supabase

1. Crea un proyecto.
2. Copia Project URL y anon public key.
3. Abre SQL Editor.
4. Ejecuta `supabase/schema.sql`.
5. Ejecuta `supabase/storage.sql`.

## 3. Crear usuario administrador

En Supabase:

```text
Authentication > Users > Add user
```

Crea el usuario con el correo autorizado por J3K.

No escribas contraseñas dentro del código ni dentro de GitHub.

Luego ve a SQL Editor y asigna rol admin:

```sql
update public.profiles
set role = 'admin', display_name = 'Administrador J3K'
where email = 'correo_autorizado@dominio.com';
```

## 4. Vercel

1. New Project.
2. Importa el repositorio desde GitHub.
3. Framework: Vite.
4. Deploy.
5. Agrega variables de entorno:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
6. Redeploy.

## 5. Actualización automática

```text
Editas GitHub
↓
Commit changes
↓
Vercel detecta
↓
Deploy automático
```
