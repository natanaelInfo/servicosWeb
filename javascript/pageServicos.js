
const $header = document.querySelector('header');

const $menu =  document.querySelectorAll('.menu')[0];

const $nav = document.querySelector('nav');




window.addEventListener('scroll', toggleHeader,false);


function toggleHeader(){
    if (window.pageYOffset > 10 && $header.classList.contains('max-header')){

        /*efeito no header */
        $header.classList.remove('max-header');
        $header.classList.add('min-header');

         
        /*efeito no h1 */  
        $menu.firstElementChild.classList.add('min-menu-h1');
        $menu.firstElementChild.classList.remove('max-menu-h1');

        
        /*efeito na nav */
        $nav.classList.add('menu-min-nav');
        $nav.classList.remove('menu-max-nav');


       


    }else if(window.pageYOffset  <=40 && $header.classList.contains('min-header')){

        /*efeito no header */
        $header.classList.remove('min-header');
        $header.classList.add('max-header');

      
        /*efeito no h1 */
        $menu.firstElementChild.classList.add('max-menu-h1');
        $menu.firstElementChild.classList.remove('min-menu-h1');

    

       
          /*efeito na nav */
         $nav.classList.add('menu-max-nav');
         $nav.classList.remove('menu-min-nav');
 

    }
}


