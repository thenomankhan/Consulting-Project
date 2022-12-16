$(function() {
    "use strict"
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

});


$(function() {

    let i = 0;

    function change() {
        ++i;
        $($("main div")[i - 1]).animate({ width: "10%" }, 0.01).removeClass("a");
        $($('.slide li')[i - 1]).removeClass("b");
        if (i == 5) {
            i = 0;
        }
        $($("main div")[i]).animate({ width: "50%" }).addClass("a");
        $($('.slide li')[i]).addClass("b");
    }
    var a = setInterval(change, 2000);

    let j = 0;
    $('main div').click(function() {
        clearInterval(a);
        j = $(this).index();
        if (j != 0 || j != 4) {
            $('span').removeClass('c');
        }
        if ($(this).hasClass("a")) {} else {
            $('main div').animate({ width: "10%" }, 0.5).removeClass('a');
            $('.slide li').removeClass('b');
            $(this).animate({ width: "50%" }, 200).addClass('a');
            $($('.slide li')[$(this).index()]).addClass('b');
        }
    });

    $('span').click(function() {
        clearInterval(a);
        j = $('.a').index();
        if (j == 0 && $(this).hasClass('prev')) {
            $($('main div')[0]).animate({ width: "10%" }, 0.01).removeClass("a")
            $($('.slide li')[0]).removeClass("b");
            $($('main div')[4]).animate({ width: "50%" }, 200).addClass("a")
            $($('.slide li')[4]).addClass("b");
        } else if (j == 4 && $(this).hasClass('next')) {
            $($('main div')[4]).animate({ width: "10%" }, 0.01).removeClass("a")
            $($('.slide li')[4]).removeClass("b");
            $($('main div')[0]).animate({ width: "50%" }, 200).addClass("a")
            $($('.slide li')[0]).addClass("b");
        } else {
            if ($(this).hasClass("prev")) {
                $($('main div')[j]).animate({ width: "10%" }, 0.01).removeClass("a")
                $($('.slide li')[j]).removeClass("b");
                $($('main div')[j - 1]).animate({ width: "50%" }, 200).addClass("a")
                $($('.slide li')[j - 1]).addClass("b");
            } else {
                $($('main div')[j]).animate({ width: "10%" }, 0.01).removeClass("a")
                $($('.slide li')[j]).removeClass("b");
                $($('main div')[j + 1]).animate({ width: "50%" }, 200).addClass("a")
                $($('.slide li')[j + 1]).addClass("b");
            }
        }

    });

});