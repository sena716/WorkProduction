// ハンバーガーメニュー
// click on action
$(function(){
    $('.Toggle').click(function(){
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
        $('body').toggleClass('bodyActive');
    });
});