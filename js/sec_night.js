// 해당 부분 이동
$(function() {
    // 나이트 GNB 클릭 시 sec_night로 이동
    $('header .gnb li:nth-child(4) a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#sec_night').offset().top
        }, 600);
    });
});