const FormInput = ({ id, label, type = "text", rows }) => {
  const baseClasses =
    "block py-3 px-0 w-full text-sm text-giget-blue bg-transparent border-0 border-b border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-giget-red peer transition-colors";
  const labelClasses =
    "absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-giget-red peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <div className="relative group">
      {rows ? (
        <textarea
          id={id}
          rows={rows}
          className={`${baseClasses} resize-none`}
          placeholder=" "
        />
      ) : (
        <input type={type} id={id} className={baseClasses} placeholder=" " />
      )}
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
};

export default FormInput;
