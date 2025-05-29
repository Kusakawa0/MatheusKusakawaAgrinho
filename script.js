// Script para o menu interativo das dicas
const botoes = document.querySelectorAll('.tabs button');
const conteudoDica = document.getElementById('conteudo-dica');

const dicas = {
  1: `Comece sua horta em pequenos vasos com ervas e temperos, ideal para apartamentos. Cultivar alimentos em casa ajuda a reduzir o uso de embalagens plásticas e garante alimentos frescos e livres de agrotóxicos. Além disso, a jardinagem doméstica é terapêutica e promove conexão com a natureza.
  <br><br><em>Fonte: <a href="https://www.embrapa.br/horta-e-plantas-aromaticas" target="_blank" rel="noopener">Embrapa Hortaliças</a></em>`,

  2: `Utilize compostagem para transformar resíduos orgânicos em adubo natural para sua horta. A compostagem reduz a quantidade de lixo enviado para aterros sanitários, além de enriquecer o solo com nutrientes essenciais, melhorando a retenção de água e a saúde das plantas.
  <br><br><em>Fonte: <a href="https://www.agricultura.gov.br/assuntos/sustentabilidade/compostagem" target="_blank" rel="noopener">Ministério da Agricultura</a></em>`,

  3: `Prefira plantar espécies nativas, que são mais resistentes e ajudam o equilíbrio ambiental local. Essas plantas atraem polinizadores, conservam a biodiversidade e requerem menos água e cuidados, tornando sua horta mais sustentável e integrada ao ecossistema da região.
  <br><br><em>Fonte: <a href="https://www.institutobutantan.org.br" target="_blank" rel="noopener">Instituto Butantan</a></em>`
};

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    // Remover classe ativo de todos
    botoes.forEach(b => b.classList.remove('ativo'));
    // Adicionar classe ativo no clicado
    botao.classList.add('ativo');
    // Atualizar texto da dica com HTML
    const dica = botao.getAttribute('data-dica');
    conteudoDica.innerHTML = dicas[dica];
  });
});
