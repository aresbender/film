// JavaScript Document
var tuL=document.querySelector('.baibu-left');
var tuOver= document.querySelector('.zhuan2');
tuL.onmouseenter=function(){
    window.setTimeout(function(){
        tuOver.style.zIndex=103;
    },200);
}
tuL.onmouseleave=function(){
    window.setTimeout(function(){
        tuOver.style.zIndex=0;
    },200);
}

//立即观看
var anjianOne=document.querySelector('.anjian-one');
var fixedXXNode=document.querySelector('.fixed-xx');
var fixedNode=document.querySelector('.fixed');
anjianOne.onclick=function(){
    var link=this.getAttribute('data-link');
    fixedNode.querySelector('.fixed-main').innerHTML='<embed src="'+link+'" allowFullScreen="true" quality="high" width="500" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>';
    fixedNode.style.top="0";
};
fixedXXNode.onclick=function(){
    fixedNode.querySelector('.fixed-main').innerHTML='';
    fixedNode.style.top="-150%";
};