window.onload=function(){
		var main=document.getElementById("main");
    	var fill=document.getElementsByClassName("fill");
    	var base=document.body.clientWidth;
    	main.style.width=base-65+"px";
    	fill[0].style.width=(base-65-600)/2+"px";
    	fill[1].style.width=(base-65-600)/2+"px";
    	window.onresize=function(){
    		base=document.body.clientWidth;
    		main.style.width=base-65+"px";
    		fill[0].style.width=(base-65-600)/2+"px";
    		fill[1].style.width=(base-65-600)/2+"px";
    	}
    	var page=document.getElementById("page").childNodes;
    	for(var i=0;i<Math.floor(page.length/2)-2;i++){
    		page[i*2+1].onclick=function(){
    			for(var j=0;j<Math.floor(page.length/2);j++){
    				page[j*2+1].style.backgroundColor="white";
    			}
    			this.style.backgroundColor="#c1c1c1";
    		}
    	}

        //侧栏功能
        var nav=document.getElementsByClassName("nav");
        nav[0].onclick=function(){
            if(window.history.back()){}
            else 
            	window.open("./index.html","_self");
        }
        nav[1].onclick=function(){
            window.scrollTo(0,0);
        }
        nav[1].onmouseover=function(){
            this.style.backgroundColor="#cccccc";
        }
        nav[1].onmouseout=function(){
            this.style.backgroundColor="#e78170";
            if(document.body.scrollTop==0)
                this.style.backgroundColor="#414141";
        }
        window.onscroll=function(){
            if(document.body.scrollTop!=0)
                nav[1].style.backgroundColor="#e78170";
            else
                nav[1].style.backgroundColor="#414141";
        }
        if(document.body.scrollTop!=0)
                nav[1].style.backgroundColor="#e78170";

        //评论栏功能
        var comment=document.getElementById("comment");
        var pos=0;
        for(var i=0;i<$("#expression img").length;i++){
        	$("#expression img:eq("+i+")").click(function(){
        		if(window.getSelection().containsNode(comment,true)){
        			var img=document.createElement("img");
        			img.src=this.src;
        			var range=window.getSelection().getRangeAt(0);
        			range.insertNode(img);
        		}
        	});
        }
}