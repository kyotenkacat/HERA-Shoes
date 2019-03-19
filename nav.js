
function toggle_menu() {
    // document.getElementById('menu_bar').classList.toggle('hide');
    var bar_angle = document.getElementById('menu_bar').style.transform;
    console.log(bar_angle);
    if( bar_angle == 'rotate(0deg)'){
        bar_angle = 'rotate(90deg)';
        document.getElementById('menu_bar').style.transform = bar_angle;
    }else{
        bar_angle = 'rotate(0deg)';
        document.getElementById('menu_bar').style.transform = bar_angle;
    }
    var bar_opa = document.getElementById('menu_bar').style.opacity;
    if( bar_opa == '1'){
        bar_opa = '0';
        document.getElementById('menu_bar').style.opacity = bar_opa;
    }else{
        bar_opa = '1';
        document.getElementById('menu_bar').style.opacity = bar_opa;
    }
    var angle = document.getElementById('menu_cross').style.transform;
    if( angle == 'rotate(90deg)'){
        angle = 'rotate(0deg)';
        document.getElementById('menu_cross').style.transform = angle;
    }else{
        angle = 'rotate(90deg)';
        document.getElementById('menu_cross').style.transform = angle;
    }
    var opa = document.getElementById('menu_cross').style.opacity;
    if( opa == '0'){
        opa = '1';
        document.getElementById('menu_cross').style.opacity = opa;
    }else{
        opa = '0';
        document.getElementById('menu_cross').style.opacity = opa;
    }

    document.getElementsByClassName('m_menu_list')[0].classList.toggle('hide');
}
function init() {
    document.getElementById('menu_bar').addEventListener('click', toggle_menu, false);
    document.getElementById('menu_cross').addEventListener('click', toggle_menu, false);
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('.ig').offset().top - 700) {
            $('.ig_item').removeClass('invisible').addClass('fade_in_c');
        }
    }); 
}
window.addEventListener('load', init, false);

