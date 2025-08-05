interface ChapterTitleProps {
  number: number;
  title: string;
  className?: string;
}

const ChapterTitle = ({ number, title, className = "" }: ChapterTitleProps) => {
  return (
    <div className={`mb-12 ${className}`}>
      <div className="flex items-center mb-6">
        <div className="bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center shadow-elegant mr-6">
          <span className="font-playfair text-2xl font-bold text-gold">{number}</span>
        </div>
        <div className="flex-1 h-1 bg-gradient-gold"></div>
      </div>
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default ChapterTitle;