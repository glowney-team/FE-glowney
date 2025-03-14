export const Container: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-container relative flex flex-col gap-5 px-container py-10">{children}</div>
  );
};

export default Container;
