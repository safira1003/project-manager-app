export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="py-2 px-2 md:px-3 text-xs font-medium md:text-base rounded-lg shadow-md bg-teal text-beige hover:bg-skyBlue hover:text-navy "
    >
      {children}
    </button>
  );
}
