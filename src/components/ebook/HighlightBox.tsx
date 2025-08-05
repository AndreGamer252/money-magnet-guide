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
        return 'bg-blue-50 border-l-4 border-secondary text-secondary-foreground';
      case 'warning':
        return 'bg-orange-50 border-l-4 border-orange-gold text-primary';
      case 'gold':
      default:
        return 'bg-gradient-gold text-gold-foreground shadow-gold';
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