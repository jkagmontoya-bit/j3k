-- Portal J3K Seguro — storage privado
-- Ejecutar después de schema.sql.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'j3k-archivos',
  'j3k-archivos',
  false,
  52428800,
  array[
    'application/zip',
    'application/x-zip-compressed',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/png',
    'image/jpeg'
  ]
)
on conflict (id) do update
set public = false,
    file_size_limit = 52428800;

drop policy if exists "j3k_storage_read_allowed" on storage.objects;
create policy "j3k_storage_read_allowed"
on storage.objects for select to authenticated
using (
  bucket_id = 'j3k-archivos'
  and public.can_access_category((storage.foldername(name))[1])
);

drop policy if exists "j3k_storage_insert_allowed" on storage.objects;
create policy "j3k_storage_insert_allowed"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'j3k-archivos'
  and public.current_user_role() in ('admin','contador','rrhh')
  and public.can_access_category((storage.foldername(name))[1])
);

drop policy if exists "j3k_storage_update_owner_admin" on storage.objects;
create policy "j3k_storage_update_owner_admin"
on storage.objects for update to authenticated
using (
  bucket_id = 'j3k-archivos'
  and (owner = auth.uid() or public.is_admin())
)
with check (
  bucket_id = 'j3k-archivos'
  and (owner = auth.uid() or public.is_admin())
);

drop policy if exists "j3k_storage_delete_owner_admin" on storage.objects;
create policy "j3k_storage_delete_owner_admin"
on storage.objects for delete to authenticated
using (
  bucket_id = 'j3k-archivos'
  and (owner = auth.uid() or public.is_admin())
);
