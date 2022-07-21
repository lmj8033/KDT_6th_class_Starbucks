// SUBMENU > SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click",function() {
    searchInputEl.focus();
})

let search;

searchEl.addEventListener("click",function() {
    if(search === 0) {
        searchInputEl.focus();
    }else {
        searchEl.focusout();
    }
})

// searchEl.addEventListener("click",function() {
//     if (document.querySelector('searchInputEl') === focusEl) {
//         searchInputEl.focus();
//     }else if (document.querySelector('searchInputEl') === !focusEl) {
//         searchInputEl.focusout();
//     }
// })

searchInputEl.addEventListener("focus",function() {
    searchInputEl.setAttribute("placeholder","통합검색");
})

searchInputEl.addEventListener("blur",function() {
    searchInputEl.setAttribute("placeholder","");
})

// SWIPER
// NOTICE >> SWIPER

const swiperNotice =  new Swiper(".notice .notice_line .swiper",{
    direction: "vertical",
    loop: true,
    autoplay:true,
})

//PROMOTION >> SWIPER
// SWIPER PROMOTION

const swiperPromotion = new Swiper(".promotion .swiper", {
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay:1000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".promotion .swiper-pagination",
        clickable: true,
    },
    navigation: {
        prevEl: ".promotion .swiper-button-prev",
        nextEl: ".promotion .swiper-button-next",
    },
})

// SWIPER PROMOTION AUTOPLAY CONTROL
function controlAutoplay() {
    if (swiperPromotion.autoplay.running) {
        swiperPromotion.autoplay.stop();
    }else {
        swiperPromotion.autoplay.start();
    }
}

// TOGGLE PROMOTION
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

promotionToggleBtn.addEventListener("click",function(){
    if (promotionEl.classList.contains("hide")) {
        promotionEl.classList.remove("hide");
    }else {
        promotionEl.classList.add("hide");
    }

    if(promotionToggleBtn.style.transform === "rotate(180deg)") {
        promotionToggleBtn.style.transform = "rotate(0deg)";
    }else {
        promotionToggleBtn.style.transform = "rotate(180deg)";
    }
})

// SCROLL ANIMATION
let scrollYpos;
window.addEventListener("scroll", function() {
    scrollYpos = window.scrollY;
    console.log(`current is ${scrollYpos}`);
    
    // window.onload = () => {
    // const visualInner = document.querySelector(".visual");
    // visualInner.classList.add("animate");
    // }; 
    if(scrollYpos > 0) {
        const visualAnimate = this.document.querySelector(".visual");
        visualAnimate.classList.add("animate");
    }
      
    if(scrollYpos > 300) {
        const peruAnimate = document.querySelector(".peru");
        peruAnimate.classList.add("animate");
    };

    if(scrollYpos > 1600) {
        const favoriteAnimate = this.document.querySelector(".favorite");
        favoriteAnimate.classList.add("animate");
    };

    if(scrollYpos > 2800) {
        const magazineAnimate = this.document.querySelector(".magazine");
        magazineAnimate.classList.add("animate");
    };

    if(scrollYpos > 3000) {
        const storeAnimate = this.document.querySelector(".store");
        storeAnimate.classList.add("animate");
    };
});

