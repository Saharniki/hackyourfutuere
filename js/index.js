$(document).ready(function () {
    $('#hamburger_btn').click(function () {
        $('#header_right').slideToggle();
    });
});

function sliderscroll(direction, tag) {

    var span_tag = $(tag);
    // var sliderScrollTag = $('.sliderscroll');
    var sliderScrollTag = span_tag.parents('.sliderscroll');
    var sliderScroolUl = sliderScrollTag.find('.sliderscroll_main ul');
    var sliderScroollItem = sliderScroolUl.find('li');
    var sliderScroollItemNumbers = sliderScroollItem.length;
    var slideScrollNumbers = Math.ceil(sliderScroollItemNumbers / 4);
    var maxNegativeMargin = -(slideScrollNumbers - 1) * 780;

    sliderScroolUl.css('width', sliderScroollItemNumbers * 195);


    var marginRightNew;
    var marginRightOld = sliderScroolUl.css('margin-right');
    marginRightOld = parseFloat(marginRightOld);

    if (direction == 'left') {
        marginRightNew = marginRightOld - 780;
    }
    if (direction == 'right') {
        marginRightNew = marginRightOld + 780;
    }

    if (marginRightNew < maxNegativeMargin) {
        marginRightNew = 0;
    }

    if (marginRightNew > 0) {
        marginRightNew = maxNegativeMargin;
    }

    sliderScroolUl.animate({ 'marginRight': marginRightNew }, 500);

}

$('.next').click(function () {
    sliderscroll('left');
});

$('.prev').click(function () {
    sliderscroll('right');
});


$('.filipTimer').flipTimer({
    direction: 'down',
    date: 'April 10, 2020 12:58:45',
    callback: function () {
        $('.slider2_content_right').css('opacity', 0.4);
        $('.slider2_content_left').css('opacity', 0.4);
        $('.slider2_finished').fadeIn(200);
    }
});

var sliderTag = $('#slider');
var sliderItems = sliderTag.find('.item');
var numItems = sliderItems.length;
var nextSlide = 1;
var timeOut = 5000;
var sliderNavigators = sliderTag.find("#slider_navigator ul li");


function slider() {
    if (nextSlide > numItems) {
        nextSlide = 1;
    }
    if (nextSlide < 1) {
        nextSlide = numItems;
    }

    sliderItems.hide();
    sliderItems.eq(nextSlide - 1).fadeIn(100);
    sliderNavigators.removeClass();
    sliderNavigators.eq(nextSlide - 1).addClass('active');
    nextSlide++;

}

slider();
var sliderInterval = setInterval(slider, timeOut);
sliderTag.mouseleave(function () {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(slider, timeOut);
});

function goTonext() {
    slider()
}

$('#slider #next').click(function () {
    clearInterval(sliderInterval);
    goTonext()
});

function goToprev() {
    nextSlide = nextSlide - 2;
    slider()
}

function goToSlide(index) {
    nextSlide = index;
    slider();
}

$('#slider #prev').click(function () {
    clearInterval(sliderInterval);
    goToprev()
});

$('#slider #slider_navigator li').hover(function () {
    clearInterval(sliderInterval);
    var index = $(this).index();
    goToSlide(index + 1);
}, function () {
});

// $('button').click(function () {
//     slider();
// });
//

// main slider

var sliderTag2 = $('#slider2');
var sliderItems2 = sliderTag2.find('.item');
var numItems2 = sliderItems2.length;
var nextSlide2 = 1;
var timeOut2 = 5000;
var sliderNavigators2 = sliderTag2.find("#slider2_navigator ul li");


function slider2() {
    if (nextSlide2 > numItems2) {
        nextSlide2 = 1;
    }
    if (nextSlide2 < 1) {
        nextSlide2 = numItems2;
    }

    sliderItems2.hide();
    sliderItems2.eq(nextSlide2 - 1).fadeIn(100);
    sliderNavigators2.removeClass();
    sliderNavigators2.eq(nextSlide2 - 1).addClass('active');
    nextSlide2++;
}

slider2();
var sliderInterval2 = setInterval(slider2, timeOut2);
sliderTag2.mouseleave(function () {
    clearInterval(sliderInterval2);
    sliderInterval2 = setInterval(slider2, timeOut2);
});


function goToSlide2(index) {
    nextSlide2 = index;
    slider2();
}


$('#slider2 #slider2_navigator li').click(function () {
    clearInterval(sliderInterval2);
    var index = $(this).index();
    goToSlide2(index + 1);
});

// slider2


var timer = {};

$('#menu_top li ').hover(function () {
    var tag = $(this);
    var timerAttr = tag.attr('data-time');
    clearTimeout(timer[timerAttr]);
    timer[timerAttr] = setTimeout(function () {
        $('> ul', tag).fadeIn(100);
        tag.addClass('active-menu');
        $('> .submenu3', tag).fadeIn(100);
    }, 500);


}, function () {
    var tag = $(this);
    var timerAttr = tag.attr('data-time');
    clearTimeout(timer[timerAttr]);
    timer[timerAttr] = setTimeout(function () {
        tag.removeClass('active-menu');
        $('> ul', tag).fadeOut(0);
        $('> .submenu3', tag).fadeOut(0);
    }, 500);

})

