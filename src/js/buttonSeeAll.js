const divBtnSeeAll = document.getElementById('btn-see-all-container')
const divBtnSeeAllMobile = document.getElementById('btn-see-all-container-mobile')


function adicionarERemoverBtnSeeAll() {
    (window.innerWidth <= 900)
        ? (divBtnSeeAllMobile.classList.toggle('disable'), divBtnSeeAll.classList.toggle('disable'))
        : null
};

window.addEventListener("load", adicionarERemoverBtnSeeAll);
window.addEventListener("resize", adicionarERemoverBtnSeeAll);

