


$(document).ready(function(){

});

var boxSize = 400;
var divPos = {};
var offset = $("#div1").offset();
var divXpos;
var divYpos;
var scaleSize=1;
$(document).mousemove(function(e){
    divPos = {
        left: e.pageX - offset.left,
        top: e.pageY - offset.top
    };
    if(divPos.left<boxSize && divPos.top<boxSize){
    	if(divPos.left>0 && divPos.top>0){
    		if(divPos.top>boxSize/2){
    			divXpos = (divPos.top-boxSize/2)/(boxSize/20);
    			divYpos = -(divPos.left-boxSize/2)/(boxSize/20);
    		}else{
    			divXpos = -((boxSize/2)-divPos.top)/(boxSize/20);
    			divYpos = ((boxSize/2)-divPos.left)/(boxSize/20);
    		}


    		$('#div1').css({'transform':'rotateY('+divYpos+'deg) rotateX('+divXpos+'deg)'});


    		$('p').html(divXpos+" Y = "+divYpos);
    		console.log(divXpos+" y = "+divYpos);



    	}else{
    		$('#div1').css({'transform':'rotateY(0deg) rotateX(0deg)'});
    	}
    }else{
    	$('#div1').css({'transform':'rotateY(0deg) rotateX(0deg)'});
    }
});