interface ChecklistItemProps {
  children: React.ReactNode;
  type?: 'check' | 'bullet';
  className?: string;
}

const ChecklistItem = ({ children, type = 'check', className = "" }: ChecklistItemProps) => {
  const icon = type === 'check' ? '✅' : '🔥';
  
  return (
    <div className={`flex items-start mb-4 ${className}`}>
      <span className="text-2xl mr-4 mt-1">{icon}</span>
      <div className="font-inter text-lg leading-relaxed text-foreground flex-1">
        {children}
      </div>
    </div>
  );
};

export default ChecklistItem;