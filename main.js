const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USANDO ASYNC/AWAIT
async function generateJoke() {
  let piadas = [
    "O que o pato disse para a pata? R.: Vem Quá!",
    "Por que o menino estava falando ao telefone deitado? R.: Para não cair a ligação.",
    "A enfermeira diz ao médico: Tem um homem invisível na sala de espera. O médico responde: Diga a ele que não posso vê-lo agora.",
    "Qual é a fórmula da água benta? R.: H Deus O!",
    "Era uma vez um pintinho que se chama Relam. Toda vez que chovia, Relam piava!",
    "Duas formigas se encontraram e pararam para conversar: Oi, qual é o seu nome? Fu. Fu o quê? Fu Miga!",
    "Qual é a cidade brasileira que não tem táxi? R.: Uberlândia.",
    "Um rapaz vai à padaria e pergunta se o salgado era de hoje. Não, é de ontem. E como faço para comer o de hoje? Volte amanhã!"
  ];

  let piadaAleatoria = piadas[Math.floor(Math.random() * piadas.length)];

  jokeEl.innerHTML = piadaAleatoria;
}
