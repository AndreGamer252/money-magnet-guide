interface HighlightBoxProps {
  title?: string;
  children: React.ReactNode;
  type?: 'tip' | 'warning' | 'gold';
  className?: string;
}

const HighlightBox = ({ title, children, type = 'gold', className = "" }: HighlightBoxProps) => {
  const getBoxStyles = () => {
    switch (type) {
      case 'tip':
        return 'bg-green-50 border-l-4 border-secondary text-primary';
      case 'warning':
        return 'bg-orange-50 border-l-4 border-orange-500 text-primary';
      case 'gold':
      default:
        return 'bg-gradient-gold text-primary shadow-gold';
    }
  };

  return (
    <div className={`rounded-2xl p-8 mb-8 ${getBoxStyles()} ${className}`}>
      {title && (
        <h4 className="font-inter text-xl font-bold mb-4">{title}</h4>
      )}
      <div className="font-inter text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default HighlightBox;