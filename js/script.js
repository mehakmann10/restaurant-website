// NAVBAR RESTAURANT DROPDOWN
const resDropdown = document.querySelector("[data-dropdown]");
const resDropdownSidebar = document.querySelector("[data-sidebar-dropdown-item]");
const resDropdownSidebarSection = document.querySelector("[data-sidebar-dropdown-section]");

resDropdown.addEventListener('click', () => {
    resDropdown.classList.toggle('active');
})
resDropdownSidebarSection.addEventListener('click', () => {
    resDropdownSidebar.classList.toggle('active');
})
// NAVBAR SCROLL
const navbar = document.querySelector("[data-navbar]")
const topbar = document.querySelector("[data-topbar]")


const navbarAtTop = () => {
    if (window.innerWidth > 1250) {
        if (topbar.style.display == 'none') {
            navbar.style.top = '0';
        } else {
            navbar.style.top = '8%';
        }
    } else {
        topbar.style.display = 'none';
    }
}
const updateTopbar = () => {
    if (window.innerWidth > 1250) {
        topbar.style.display = 'grid';
        navbar.style.top = '8%';

    } else {
        topbar.style.display = 'none';
        navbar.style.top = '0';
    }
};
window.addEventListener('load', updateTopbar);
window.addEventListener('resize', updateTopbar);

let lastScrollPos = 0;

const hideHeader = () => {
    let isScrollBottom = window.scrollY > lastScrollPos;
    if (isScrollBottom) {
        navbar.classList.add('hide');
    } else {
        navbar.classList.remove('hide');
        navbar.classList.add('active');
    }
    lastScrollPos = window.scrollY;
}

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        // alert("scrolled")
        navbar.classList.add("active");
        topbar.style.display = 'none';
        hideHeader();
    } else {
        if (window.innerWidth > 1250) {
            topbar.style.display = 'grid';
        }
        navbar.classList.remove('active');
    }
    navbarAtTop();
})

// MENU TOGGLE 
const closeBtn = document.querySelector("[data-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const menu = document.querySelector("[data-hamburger-menu]");
const sidebar = document.querySelector("[data-sidebar]")

const sidebarLinks = document.querySelectorAll(".sidebar-link");
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        overlay.classList.remove('active');
        document.body.classList.remove("no-scroll");
        sidebar.classList.remove('active');
    })
})
menu.addEventListener('click', () => {
    sidebar.classList.add('active');
    document.body.classList.add("no-scroll");
    overlay.classList.add('active');
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    document.body.classList.remove("no-scroll");
    sidebar.classList.remove('active');

})

closeBtn.addEventListener('click', () => {
    document.body.classList.remove("no-scroll");
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
})

// HERO SLIDER
const heroSlider = document.querySelector("[data-hero-slider]")
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const arrowPrev = document.querySelector('.arrow-back');
const arrowNext = document.querySelector('.arrow-next');
let itemNum = 0;
let prevItem = 0;
arrowPrev.addEventListener('click', () => {
    if (itemNum == 0) {
        itemNum = 4;
    } else {
        itemNum--;
    }
    changeSlider();
})
arrowNext.addEventListener('click', changeNext);
function changeNext(){
    if (itemNum == 4) {
        itemNum = 0;
    } else {
        itemNum++;
    }
    changeSlider();
}

const changeSlider = () => {
    heroSliderItems[prevItem].classList.remove('active');
    heroSliderItems[itemNum].classList.add('active');
    prevItem = itemNum;
    // if (itemNum == 4) {
    //     itemNum = 0;
    // } else {
    //     itemNum++;
    // }
}
let autoSlideInterval;
const autoSlide = () => {
    autoSlideInterval = setInterval(() => {
        changeNext();
    }, 7000);

}
window.addEventListener('load', () => {
    autoSlide();
})

heroSlider.addEventListener('mouseover',() => {
    clearInterval(autoSlideInterval);
})
heroSlider.addEventListener('mouseout', () => {
    autoSlide();
})

// ANimation Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.animate');
hiddenElements.forEach((el) => observer.observe(el));

// MENU SLIDE WRAPPER
const wrapper = document.querySelector('.slide-items');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function getScrollAmount() {
  const slideItem = wrapper.querySelector('.slide-item');
  const slideItemWidth = slideItem.getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(wrapper).gap) || 0;
  return slideItemWidth + gap;
}

nextBtn.addEventListener('click', () => {
  wrapper.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  wrapper.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});
