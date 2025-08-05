const EbookCover = () => {
  return (
    <div className="min-h-screen bg-gradient-cover flex items-center justify-center p-4">
      <div className="text-center text-white max-w-4xl">
        <div className="mb-6">
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold mb-4 leading-tight">
            O MANUAL DO
          </h1>
          <h1 className="font-montserrat text-5xl md:text-6xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent leading-tight">
            AGIOTA INTELIGENTE
          </h1>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 mb-8 shadow-deep">
          <p className="font-inter text-lg md:text-xl font-medium mb-3">
            Como emprestar dinheiro com segurança,
          </p>
          <p className="font-inter text-lg md:text-xl font-medium mb-3">
            escalar seu negócio e evitar calotes
          </p>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mt-4"></div>
        </div>

        <div className="bg-gradient-gold rounded-2xl p-4 inline-block shadow-gold">
          <p className="font-inter text-primary font-bold text-base uppercase tracking-wider">
            VERSÃO DETALHADA
          </p>
        </div>
      </div>
    </div>
  );
};

export default EbookCover;