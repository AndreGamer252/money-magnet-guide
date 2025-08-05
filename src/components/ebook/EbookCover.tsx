const EbookCover = () => {
  return (
    <div className="min-h-screen bg-gradient-cover flex items-center justify-center p-8">
      <div className="text-center text-white max-w-4xl">
        <div className="mb-8">
          <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-6 leading-tight">
            O MANUAL DO
          </h1>
          <h1 className="font-playfair text-6xl md:text-7xl font-bold mb-8 bg-gradient-gold bg-clip-text text-transparent leading-tight">
            AGIOTA INTELIGENTE
          </h1>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-deep">
          <p className="font-inter text-xl md:text-2xl font-medium mb-4">
            Como emprestar dinheiro com segurança,
          </p>
          <p className="font-inter text-xl md:text-2xl font-medium mb-4">
            escalar seu negócio e evitar calotes
          </p>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mt-6"></div>
        </div>

        <div className="bg-gradient-gold rounded-2xl p-6 inline-block shadow-gold">
          <p className="font-inter text-primary font-bold text-lg uppercase tracking-wider">
            VERSÃO DETALHADA
          </p>
        </div>
      </div>
    </div>
  );
};

export default EbookCover;