export const Divider: React.FC<{ label?: string }> = ({ label }) => {
  return label ? (
    <div className="flex items-center gap-2 py-2 text-neutral-400">
      <hr className="w-full border-neutral-300" />
      <span className="text-sm">{label}</span>
      <hr className="w-full border-neutral-300" />
    </div>
  ) : (
    <div className="flex items-center gap-2 py-2 text-neutral-400">
      <hr className="w-full border-neutral-300" />
    </div>
  );
};

export default Divider;
