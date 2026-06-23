export function TextInput({ label, textarea = false, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </label>
  )
}

export function SelectInput({ label, children, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      <select {...props}>{children}</select>
    </label>
  )
}
