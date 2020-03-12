$(document).ready(function () {
    'use strict'

    //?  سكربت بتخلي النافبار شفاف بس انزل سكرول
    $(window).scroll(function () {
        // * Testing
        console.log($('.navbar').height());
        // print height Navbar then scroll window : fixed number
        console.log($(window).scrollTop());
        // print scrolltop then scroll window : Varible Number

        var navbar = $(".navbar");

        // * Condation ? true : false

        $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled'): navbar.removeClass('scrolled');
        
           
    });
    // ? *************************************************
    // * Deal with Tabs
    $('.tab-switch li').click(function(){
        $(this).addClass('slected').siblings('li').removeClass('slected');

        //* Switch tab-content by click tab list
        // * Test Ptinting data-class for tab-content = class tab content Div
        console.log($(this).data('class'));
        // Hiden All Devs Content-tabs
        $('.tabs-section .content-tabs > div').hide(1000);
        // Show Div with link Active tabs
        $('.'+$(this).data('class')).show(1000);


        
    });
});
