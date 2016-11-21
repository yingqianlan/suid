
var obj=document.getElementById("txt");

//定义"改变颜色"的函数
function sColor (){
    obj.style.color="orange";
    obj.style.backgroundColor="blue";
}

//定义"改变宽高"的函数
function sHeight (){
    obj.style.width="500px";
    obj.style.height="300px";
}

//定义"隐藏内容"的函数
function sNone (){
    obj.style.display="none";
}

//定义"显示内容"的函数
function sShow (){
    obj.style.display="block";
}

//定义"取消设置"的函数
function sCancel (){
    var isCancel=confirm("取消全部设置?");
    if (isCancel==true) {
        obj.removeAttribute("style");
    } else {
        
    }
}