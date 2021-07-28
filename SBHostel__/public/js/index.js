 // ─── SHOW MENU WHEN CLICK BUTTON ────────────────────────────────────────────────
const navbtn = document.getElementById('nav_toggle');
navbtn.addEventListener('click',toggling);  
const toggle = document.getElementById('menu');
function toggling(){
    toggle.classList.toggle("show_menu");  // TOGGLEING CLASS 
  }

// ────────────────────────────────────────────────────────────────────────────────
// ─── WHEN SCROLL AT A POINT APPLING SHADOW IN HEADER ────────────────────────────
window.addEventListener('scroll',scrolling);
function scrolling(){
   const headerShadow = document.getElementById('header');
  if(window.scrollY > 0){
      headerShadow.classList.add('scroll_header');
  }else{
    headerShadow.classList.remove('scroll_header');
  }
}

// ──────────────────────────────────────────────────────────────────  ──────────
//   :::::: T O P   S C R O L L I N G : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
// ============ SHOW SCROLL TOP BAR ========== 
function scrolltop() {
  const scrollTop = document.getElementById('scroll-top');
  //  WHEN THE SCROLL IS HIGHER THAN 500 VIEWPORT HEIGHT , ADD THE SHOW-SCROLL CLASS ( ͡° ͜ʖ ͡°). 
  if (this.scrollY >= 360) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top');
}
window.addEventListener("scroll", scrolltop);
// ──────────────────────────────────────────────


/*
        -- ──────────────────────────────────────────────────────────── I ──────────
        --   :::::: C E R A S U L   J S : :  :   :    :     :        :          :
        -- ──────────────────────────────────────────────────────────────────────
        */

var baseIndex = 1;
var timer;
var slidesContainer;

// ─── ALL  FUNCTION SEE BALOW DOWN ────────────────────────────────

window.addEventListener("load", () => {          // ! IMPORTANT FANCTION
  hideActive(baseIndex);
  setTimeout(() => {
    controlar(1);
  }, 4000);

  // WHEN MOUSE GOING ON IMAGE AND LAEVE ON IMAGE 
  const showslides = document.querySelectorAll(".rooms_container")[0];
  const img_tap = document.querySelectorAll(".img_tap")[0];

  showslides, img_tap.addEventListener('mouseenter', pause);
  showslides, img_tap.addEventListener('mouseleave', resume);
})

function controlar(value) {
  clearInterval(timer);
  if (value < 0) { hideActive(baseIndex -= 1) }
  else { hideActive(baseIndex += 1) };

  // ─── FOR AUTO IMAGE NEXT ───────────────────────────────────────────
  if (value < 0) { timer = setTimeout(() => { controlar(value + 1) }, 4000); }
  else { timer = setTimeout(() => { controlar(value) }, 4000) }
}

function hideActive(baseVal) {
  const figure = document.querySelectorAll(".rooms_contant");
  const gallery = document.querySelectorAll("#gallery_img");

  // VALIDATE THE BASEVAL 
  if (baseVal == 0) { baseIndex = figure.length }
  else if (baseVal > figure.length) { baseIndex = 1 };

  figure.forEach((element, index) => {            // TODO HIDE & REMOVE CLASS IN BOTH NODELIST & EVENT ON GALLERY
    element.style.display = "none";
    gallery[index].className = gallery[index].className.replace("active_img", "");
    

    // ADDING SEC IN GALLERY IMAGE
    gallery[index]["src"] = figure[index].children[0]['src'];
    // ADDING TITLE "alt" IN IMAGE
    element.children[1].innerText = element.children[0]["alt"]

    // ADD EVENT ON GALLERY
    gallery[index].onclick = () => {
      hideActive(baseIndex = index + 1);
    }
  });

  // SHOW ONE IMAGE AT A TIME
  figure[baseIndex - 1].style.display = "block";
  gallery[baseIndex - 1].className = "active_img";
}

// ─── WHEN MOUSE ON ING AND LAEVE ─────────────────────────────────
pause = () => {
  clearInterval(timer);
}

resume = () => {
  clearInterval(timer);
  timer = setInterval(function () { hideActive(baseIndex) }, 4000);
}

// ────────────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: S R C O O L   R E V E A L   A N I M A T I O N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────

const revealContant = ['.home_contant','.home_img','.about_contant','.about_img','.services','.rooms','.book_contant','.book_img','.contact_contant','.contact_button','.footer_contant'
];

window.addEventListener("scroll",reveal);

function reveal(){
  const contant = document.querySelectorAll(revealContant);
  contant.forEach((element,index) =>{
    var windowHeight = window.innerHeight;
    var contantHeight = element.getBoundingClientRect().top;
    var distanceHeight = 200;

    if (contantHeight < windowHeight - distanceHeight){
      element.classList.add("showReveal");
    }else{
      element.classList.remove("showReveal");
    }
  })
}

// GOOGLE MAP 

// https://www.google.com/maps/place/+Indira+Colony,+Gopal+Ganj,+Sagar,+Madhya+Pradesh+470003,+India/data=!4m2!3m1!1s0x3978d1098feccc85:0x22f65106e5a19924?sa=X&ved=2ahUKEwjVhbHnhIHyAhWFxDgGHUgICxAQwrkBegQIAxAC

// justdial



// <div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style='display: inline-block;'>
//   <a itemprop='url' href=https://www.fiverr.com/dsmark_ rel="nofollow" target="_blank" style='display: inline-block;'>
//   <div class='fiverr-seller-content' id='fiverr-seller-widget-content-825b7e37-e93e-4c8e-8eb3-f2b4afae4353'
//     itemprop='contentURL' style='display: none;'></div>
//   <div id='fiverr-widget-seller-data' style='display: none;'>
//     <div itemprop='name'>dsmark_</div>
//     <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
//     <div itemprop='jobtitle'>Seller</div>
//     <div itemprop='description'>Hello there! I am a computer science graduate having more than 4 years of
//       experience in programming languages. I assures you that I will deliver the Quality work in
//       accordance with you requirements. I believe in the long term relationships with the client and focus
//       on the punctuality and quality of the work. If you need real satisfaction you can hire me.</div>
//   </div>
//                 </a>
//             </div >
//   <iframe src="https://www.fiverr.com/anywhere/anywhere_widget/60ff972bc7d8380013be758f" width="190" height="75"
//     frameBorder="0" scrolling="no"></iframe>
// https://www.fiverr.com/dsmark_

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.358821073197!2d78.76189751498308!3d23.841388884544585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3978d1098feccc85%3A0x22f65106e5a19924!2sSanskar%20boys%20hostel!5e0!3m2!1sen!2sin!4v1627364265800!5m2!1sen!2sin" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>