interface StatProps {
  number: string;
  label: string;
}

const Stat = ({ number, label }: StatProps) => {
  return (
    <div>
      <h3
        className="
        text-4xl
        font-black
        text-[var(--primary)]
      "
      >
        {number}
      </h3>

      <p
        className="
        mt-2
        text-sm
        text-slate-500
      "
      >
        {label}
      </p>
    </div>
  );
};

export default Stat;
