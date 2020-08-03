$(document).ready(function () {

    let windowMaxWidth = 993;
    if ($(window).width() > windowMaxWidth) {
        $('#sidebarToggle').css('display', 'none');
        $('.item-sidebar').css('width', '100%');
        $('.item-sidebar-content').css('display', 'block');


    } else if ($(window).width() <= windowMaxWidth) {
        $('#sidebarToggle').css('display', 'block');
        $('.item-sidebar').css('width', '25%');
        $('.item-sidebar-content').hide();

        // $('.item-sidebar-content').css('display', 'none');
    }


    $('#sidebarToggle').on('click', function () {

        $('.item-sidebar').css('width', '100%');
        // $('.item-sidebar-content').css('display', 'block');
        $('.item-sidebar-content').show();
    });


    // $('.mini-submenu').on('click',function(){
    //     $(this).next('.list-group').toggle('slide');
    //     $('.mini-submenu').hide();
    // })


});
