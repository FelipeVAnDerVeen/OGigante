
// Filtros do Blog
const filtrosBlog = document.querySelectorAll('.filtro-blog');
const artigos = document.querySelectorAll('.artigo-card, .artigo-destaque');

filtrosBlog.forEach(btn => {
    btn.addEventListener('click', function () {
        filtrosBlog.forEach(f => f.classList.remove('ativo'));
        this.classList.add('ativo');

        const categoria = this.getAttribute('data-categoria');

        artigos.forEach(artigo => {
            if (categoria === 'todas' || artigo.getAttribute('data-categoria') === categoria) {
                artigo.style.display = 'block';
                artigo.style.animation = 'fadeIn 0.5s';
            } else {
                artigo.style.display = 'none';
            }
        });
    });
});

// Pesquisa
const searchInput = document.getElementById('searchInput');
const searchBtn = document.querySelector('.search-btn');

function pesquisarArtigos() {
    const termo = searchInput.value.toLowerCase();

    artigos.forEach(artigo => {
        const titulo = artigo.querySelector('h2, h3').textContent.toLowerCase();
        const resumo = artigo.querySelector('p').textContent.toLowerCase();

        if (titulo.includes(termo) || resumo.includes(termo) || termo === '') {
            artigo.style.display = 'block';
        } else {
            artigo.style.display = 'none';
        }
    });
}

searchInput.addEventListener('input', pesquisarArtigos);
searchBtn.addEventListener('click', pesquisarArtigos);

// Paginação
const pageBtns = document.querySelectorAll('.page-btn');

pageBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        if (!this.classList.contains('active')) {
            pageBtns.forEach(p => p.classList.remove('active'));
            if (this.getAttribute('data-page') !== 'prev' && this.getAttribute('data-page') !== 'next') {
                this.classList.add('active');
            }

            // Simula carregamento de nova página
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Newsletter
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert('Obrigado! Email ' + email + ' cadastrado com sucesso!');
    this.reset();
});

// Animação de entrada
const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
        }
    });
});

document.querySelectorAll('.artigo-card').forEach(card => {
    observador.observe(card);
});
