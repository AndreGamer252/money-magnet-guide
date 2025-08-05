interface NumberBadgeProps {
  number: number;
  className?: string;
}

const NumberBadge = ({ number, className = "" }: NumberBadgeProps) => {
  return (
    <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-full shadow-elegant ${className}`}>
      <span className="font-inter text-lg font-bold text-gold">{number}</span>
    </div>
  );
};

export default NumberBadge;