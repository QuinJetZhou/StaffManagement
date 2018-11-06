$(document).ready(function() {
    $('#toggle').click(function() {
        $('.submenu-list').animate({width:'toggle'},300);
        $('.control').fadeToggle(100);
    });

    
            // $(".submenu-list ul li .a").mouseover(function(){
            //  $(this).css("background-color","rgba(71,138,238, 0.2)");
            // });
            // $(".submenu-list ul li .a").mouseout(function(){
            //     $(this).css("background-color","#fafbfc");
            // }); 
       

});


 $(document).ready(function() {
        $('.a').click(function() {
        	// console.log('1');
            if ($(this).siblings('ul').css('display') == 'none') {
            	// console.log('2'+$(this).siblings('ul').css('display'));
                $(this).siblings('ul').slideDown(100).children('li');
                // console.log('3'+$(this).parent('li').siblings('li').children('ul').css('display'));
                if ($(this).parents('li').siblings('li').children('ul').css('display') == 'block') {
                	
                	// console.log($(this).parent('li').siblings('li').children('ul').css('display'));
                    $(this).parents('li').siblings('li').children('ul').slideUp(100);
                    
                }
            } 

            else {
                //控制自身菜单下子菜单隐藏
                // console.log('5');
                $(this).siblings('ul').slideUp(100);

                //控制自身菜单下子菜单隐藏
                // console.log('6');
                $(this).siblings('ul').children('li').children('ul').slideUp(100);
            }
        });
    });
     


$(document).ready(function(){
        Letter();  
        // Check_box();  
    });
//生成26个li标签，并分别放入26个字母
function myFunction(letters)
{
var node=document.createElement("LI");
// var textnode=document.createTextNode("Water");
var textnode=document.createTextNode(letters);
node.setAttribute("class","index_letters");
node.appendChild(textnode);
document.getElementById("letters_List").appendChild(node);

};
// myFunction("A");

function Letter(){

    for(var i=65;i<91;i++){
        var str=String.fromCharCode(i);
        myFunction(str);
    }
    // return str;
}

