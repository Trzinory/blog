window.onload=function(){
		var title=document.getElementById("title");
    	var main=document.getElementById("main");
    	var fill=document.getElementsByClassName("fill");
    	var base=document.body.clientWidth;
    	title.style.width=base-65+"px";
    	main.style.width=base-65+"px";
    	fill[0].style.width=(base-65-600)/2+"px";
    	fill[1].style.width=(base-65-600)/2+"px";
    	window.onresize=function(){
    		base=document.body.clientWidth;
    		title.style.width=base-65+"px";
    		main.style.width=base-65+"px";
    		fill[0].style.width=(base-65-600)/2+"px";
    		fill[1].style.width=(base-65-600)/2+"px";
    	}

        //拉动条影响的可视窗口变化
        function resize(anchor){
            base=document.body.clientWidth;
            title.style.width=base-65+"px";
            main.style.width=base-65+"px";
            fill[0].style.width=(base-65-600)/2+"px";
            fill[1].style.width=(base-65-600)/2+"px";
            if(!anchor){window.scrollTo(0,0)}
            else window.scrollTo(0,anchor);
        }

        //侧栏功能
        var xhr=new XMLHttpRequest();
        var nav=document.getElementsByClassName("nav");
        nav[1].onclick=function(){
            window.open("./index.html","_self");
        }
        for(var i=0;i<$("#sort_by_date li").length;i++){
            $("#sort_by_date li:eq("+i+")").click(function(){
                $("#content").html("");
                resize();
            });
        }
        for(var i=0;i<$("#sort_by_class li").length;i++){
            $("#sort_by_class li:eq("+i+")").click(function(){
                $("#content").html("");
                resize();
            });
        }
        nav[4].onclick=function(){
            window.scrollTo(0,0);
        }
        nav[4].onmouseover=function(){
            this.style.backgroundColor="#cccccc";
        }
        nav[4].onmouseout=function(){
            this.style.backgroundColor="#e78170";
            if(document.body.scrollTop==0)
                this.style.backgroundColor="#414141";
        }
        window.onscroll=function(){
            if(document.body.scrollTop!=0)
                nav[4].style.backgroundColor="#e78170";
            else
                nav[4].style.backgroundColor="#414141";
        }
        if(document.body.scrollTop!=0)
                nav[4].style.backgroundColor="#e78170";

        //文章入口
        for(var i=0;i<$(".article_entrance").length;i++){
            $(".article_entrance:eq("+i+")").click(function(){
                window.open("./article.html","_self");
            });
        }
        $(".about_me").click(function(){
            window.open("./article.html","_self");
        });
}