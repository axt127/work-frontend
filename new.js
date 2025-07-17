//carousel
$('.slider__images').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    accessibility: true,
    prevArrow: "<button class='button button__location' type='button'><img class='btn' src='Arrow-Left.png'></button>",
    nextArrow: "<button class='button button__location' type='button'><img class='btn' src='Arrow-Right.png'></button>"
});
//review dialog box
function addrating(i) {
    clear();
    for (let j = 1; j < i + 1; j++) {
        console.log("star" + i);
        document.getElementById("star" + j).src = "Star-On.png";
    }
}
function clear() {
    let x = 1;
    while (x < 6) {
        document.getElementById("star" + x).src = "Star.png";
        j++;
    }
}

const review = document.getElementById('reviewButton');
const Dialog = document.getElementById('reviewDialog');

    review.addEventListener('click', () => {
    Dialog.showModal();
});


