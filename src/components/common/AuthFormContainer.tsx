export const AuthFormContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative flex h-full w-full max-w-sm flex-col justify-center gap-3 @lg:max-h-[550px]">
      {children}
    </div>
  );
};

export default AuthFormContainer;
