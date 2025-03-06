export const Divider: React.FC<{ label?: string }> = ({ label }) => {
  return label ? (
    <div className="flex gap-2 items-center text-stone-400 py-2">
      <hr className="w-full border-stone-300" />
      <span className="text-sm">{label}</span>
      <hr className="w-full border-stone-300" />
    </div>
  ) : (
    <div className="flex gap-2 items-center text-stone-400 py-2">
      <hr className="w-full border-stone-300" />
    </div>
  );
};

export default Divider;
