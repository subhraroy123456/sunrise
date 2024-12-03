const tradingLists = document.querySelectorAll('.tab')
const topRestContents = document.querySelectorAll('.top-rest-content-outer')

tradingLists.forEach(tradingList => {
  tradingList.addEventListener('click', (e) => {

    tradingList.classList.add('active')

    tradingLists.forEach(tradingList2 => {
      if (tradingList2 != tradingList) {
        tradingList2.classList.remove('active')
      }
    })

    const tradingListData = tradingList.getAttribute('data-tab')

    topRestContents.forEach(topRestContent => {
      topRestContent.classList.add('hide')
      const topRestContentData = topRestContent.getAttribute('data-content')
      if (tradingListData == topRestContentData || tradingListData == 'all') {
        topRestContent.classList.remove('hide')
      }
    })
  })
})



const header = document.querySelector('header')
const times = header.querySelector('.times')
const bars = header.querySelector('.bars')

bars.addEventListener('click', (e) => {
  header.classList.add('show')
})
times.addEventListener('click', (e) => {
  header.classList.remove('show')
})

window.addEventListener('scroll', (e) => {
  if (scrollY > 0) {
    header.classList.add('fixed')
  }
  else {
    header.classList.remove('fixed')
  }
})


const searchBox = document.querySelector('.search-box')
const search = document.querySelector('.search')
const inputClose = document.querySelector('.input-close')
const input = document.querySelector('.search-input')

const dynamicValue = 'javascript:void()';
search.href = dynamicValue;

search.addEventListener('click', (e) => {
  searchBox.classList.add('active')
})

document.body.addEventListener('mouseup', (e) => {
  if (!searchBox.contains(e.target)) {
    searchBox.classList.remove('active')
  }
})


var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.01) {
    scrollToTopBtn.classList.add("showBtn");
  } else {
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

inputClose.addEventListener('click', (e) => {
  if (input.value != '') {
    input.value = ''
  }
})


const plusButton = document.querySelector('.plus')
const minusButton = document.querySelector('.minus')
const incValue = document.querySelector('.inc-value')

const getValidValue = () => {
  return isNaN(parseInt(incValue.value)) ? 0 : parseInt(incValue.value);
};

plusButton.addEventListener('click', (e) => {
  if (getValidValue() < parseInt(incValue.max || 10)) {
    incValue.value = getValidValue() + 1;
  }
})
minusButton.addEventListener('click', (e) => {
  if (getValidValue() > parseInt(incValue.min || 0)) {
    incValue.value = getValidValue() - 1;
  }
})

incValue.addEventListener('keydown', (e) => {
  e.preventDefault(); // Prevent all key presses
});

const accors = document.querySelectorAll('.accor')
accors[0].classList.add('active')

accors.forEach(accor => {
  const accorbtm = accor.querySelector('.accor-btm')
  accor.addEventListener('click', (e) => {
    if (e.target.classList.contains('iconn') || e.target.classList.contains('accor-top') || e.target.classList.contains('accor-title')) {
      accor.classList.toggle('active')
    }
    accors.forEach(accor2 => {
      if (accor != accor2) {
        accor2.classList.remove('active')
      }
    })
  })
})


var primarySlider = new Splide('#primary_slider', {
  type: 'fade',
  heightRatio: .7,
  pagination: false,
  arrows: false,
  cover: true,
  autoplay: true,
  interval: 3000,
  speed: 800,
  type: 'loop',
});

var thumbnailSlider = new Splide('#thumbnail_slider', {
  rewind: true,
  fixedWidth: 150,
  fixedHeight: 100,
  isNavigation: true,
  gap: 15,
  focus: 'center',
  pagination: false,
  cover: true,
  loop: true,
  breakpoints: {
    '600': {
      fixedWidth: 66,
      fixedHeight: 40,
    }
  }
}).mount();

primarySlider.sync(thumbnailSlider).mount();


