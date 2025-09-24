import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Multiplicar.scss'

const App = () => {
  return (
    <div>
      <div className='tudo'>
        <div className='topo'> 
          <img 
            src="https://media.discordapp.net/attachments/1399878782134780027/1418345725430988831/logo_feira-removebg-preview.png?ex=68d3b7a4&is=68d26624&hm=38d27c8b7698dab6cac275072ecc23a60126f075d7398b68ff987f6c7de68b38&=&format=webp&quality=lossless" 
            alt="Logo da feira" 
          />
          <h2>Instituto Social Nossa Senhora de Fátima</h2>
          <h1>Feira De Profissões</h1>
        </div>

        <hr />

        <div className='cartoes1'>
          <h2>O que é nossa feira de profissões?</h2>
          <p>
            A Feira das Profissões é um dos eventos mais esperados do ano no Instituto Social Nossa Senhora de Fátima. 
            Realizada em 30 de setembro de 2024, a terceira edição reuniu mais de 2.000 visitantes e contabilizou aproximadamente 
            4.600 atendimentos ao longo do dia. Com um ambiente acolhedor, educativo e participativo, a feira reforça o compromisso 
            do Instituto com a formação profissional e humana de jovens e adultos da região.
          </p>
          <img 
            src="https://media.discordapp.net/attachments/1399878782134780027/1420156762320928889/IMG_4862_1.png?ex=68d45f8d&is=68d30e0d&hm=f682a7b428707e62a354d45b2fc961859ebb711a75a52d9e6cd6cf4b11890287&=&format=webp&quality=lossless" 
            alt="Foto da feira" 
          />
        </div>

        <div className='cartoes2'>
          <h2>Térreo</h2>

          <p>
            Durante a feira, são realizados sorteios de brindes e prêmios para os participantes. 
            Esses sorteios servem para atrair o público e tornar o evento mais interativo e divertido.
          </p>

          <img 
            src="https://media.discordapp.net/attachments/1399878782134780027/1420157225288073387/IMG_4784_1.png?ex=68d45ffb&is=68d30e7b&hm=e0f62b60bb935c1b6f2f4f0e7300f7398aaa765488c08cecd9ef61a65d3e2b88&=&format=webp&quality=lossless" 
            alt="Imagem do térreo" 
          />
          <img 
            src="https://media.discordapp.net/attachments/1399878782134780027/1420157542482317312/IMG_4733_2.png?ex=68d46047&is=68d30ec7&hm=08b63f543d9e36af90e65d00c65ec8eebb46cd76e989694eb042a63bc37be3b4&=&format=webp&quality=lossless" 
            alt="Imagem da feira" 
          />

          <h3>Sorteios e Brindes</h3>
          <p>
            Se você vai nos visitar, vamos realizar sorteios ao longo do dia, e todos os visitantes terão chance de ganhar! 
            Dá uma olhada no que pode aparecer por aí: brindes exclusivos como mochila, camisetas, canecas personalizadas e kits escolares.
          </p>

          <h3>Padaria do Frei</h3>
          <p>
            Durante a Feira das Profissões, você também vai poder saborear os produtos artesanais preparados com muito carinho pela Padaria do Frei — uma das atrações mais queridas do evento!
          </p>
          <p>Confira algumas das delícias que costumam estar à venda:</p>
          <ul>
            <li>Pães artesanais</li>
            <li>Bolos caseiros e fatias variadas</li>
            <li>Biscoitos e cookies</li>
            <li>Pão de queijo, broas e salgados</li>
            <li>Doces típicos feitos na hora</li>
          </ul>
          <p>
            E o melhor: ao comprar, você ainda apoia um projeto social que transforma vidas!
          </p>

          <img 
            src="https://media.discordapp.net/attachments/1399878782134780027/1420157984524210176/FEI_2024_CEDESP26_1.png?ex=68d460b0&is=68d30f30&hm=a3be61e7e35dac44fd2321908399826f054a3a2272599ef5dca7f7a942f88acf&=&format=webp&quality=lossless" 
            alt="Produtos da padaria" 
          />
          <img 
            src="https://media.discordapp.net/attachments/1399878782134780027/1420158135045193808/IMG_4922_1.png?ex=68d460d4&is=68d30f54&hm=06265956f6c1e0f326d764cfec5694442d3900ac54d70aca920b8c82b6d922de&=&format=webp&quality=lossless" 
            alt="Padaria do Frei" 
          />

          <h3>Livros e Materiais Criativos</h3>
          <p>
            Espaço para ler, trocar e se inspirar! Na nossa Feira das Profissões, o conhecimento vai além dos estandes. 
            Você também vai encontrar um cantinho especial com livros, revistas e materiais criativos esperando por você.
          </p>
          <p>O que você vai encontrar por lá:</p>
          <ul>
            <li>Sebo com livros para troca ou doação — traga um, leve outro!</li>
            <li>Livros de literatura, poesia, autoajuda, educação e muito mais</li>
            <li>Materiais criativos como cadernos personalizados, marcadores de página, blocos de anotações e adesivos</li>
            <li>Inspirações para quem ama ler, escrever ou desenhar</li>
          </ul>
          <p>
            É um espaço feito para quem acredita que o conhecimento transforma — e que boas ideias podem nascer de uma simples leitura ou rabisco. 
            Passe por lá, descubra algo novo e leve um pedacinho de inspiração com você!
          </p>
        </div>

        <div className='cartoes3'>
          <h2>Primeiro andar</h2>
          <p>Depois faz isso</p>
          <img 
            src="https://media.discordapp.net/attachments/1399878782134780027/1420158770637439016/FEI_2024_CEDESP61_2.png?ex=68d4616c&is=68d30fec&hm=afb242ee51f1930d24506f137e478f6825bd3a41a5a42692a21217439eb42768&=&format=webp&quality=lossless" 
            alt="Primeiro andar" 
          />
        </div>
      </div>

      <div className='cartoes4'>
        <h2>Segundo andar</h2>
        <h3>Depois faz isso</h3>
        <img src="https://media.discordapp.net/attachments/1399878782134780027/1420191157174009876/IMG_4953_1.png?ex=68d47f95&is=68d32e15&hm=9ecbb208489425b25e7a81d43c0d9142ce8f9cd5998d3d473b154b1b9e46c272&=&format=webp&quality=lossless" alt="" />
      </div>

      <div className='cartoes5'>
<h2>Terceiro andar</h2>
<h3>Depois faz isso</h3>
<img src="https://media.discordapp.net/attachments/1399878782134780027/1420191761044869130/FEI_2024_CEDESP52_1.png?ex=68d48025&is=68d32ea5&hm=6067d7a69e5f29c09829b5808f0d2a5fdb1fc773b1378945ef40d196b94f4fd5&=&format=webp&quality=lossless" alt="" />
      </div>

      <div className='cartoes6'>
<h2>Auditório</h2>
<h3>depois faz isso</h3>
<img src="https://media.discordapp.net/attachments/1399878782134780027/1420196939852415056/FEI_2024_CEDESP69_1_1.png?ex=68d484f8&is=68d33378&hm=dd805bb6c5194c22687a2a01e1ec125ebb8eba42cb997d29c1407850102528ee&=&format=webp&quality=lossless" alt="" />
      </div>

      <div className='cartoes7'>
<h2>Sala de inglês</h2>
<h3>depois faz isso</h3>
<img src="https://media.discordapp.net/attachments/1399878782134780027/1420192518745882625/FEI_2024_CEDESP27_1.png?ex=68d480da&is=68d32f5a&hm=a80caea1e28e426e5dd7101ea348cd8b472b0d0d52ab65905f0847bcac7c7af7&=&format=webp&quality=lossless" alt="" />
      </div>

      <div className='cartoes8'>
<h2>Sobre o instituito e nossa história</h2>
<h3>Quem somos</h3>
<p>Fundado em 20 de maio de 1971 por Frei Xavier — um frade franciscano de origem italiana —, o Instituto nasceu com uma missão clara: oferecer formação profissional e apoio educacional a crianças e jovens da região sul de São Paulo, especialmente aqueles sem acesso a oportunidades dignas.
Aqui no Instituto, atendemos atualmente mais de 2.000 jovens por ano oriundos de cerca de 110 bairros de Santo Amaro — uma atuação de largo alcance que consolida nossa presença e relevância na comunidade</p>
<br />
<h3>O que fazemos</h3>
<p>Oferecemos cursos profissionalizantes e formação para o mercado de trabalho, estimulando o desenvolvimento intelectual, moral, profissional e cidadania. Cultivamos uma abordagem integral, que inclui também valores humanos e religiosos, fundamentais para o comprometimento ético e social dos jovens</p>
<br />
<h3>Nosso impacto</h3>
<p>Em 2024, celebramos 53 anos de serviço e transformação social, com mais de 50 mil alunos formados ao longo dessa história Grupo Sul News. Foi um ano marcante, com a presença de líderes como o Bispo Dom José Negri, o prefeito Ricardo Nunes, vereadores e deputados, culminando num momento de festa e reconhecimento à comunidade e equipe</p>
<br />
<h3>Mensagem final</h3>
<p>O Instituto Social Nossa Senhora de Fátima é mais que um centro educacional. Somos uma comunidade comprometida com o futuro de tantos jovens — oferecendo formação, cidadania e oportunidade de transformação pessoal. Fundado com fé e idealismo por Frei Xavier, nosso legado segue vivo, impulsionado por professores, voluntários, parceiros e famílias que acreditam no poder da educação e da solidariedade.</p>
<br />
<h3>Nossa equipe</h3>
<img src="https://media.discordapp.net/attachments/1399878782134780027/1420193440922075236/Copia_de_zFEI_2024_CEDESP89_1.png?ex=68d481b6&is=68d33036&hm=e13a9e097c09401e5e89190fda2c060b02d5e448fc006590fc732332a6b25e13&=&format=webp&quality=lossless&width=730&height=548" alt="" />
<br />
<h2>Frei Xavier:</h2>
<h2> “Esforço que transforma, e o orgulho permanece”</h2>
<img src="https://media.discordapp.net/attachments/1399878782134780027/1420194103253008526/MG_0398_editada_1_1.png?ex=68d48254&is=68d330d4&hm=b4511d0c3548191f87e7a1adfcd927cf82e864b477dc99535623237717c5a020&=&format=webp&quality=lossless&width=617&height=548" alt="" />
      </div>

      <div className='rodape'>
        <div className="flex items-center gap-3">
          <img
            src="https://media.discordapp.net/attachments/1399878782134780027/1418345725430988831/logo_feira-removebg-preview.png?ex=68d46064&is=68d30ee4&hm=53d0fa7bd62d0e6fe68c1eba0bd3b199723bd45a0a3827dface5df5bd926b817&=&format=webp&quality=lossless" 
            alt="Instituto Logo"
            className="w-16 h-16 object-contain"
          />
          <h3 className="font-bold text-sm leading-5">
            Instituto Social <br /> Nossa Senhora de Fátima
          </h3>
        </div>

        <div>
          <h4 className="font-bold">Endereço</h4>
          <p className="text-sm">
            Instituto Social Nossa Senhora de Fátima <br />
            Av. Cel. Octaviano de Freitas Costa, 463 <br />
            Veleiros - São Paulo - SP 047773-000
          </p>
        </div>

      
        <div>
          <h4 className="font-bold">Contato</h4>
          <p className="text-sm">(11) 3798-5037 - secretaria</p>
          <p className="text-sm">(11) 96398 - whatsapp secretaria</p>
        </div>

        <div className="flex gap-4 text-2xl">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="TikTok"><FaTiktok /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>
    </div>
  )
}

export default App
