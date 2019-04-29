
$(document).ready(function($) {

    $(".nav li").mouseenter(function(event) {
        $(this).find('dl').stop().show();
    });
    $(".nav li").mouseleave(function(event) {
        $(this).find('dl').stop().hide();
    });
	
    // 手机导航
    $('.menuBtn').append('<b></b><b></b><b></b>');
    $('.menuBtn').click(function(event) {
        $(this).toggleClass('open');
        var _winw = $(window).width();
        var _winh = $(window).height();
        if( $(this).hasClass('open') ){
            $('body').addClass('open');
            if( _winw<=992 ){
                $('.soBox').stop().slideDown();
                $('.nav').stop().slideDown();
            }
        }else{
            $('body').removeClass('open');
            if( _winw<=992 ){
                $('.soBox').stop().slideUp();
                $('.nav').stop().slideUp();
            }
        }
    });

    // 导航
    function myNav(){
        var _winw = $(window).width();
        if( _winw>767 ){
            $('.nav').show();
            $('.nav li').bind('mouseenter',function() {
                $(this).find('dl').stop().slideDown();
                if( $(this).find('dl').length ){
                    $(this).addClass('ok');
                }
            });
            $('.nav li').bind('mouseleave',function() {
                $(this).removeClass('ok');
                $(this).find('dl').stop().slideUp();
            });
            $('.nav li dd').bind('mouseenter',function() {
                $(this).find('.sub').stop().slideDown();
                if( $(this).find('.sub').length ){
                    $(this).addClass('ok');
                }
            });
            $('.nav li dd').bind('mouseleave',function() {
                $(this).removeClass('ok');
                $(this).find('.sub').stop().slideUp();
            });
            $('body,.menuBtn').removeClass('open');
        }else{
            $('.nav').hide();
            $('.nav li').unbind('mouseenter mouseleave');
            $('.nav .v1').click(function(){
                if( $(this).siblings('dl').length ){
                    $(this).siblings('dl').stop().slideToggle();
                    return false;
                }
            });
            $('.nav li dd').unbind('mouseenter mouseleave');
            $('.nav .d1').click(function(){
                if( $(this).siblings('.sub').length ){
                    $(this).siblings('.sub').stop().slideToggle();
                    $(this).parents('dd').siblings('dd').find('.sub').stop().slideUp();
                    return false;
                }
            });
        }
    }
    myNav();
    $(window).resize(function(event) {
        myNav();
    });
	
});