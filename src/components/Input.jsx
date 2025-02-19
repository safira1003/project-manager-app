export default function Input({ label, textarea, width = "", ...props }) {
  const classes =
    "w-full text-xs md:text-sm p-2 border-b-2 rounded-sm border-skyBlue bg-white text-stone-600 font-medium focus:outline-none focus:border-teal";
  return (
    <p className={`flex flex-col gap-1 ${width}`}>
      <label className="text-sm md:text-base font-bold text-navy">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}
