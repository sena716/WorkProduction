$(function(){

    console.log( $.cookie('cookieDate') );

    let date = $.cookie('cookieDate');

    $('.main__each').append( date );
})

