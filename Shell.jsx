export default function FileField({ onChange }) {
  return (
    <label className="field">
      <span>Archivo opcional</span>
      <input
        type="file"
        accept=".zip,.pdf,.xlsx,.xls,.docx,.png,.jpg,.jpeg"
        onChange={(event) => onChange(event.target.files?.[0] || null)}
      />
      <small>Formatos sugeridos: ZIP, PDF, Excel, Word o imagen. Máximo recomendado: 50 MB.</small>
    </label>
  )
}
