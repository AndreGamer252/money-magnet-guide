import ChapterTitle from './ChapterTitle';
import HighlightBox from './HighlightBox';
import ChecklistItem from './ChecklistItem';
import SectionDivider from './SectionDivider';
import NumberBadge from './NumberBadge';
import EbookTable from './EbookTable';

const EbookContent = () => {
  const clientTypeData = [
    {
      'Tipo de Cliente': 'Novos',
      'Valor Máximo': 'R$ 500',
      'Prazo': '30 dias',
      'Juros': '10%'
    },
    {
      'Tipo de Cliente': 'Repetentes (2x pagou)',
      'Valor Máximo': 'R$ 1.200',
      'Prazo': '45 dias',
      'Juros': '8%'
    },
    {
      'Tipo de Cliente': 'VIP (5x pagou)',
      'Valor Máximo': 'R$ 3.000',
      'Prazo': '60 dias',
      'Juros': '5%'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-background">
      {/* Chapter 1 */}
      <ChapterTitle number={1} title="COMO LEVANTAR CAPITAL (SEM SER RICO)" />
      
      <HighlightBox title="Capital Inicial Mínimo:" type="gold">
        <p className="mb-4">R$500 já dá pra começar (empréstimos de R$100 a R$300 com juros de 10% ao mês).</p>
        <p><strong>Exemplo:</strong> Se emprestar R$300 para 5 clientes (R$1500 total), em 30 dias você recebe R$1650 (+R$150 de lucro).</p>
      </HighlightBox>

      <h3 className="font-montserrat text-2xl font-bold text-primary mb-6">Fontes de Capital:</h3>
      
      <div className="space-y-4 mb-8">
        <ChecklistItem>
          <strong>Amigos que têm FGTS parado:</strong> Ofereça 3% ao mês (eles ganham, você usa o dinheiro).
        </ChecklistItem>
        <ChecklistItem>
          <strong>Venda algo que não usa:</strong> Celular velho, ferramentas, tênis de marca (transforme em capital).
        </ChecklistItem>
        <ChecklistItem>
          <strong>Adiante recibos:</strong> Se você tem um comércio, use parte do faturamento como empréstimo.
        </ChecklistItem>
      </div>

      <HighlightBox title="Regra de Sangue:" type="warning">
        <p>Nunca use mais de 30% do seu dinheiro vivo. Ex.: Tem R$1000? Só opere com R$300 no começo.</p>
      </HighlightBox>

      <SectionDivider />

      {/* Chapter 2 */}
      <ChapterTitle number={2} title="CARTÃO DIGITAL VIRAL" />
      
      <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
        (SEU ANÚNCIO QUE ROLA NO WHATSAPP, INSTA E FACEBOOK)
      </p>

      <h3 className="font-montserrat text-2xl font-bold text-primary mb-6">
        Por que cartão digital é MELHOR que cartão físico?
      </h3>
      
      <div className="space-y-4 mb-8">
        <ChecklistItem><strong>Grátis:</strong> Não gasta com gráfica.</ChecklistItem>
        <ChecklistItem><strong>Viraliza:</strong> Um clique e já compartilhou com 100 grupos.</ChecklistItem>
        <ChecklistItem><strong>Atualização fácil:</strong> Muda telefone ou valor? Edita em 2 minutos.</ChecklistItem>
      </div>

      <HighlightBox title="COMO CRIAR SEU CARTÃO DIGITAL MATADOR">
        <h4 className="font-inter text-lg font-bold mb-4">Passo 1: Modelo Profissional (Usa no Canva)</h4>
        <p className="mb-4">Baixe o Canva (app grátis) e escolha o modelo "Cartão de Visita Simples".</p>
        
        <h5 className="font-inter font-bold mb-3">Informações OBRIGATÓRIAS:</h5>
        <div className="space-y-2">
          <ChecklistItem>Seu Nome (ou um nome profissional: "Crédito Rápido São Paulo")</ChecklistItem>
          <ChecklistItem>WhatsApp (número separado só pra negócios)</ChecklistItem>
          <ChecklistItem>Foto de Perfil (pode ser seu logo ou imagem séria – nada de meme)</ChecklistItem>
          <ChecklistItem>
            <strong>Frase de Impacto:</strong>
            <br />👉 "Dinheiro Rápido sem Burocracia. Resolvo HOJE."
            <br />👉 "Pagamento Flexível. Não consulto SPC/Serasa."
          </ChecklistItem>
        </div>
      </HighlightBox>

      <HighlightBox title="Exemplo de Cartão Digital Perfeito:" type="tip">
        <div className="bg-black text-gold p-6 rounded-xl">
          <h4 className="text-2xl font-bold mb-2">CRÉDITO URGENTE</h4>
          <p className="mb-4">Fala com o Paulinho!</p>
          <div className="space-y-1">
            <ChecklistItem>Dinheiro em 1h</ChecklistItem>
            <ChecklistItem>Parcelamento fácil</ChecklistItem>
            <ChecklistItem>Sem enrolação</ChecklistItem>
          </div>
          <p className="text-xl mt-4">📱 (11) 99999-9999</p>
        </div>
      </HighlightBox>

      <SectionDivider />

      {/* Chapter 3 */}
      <ChapterTitle number={3} title="GATILHOS QUE FAZEM CLIENTES TE PROCURAR" />
      
      <h3 className="font-montserrat text-2xl font-bold text-primary mb-6">
        No cartão digital, USE ESSAS PALAVRAS:
      </h3>
      
      <div className="space-y-4 mb-8">
        <ChecklistItem type="bullet"><strong>"Aprovação na Hora"</strong> – Elimina a dor da espera.</ChecklistItem>
        <ChecklistItem type="bullet"><strong>"Confidencial"</strong> – Quem deve não quer que os outros saibam.</ChecklistItem>
        <ChecklistItem type="bullet"><strong>"Primeira vez sem juros"</strong> – [Opcional] – Se quiser fidelizar.</ChecklistItem>
      </div>

      <SectionDivider />

      {/* Chapter 4 */}
      <ChapterTitle number={4} title="REGRAS PARA NÃO CAIR EM GOLPES" />
      
      <div className="space-y-4 mb-8">
        <ChecklistItem><strong>NUNCA</strong> empreste só por áudio – Exija foto do RG e comprovante.</ChecklistItem>
        <ChecklistItem><strong>Código de Segurança:</strong> Peça pra pessoa escrever seu nome num papel e foto com o documento.</ChecklistItem>
        <ChecklistItem><strong>WhatsApp Business:</strong> Use um número separado pra não misturar com sua vida pessoal.</ChecklistItem>
      </div>

      <HighlightBox title="DICA FINAL:" type="tip">
        <p>Atualize seu cartão a cada 3 meses com depoimentos reais:</p>
        <p className="italic">"Me salvou quando precisei! – Maria, dona de loja" (Com autorização, claro).</p>
      </HighlightBox>

      <SectionDivider />

      {/* Chapter 5 */}
      <ChapterTitle number={5} title="PERFIL DOS CLIENTES QUE PAGAM" />
      
      <h3 className="font-montserrat text-2xl font-bold text-primary mb-6">
        10 Exemplos de Clientes Ideais:
      </h3>
      
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          "Pedreiros (trabalham por diária, recebem sempre)",
          "Motoristas de Uber/99 (têm carro como garantia)",
          "Cabeleireiras de bairro (clientela fixa, renda estável)",
          "Vendedores de loja (salário + comissão)",
          "Cozinheiras de restaurante (emprestam pra comprar ingredientes)",
          "Costureiras (trabalham por encomenda)",
          "Eletricistas (serviço sempre demandado)",
          "Vendedores de pipoca (baixo risco, valor pequeno)",
          "Professores de reforço (têm educação, evitam calote)",
          "Frentistas (salário fixo + horas extras)"
        ].map((client, index) => (
          <div key={index} className="flex items-start">
            <NumberBadge number={index + 1} className="mr-3 mt-1" />
            <p className="font-inter text-lg leading-relaxed">{client}</p>
          </div>
        ))}
      </div>

      <HighlightBox title="Clientes para Evitar:" type="warning">
        <div className="space-y-2">
          <ChecklistItem>Apostadores em cassinos online.</ChecklistItem>
          <ChecklistItem>Pessoas que mudam de número toda semana.</ChecklistItem>
          <ChecklistItem>Quem já deve pra outros 3+ agiotas.</ChecklistItem>
        </div>
      </HighlightBox>

      <SectionDivider />

      {/* Chapter 6 */}
      <ChapterTitle number={6} title="ANÁLISE DE RISCO (PASSO A PASSO)" />
      
      <HighlightBox title="Checklist Antes de Emprestar:">
        <h4 className="font-inter text-lg font-bold mb-3">Documentos Obrigatórios:</h4>
        <div className="space-y-2 mb-6">
          <ChecklistItem>Foto da CNH + CPF (ou Título de Eleitor)</ChecklistItem>
          <ChecklistItem>Comprovante de residência (casa ou trabalho)</ChecklistItem>
        </div>

        <h4 className="font-inter text-lg font-bold mb-3">Garantias Reais:</h4>
        <div className="space-y-2 mb-6">
          <ChecklistItem>Celular (iPhone ou Android top)</ChecklistItem>
          <ChecklistItem>Ferramentas (furadeira, betoneira)</ChecklistItem>
          <ChecklistItem>Joias (aliança, corrente de ouro)</ChecklistItem>
        </div>

        <h4 className="font-inter text-lg font-bold mb-3">Checagem Rápida:</h4>
        <div className="space-y-2">
          <ChecklistItem>Pesquise no Google o nome + cidade ("José Silva + São Paulo")</ChecklistItem>
          <ChecklistItem>Veja redes sociais (se tem família, trabalho fixo)</ChecklistItem>
        </div>
      </HighlightBox>

      <SectionDivider />

      {/* Chapter 7 */}
      <ChapterTitle number={7} title="VALOR MÁXIMO E FREQUÊNCIA" />
      
      <h3 className="font-montserrat text-2xl font-bold text-primary mb-6">Tabela de Controle:</h3>
      
      <EbookTable
        headers={['Tipo de Cliente', 'Valor Máximo', 'Prazo', 'Juros']}
        rows={clientTypeData}
      />

      <HighlightBox title="Exemplos Práticos:" type="tip">
        <p className="mb-4"><strong>Depósito de 10%:</strong> Emprestou R$1000? Guarda R$100. Se pagar, devolve.</p>
        
        <h4 className="font-inter text-lg font-bold mb-3">Contrato Simples:</h4>
        <div className="bg-gray-100 p-4 rounded-xl italic">
          "Eu, [Nome], devo R$[Valor] até [Data]. Em caso de atraso, autorizo a cobrança via [Garantia]." (Assinatura e foto).
        </div>
      </HighlightBox>

      <SectionDivider />

      {/* Chapter 8 */}
      <ChapterTitle number={8} title="PLANILHA DE CONTROLE (EXEMPLO)" />
      
      <HighlightBox title="Itens Essenciais:">
        <h4 className="font-inter text-lg font-bold mb-3">Colunas:</h4>
        <div className="grid md:grid-cols-2 gap-2">
          <ChecklistItem>Data</ChecklistItem>
          <ChecklistItem>Nome</ChecklistItem>
          <ChecklistItem>Telefone</ChecklistItem>
          <ChecklistItem>Valor</ChecklistItem>
          <ChecklistItem>Vencimento</ChecklistItem>
          <ChecklistItem>Garantia</ChecklistItem>
          <ChecklistItem>Situação do pagamento</ChecklistItem>
        </div>
        
        <h4 className="font-inter text-lg font-bold mb-3 mt-6">Apps:</h4>
        <ChecklistItem>Google Sheets (grátis e acessível de qualquer lugar).</ChecklistItem>
      </HighlightBox>

      <SectionDivider />

      {/* Finalizing */}
      <HighlightBox title="FINALIZANDO:" type="gold">
        <p className="mb-4">Lembre-se: Seu negócio é fluxo. Dinheiro parado = prejuízo.</p>
        <p><strong>Dica Bônus:</strong> Ofereça "desconto" pra quem paga antes (ex.: 5% off se pagar em 10 dias).</p>
      </HighlightBox>

        <div className="text-center mt-16 mb-8">
        <div className="bg-gradient-gold rounded-2xl p-8 shadow-gold">
          <p className="font-montserrat text-3xl font-bold text-primary mb-4">
            Agora sim: ebook completo,
          </p>
          <p className="font-montserrat text-2xl font-bold text-primary">
            sem mistério e pronto pra colocar em prática.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EbookContent;