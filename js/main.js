window.onload = function() {

const searchBtn = document.getElementById('searchOpen');
const closeSearch = document.getElementById('closeSearch');
const modal = document.getElementById('modal');
const humburger = document.getElementById('toggle_menu');
const arrow_tablet = document.querySelectorAll('.arrow_tablet');



var mainNav = document.getElementById('main_menu');
var navMenuTablet = document.getElementById('nav_menu_tablet');
var headerMenuTablet = document.querySelector('.header_btn_tablet');
var headerBtn = document.querySelector('.header_btn');
var searchOpenBtn = document.getElementById('searchOpen');

var header_con = document.querySelector('.header_con');

searchBtn.addEventListener('click', ()=> {
    modal.style.display = "block";
    document.body.classList.add('hidden');
})

closeSearch.addEventListener('click', ()=> {
    modal.style.display = "none";
    document.body.classList.remove('hidden');
})


arrow_tablet.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        arrow_tablet.forEach(arrow2 => {
            if(arrow != arrow2)
            {

                arrow2.classList.remove('show');
            }
        })
       
        e.target.classList.toggle('show');
    });
});




humburger.addEventListener('click', ()=> {
    document.body.classList.toggle('hidden');
   
    humburger.classList.toggle('open');

    navMenuTablet.classList.toggle('open');
})

    var window_width = window.innerWidth;
    console.log('Window width on page load: ' + window_width);



    function swapMenu(){
        
        if(window_width > 1024)
        {
            
       
            header_con.appendChild(mainNav);
            header_con.appendChild(headerBtn);
            headerBtn.prepend(searchOpenBtn);
        }
        else{
          
            headerMenuTablet.prepend(searchOpenBtn);
            navMenuTablet.appendChild(mainNav);
            navMenuTablet.appendChild(mainNav);
            navMenuTablet.appendChild(headerBtn);

        }
    }

    window.addEventListener('resize', function() {
        window_width = window.innerWidth;
        
        swapMenu();
        
    });
    swapMenu();
    

};





