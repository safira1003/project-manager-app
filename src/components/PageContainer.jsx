export default function PageContainer({ children, ...props }) {
  return (
    <div
      {...props}
      className="w-full py-8 md:py-16 px-6 md:px-12 flex flex-col gap-4 md:gap-8"
    >
      {children}
    </div>
  );
}
