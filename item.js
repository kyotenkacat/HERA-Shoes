//show_list
function show_list(e) {
    var class_name = e.target.className;
    var arr = document.getElementsByClassName(class_name.substring(0, 4) + '_list_item');
    var len = arr.length;
    for (var m = 0; m < len; m++) {
        arr[m].classList.toggle('hide');
    }
}
//show_list

//item_show_pic
function show_pic(e) {
    var main_pic_len = document.getElementsByClassName('item_main_img').length;
    for (var k = 0; k < main_pic_len; k++) {
        document.getElementsByClassName('item_main_img')[k].src = e.target.src;
    }
}
//item_show_pic 
window.addEventListener('load', function(){

    //show_list
    var info_arr = document.getElementsByClassName('info_list_title');
    var info_len = info_arr.length;
    for(var p = 0; p < info_len; p++){
        info_arr[p].addEventListener('click', show_list, false);
    }
    //show_list

    //item_show_pic
    var arr = document.querySelectorAll('.small_pic img');
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        arr[i].addEventListener('click', show_pic, false);
    }
    var lg_arr = document.querySelectorAll('.lg_small_pic img');
    var lg_len = lg_arr.length;
    for (var j = 0; j < lg_len; j++) {
        lg_arr[j].addEventListener('click', show_pic, false);
    }
    //item_show_pic
}, false);
