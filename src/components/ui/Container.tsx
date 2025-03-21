export const Container: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className="max-container relative flex flex-col gap-4 px-container">{children}</div>;
};

export default Container;
