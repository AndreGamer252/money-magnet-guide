const EbookCover = () => {
  return (
    <div className="h-screen bg-gradient-cover flex items-center justify-center p-4">
      <div className="text-center text-white max-w-3xl">
        <div className="mb-4">
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-3 leading-tight">
            O MANUAL DO
          </h1>
          <h1 className="font-montserrat text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent leading-tight">
            AGIOTA INTELIGENTE
          </h1>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6 shadow-deep">
          <p className="font-inter text-base md:text-lg font-medium mb-2">
            Como emprestar dinheiro com segurança,
          </p>
          <p className="font-inter text-base md:text-lg font-medium mb-2">
            escalar seu negócio e evitar calotes
          </p>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mt-3"></div>
        </div>

        <div className="bg-gradient-gold rounded-xl p-3 inline-block shadow-gold">
          <p className="font-inter text-primary font-bold text-sm uppercase tracking-wider">
            VERSÃO DETALHADA
          </p>
        </div>
      </div>
    </div>
  );
};

export default EbookCover;