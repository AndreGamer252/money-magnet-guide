import EbookCover from "@/components/ebook/EbookCover";
import EbookContent from "@/components/ebook/EbookContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <EbookCover />
      <EbookContent />
    </div>
  );
};

export default Index;
