$(".slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  focusOnSelect: true,
  cssEase: "linear",
  touchMove: true,
  prevArrow: '<button class="slick-prev"> < </button>',
  nextArrow: '<button class="slick-next"> > </button>',

  //         responsive: [
  //             {
  //               breakpoint: 576,
  //               settings: {
  //                 centerMode: false,
  //                 variableWidth: false,
  //               }
  //             },
  //         ]
});

var imgs = $(".slider img");
imgs.each(function () {
  var item = $(this).closest(".item");
  item.css({
    "background-image": "url(" + $(this).attr("src") + ")",
    "background-position": "center",
    "-webkit-background-size": "cover",
    "background-size": "cover",
  });
  $(this).hide();
});

const closeBtn = document.querySelector("#close-btn");
const cookie = document.querySelector("#cookie");
closeBtn.addEventListener("click", function () {
  cookie.classList.add("hide");
});

// ---

const headerNav = document.querySelector("header nav");
const goTop = document.querySelector(".goTop");

PositionTop();

window.addEventListener("scroll", () => {
  PositionTop();
});

function PositionTop() {
  let scrollAmount = window.scrollY;
  if (scrollAmount > 0) {
    goTop.classList.remove("hide");
    headerNav.classList.remove("top");
  } else {
    goTop.classList.add("hide");
    headerNav.classList.add("top");
  }
}

goTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ---
