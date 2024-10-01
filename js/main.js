
const searchBtn = document.getElementById('searchOpen');
const closeSearch = document.getElementById('closeSearch');
const modal = document.getElementById('modal');

searchBtn.addEventListener('click', ()=> {
    modal.style.display = "flex";
})

closeSearch.addEventListener('click', ()=> {
    modal.style.display = "none";
})