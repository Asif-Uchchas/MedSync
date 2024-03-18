const AuthLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {

  return (
      <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#A6D71C] to-[#2E6A47]">
      {children}
    </div>
  );
}

export default AuthLayout;