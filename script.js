const busca = document.getElementById('busca');
const cards = document.querySelectorAll('.card');

busca.addEventListener('keyup', () => {
  const termo = busca.value.toLowerCase();

  cards.forEach(card => {
    const nome = card.dataset.nome.toLowerCase();
    card.style.display = nome.includes(termo) ? 'block' : 'none';
  });
});
