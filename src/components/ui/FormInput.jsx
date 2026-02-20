const FormInput = ({ id, label, type = "text", rows, value, onChange, error }) => {
  const baseClasses =
    `block py-3 px-0 w-full text-sm bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 peer transition-colors ${error ? 'border-red-500 focus:border-red-500 text-red-700' : 'border-slate-300 focus:border-giget-red text-giget-blue'}`;
  const labelClasses =
    `absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${error ? 'text-red-500 peer-focus:text-red-500' : 'text-slate-400 peer-focus:text-giget-red'}`;

  return (
    <div className="relative group mb-2">
      {rows ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={onChange}
          className={`${baseClasses} resize-none`}
          placeholder=" "
        />
      ) : (
        <input type={type} id={id} value={value} onChange={onChange} className={baseClasses} placeholder=" " />
      )}
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      {error && <p className="text-red-600 font-semibold text-[11px] tracking-wide mt-1 absolute -bottom-5 left-0">{error}</p>}
    </div>
  );
};

export default FormInput;
