window.onload=function(){
		//根据窗口大小调整页面布局
    	var main=document.getElementById("main");
    	var main1=document.getElementById("main1");
    	var main2=document.getElementById("main2");
    	var main3=document.getElementById("main3");
    	var fill=document.getElementsByClassName("fill");
    	var content2=document.getElementById("content2");
    	var formulabar=document.getElementById("formula_bar");
    	var titletop=document.getElementById("title_top");
    	var base=document.body.clientWidth;
        titletop.style.width=base-65+"px";
    	fill[0].style.width=(base-65-600)/2+"px";
    	fill[1].style.width=(base-65-600)/2+"px";
    	//main.style.height=document.body.scrollHeight-115+"px";
        main1.style.minHeight=window.innerHeight-150+"px";
        main2.style.minHeight=window.innerHeight-150+"px";
    	window.onresize=function(){
    		base=document.body.clientWidth;
            formulabar.style.width=base-65+"px";
            titletop.style.width=base-65+"px";
            main2.style.width=base-65+"px";
            main3.style.width=base-65+"px";
            fill[0].style.width=(base-65-600)/2+"px";
    		fill[1].style.width=(base-65-600)/2+"px";
    		fill[2].style.width=(base-65-600)/2+"px";
    		fill[3].style.width=(base-65-600)/2+"px";
            if(base-65<600){
                //title.style.width=base-65+"px";
                content2.style.width=base-65+"px";
            }
        }
        //拉动条影响的可视窗口变化
        function resize(anchor){
        	base=document.body.clientWidth;
        	formulabar.style.width=base-65+"px";
            titletop.style.width=base-65+"px";
            main2.style.width=base-65+"px";
            main3.style.width=base-65+"px";
            fill[0].style.width=(base-65-600)/2+"px";
    		fill[1].style.width=(base-65-600)/2+"px";
    		fill[2].style.width=(base-65-600)/2+"px";
    		fill[3].style.width=(base-65-600)/2+"px";
    		if(!anchor){window.scrollTo(0,0)}
    		else window.scrollTo(0,anchor);
        }

        //编辑栏功能
        var id=new Array();
        var popup=document.getElementById("popup");
        var left=document.getElementsByClassName("nav2_left");
        var linkbox=document.getElementById("link_box");
        var picbox=document.getElementById("pic_box");

        var lctpic=document.getElementById("lctpic");
        var itnpic=document.getElementById("itnpic");
        var lctup=document.getElementById("lctup");
        var itnup=document.getElementById("itnup");
        left[1].onclick=function(){
        	id=["link_box"];
        	boxShow(id);
            $(".link input").attr("value","");
        }
        left[2].onclick=function(){
        	id=["pic_box","lctpic"];
        	boxShow(id);
            $(".link input").attr("value","");
        }

        lctup.onclick=function(){
            itnpic.style.display="none";
            lctpic.style.display="block";
            id=["pic_box","lctpic"];
        }
        itnup.onclick=function(){
            lctpic.style.display="none";
            itnpic.style.display="block";
            id=["pic_box","itnpic"];
        }

        var popupcancel=document.getElementsByClassName("popup_cancel");
        var popupbottom=document.getElementsByClassName("popup_bottom");
        $(".popup_cancel").click(function(){
        	boxHide(id);
        	id=[];
        });
        $("#popup_bottom").click(function(){
        	boxHide(id);
        	id=[];
        });

        var nav2=document.getElementsByClassName("nav2");
        var articletype=document.getElementById("article_type");
        nav2[0].onmouseover=function(){
        	articletype.style.display="block";
        }
        nav2[0].onmouseout=function(){
        	articletype.style.display="none";
        }
        var type=document.getElementsByClassName("type");
        var whattype=document.getElementById("what_type");
        for(var i=0;i<type.length;i++){
        	type[i].onclick=function(){
        		for(var j=0;j<type.length;j++){
        			type[j].style.backgroundColor="#e1e1e1";
        		}
        		this.style.backgroundColor="#414141";
        		whattype.style.display="block";
        		whattype.innerHTML=this.innerHTML;
        	}
        }

        //编辑修改文章
        var articleedit=document.getElementById("article_edit");
        var writetitle=document.getElementById("write_title");
        var articletitle=document.getElementById("article_title");
        var right=document.getElementsByClassName("nav2_right");
        var text=document.getElementById("text");
        articleedit.onclick=function(){
        	for(var i=0;i<left.length;i++){
        		left[i].style.display="inline";
        	}
        	for(var i=0;i<right.length;i++){
        		right[i].style.display="inline";
        	}
        	//此处需把文章的类型填入whattype.innerHTML中！
    		writetitle.value=articletitle.innerHTML;
    		var string=new String();
    		for(var i=1;i<text.childNodes.length;i+=2){
    			string+=text.childNodes[i].innerText+'\n';
    		}
    		writetext.value=string;
    		articleedit.style.display="none";
        	main1.style.display="none";
        	main2.style.display="inline-block";
        	nav[0].style.display="block";
        	nav[1].style.display="none";
    		writetext.style.height=writetext.scrollHeight+"px";
    		main2.style.height=writetext.scrollHeight+150+"px";
    		for(var j=0;j<type.length;j++){
        		type[j].style.backgroundColor="#e1e1e1";
        	}
        	whattype.style.display="none";
        	resize();
    		if(articletitle.innerHTML=="About Me"){
    			writetitle.readOnly=true;
    			right[2].style.display="none";
    			whattype.style.display="none";
    			whattype.innerHTML="";
    		}
    		else {
    			writetitle.readOnly=false;
    			whattype.innerHTML="";
    		}
        }

        //侧栏功能
    	var nav=document.getElementsByClassName("nav");
    	var anchor=0;
    	//文章页的返回
    	nav[1].onclick=function(){
    		main.style.display="block";
    		main1.style.display="none";
    		main2.style.display="none";
    		main3.style.display="none";
    		nav[0].style.display="block";
    		nav[1].style.display="none";
    		formulabar.style.display="none";
    		resize(anchor);
    	}
    	//转到写作页
    	nav[5].onclick=function(){
    		for(var i=0;i<left.length;i++){
        		left[i].style.display="inline";
        	}
        	for(var i=0;i<right.length;i++){
        		right[i].style.display="inline";
        	}
        	formulabar.style.display="block";
        	articleedit.style.display="none";
        	main.style.display="none";
        	main1.style.display="none";
        	main2.style.display="inline-block";
        	main3.style.display="none";
        	whattype.style.display="none";
        	nav[0].style.display="block";
        	nav[1].style.display="none";
    		writetitle.readOnly=false;
    		writetitle.value="";
    		writetext.value="";
    		writetext.style.height=writetext.scrollHeight+"px";
            main2.style.height=writetext.scrollHeight+150+"px";
    		for(var j=0;j<type.length;j++){
        		type[j].style.backgroundColor="#e1e1e1";
        	}
        	resize();
    	}
    	//返回后台首页
    	nav[2].onclick=function(){
    		main.style.display="block";
    		formulabar.style.display="none";
    		main1.style.display="none";
    		main2.style.display="none";
    		main3.style.display="none";
    		nav[0].style.display="block";
        	nav[1].style.display="none";
    		resize();
    	}
    	//表格
    	nav[6].onclick=function(){
    		main.style.display="none";
    		main1.style.display="none";
    		main2.style.display="none";
    		main3.style.display="block";
    		formulabar.style.display="none";
    		if(!flag)
    			$("#article_table").css({display:"inline-table"});
    		resize();
    	}
    	//回到顶部
    	nav[7].onclick=function(){
    		window.scrollTo(0,0);
    	}
    	nav[7].onmouseover=function(){
    		this.style.backgroundColor="#cccccc";
    	}
    	nav[7].onmouseout=function(){
    		this.style.backgroundColor="#e78170";
    		if(document.body.scrollTop==0)
    			this.style.backgroundColor="#414141";
    	}
    	window.onscroll=function(){
    		if(document.body.scrollTop!=0)
    			nav[7].style.backgroundColor="#e78170";
    		else
    			nav[7].style.backgroundColor="#414141";
    	}

        //写作编辑框自动调整长度功能
        var writetext=document.getElementById("write_text");
        writetext.oninput=function(){
            this.style.height=0+"px";
            if(this.scrollHeight>this.offsetHeight){
                this.style.height=this.scrollHeight+50+"px";
                main2.style.height=this.scrollHeight+150+"px";
                resize();
                window.scrollTo(0,document.body.scrollHeight-20);
                return;
            }
            this.style.height=this.scrollHeight+"px";
            main2.style.height=this.scrollHeight+150+"px";
            resize();
            window.scrollTo(0,document.body.scrollHeight-20);
        }

        //aboutme功能
        var aboutme=document.getElementById("about_me2");
        aboutme.onclick=function(){
        	for(var i=0;i<left.length;i++){
        		left[i].style.display="none";
        	}
        	for(var i=0;i<right.length;i++){
        		right[i].style.display="none";
        	}
        	articleedit.style.display="inline";
        	main.style.display="none";
        	main1.style.display="block";
        	main2.style.display="none";
        	main3.style.display="none";
        	nav[0].style.display="block";
        	nav[1].style.display="none";
        	base=document.body.clientWidth;
        	//title.style.width=base-65+"px";
        	formulabar.style.display="block";
        	articletitle.innerText="About Me";
        	resize();
        }

        //文章入口
        var articleentrance=document.getElementsByClassName("article_entrance");
        for(var i=0;i<articleentrance.length;i++){
        	articleentrance[i].onclick=function(){
        		for(var i=0;i<left.length;i++){
        			left[i].style.display="none";
        		}
        		for(var i=0;i<right.length;i++){
        			right[i].style.display="none";
        		}
        		articleedit.style.display="inline";
        		formulabar.style.display="block";
        		main.style.display="none";
        		main1.style.display="block";
        		nav[0].style.display="none";
        		nav[1].style.display="block";
        		articletitle.innerText=this.innerText;
        		anchor=document.body.scrollTop;
        		resize();
        	}
        }

        	//main3导航
        	var flag=0;
        	//默认文章表格为首次进入页面，把3个按钮隐藏
        	$(".table_button:eq(2)").css({display:"none"});
        	$(".table_button:eq(3)").css({display:"none"});
        	$(".table_button:eq(4)").css({display:"none"});
        	//给导航栏添加事件，显示不同表格和功能按钮
        	$("#main3 li:eq(0)").click(function(){
        		flag=1;
        		$("#main3 ul p").animate({left:"12px"});
        		$("#article_table").css({display:"inline-table"});
        		$("#comments_table").css({display:"none"});
        		$("#type_table1").css({display:"none"});
        		$("#child_class_control").css({display:"none"});
        		$("#type_table2").css({display:"none"});
        		$("#account_table").css({display:"none"});
        		$(".table_button:eq(2)").css({display:"none"});
        		$(".table_button:eq(3)").css({display:"none"});
        		$(".table_button:eq(4)").css({display:"none"});
        	});
        	$("#main3 li:eq(1)").click(function(){
        		flag=2;
        		$("#main3 ul p").animate({left:"117px"});
        		$("#article_table").css({display:"none"});
        		$("#comments_table").css({display:"inline-table"});
        		$("#type_table1").css({display:"none"});
        		$("#child_class_control").css({display:"none"});
        		$("#type_table2").css({display:"none"});
        		$("#account_table").css({display:"none"});
        		$(".table_button:eq(2)").css({display:"block"});
        		$(".table_button:eq(3)").css({display:"none"});
        		$(".table_button:eq(4)").css({display:"none"});
        	});
        	$("#main3 li:eq(2)").click(function(){
        		flag=3;
        		$("#main3 ul p").animate({left:"222px"});
        		$("#article_table").css({display:"none"});
        		$("#comments_table").css({display:"none"});
        		$("#type_table1").css({display:"inline-table"});
        		$("#child_class_control").css({display:"block"});
        		$("#type_table2").css({display:"inline-table"});
        		$("#account_table").css({display:"none"});
        		$(".table_button:eq(2)").css({display:"block"});
        		$(".table_button:eq(3)").css({display:"block"});
        		$(".table_button:eq(4)").css({display:"block"});
        	});
        	$("#main3 li:eq(3)").click(function(){
        		flag=4;
        		$("#main3 ul p").animate({left:"327px"});
        		$("#article_table").css({display:"none"});
        		$("#comments_table").css({display:"none"});
        		$("#type_table1").css({display:"none"});
        		$("#child_class_control").css({display:"none"});
        		$("#type_table2").css({display:"none"});
        		$("#account_table").css({display:"inline-table"});
        		$(".table_button:eq(2)").css({display:"block"});
        		$(".table_button:eq(3)").css({display:"block"});
        		$(".table_button:eq(4)").css({display:"block"});
        	});

    	//表格按钮功能
    	var pop=document.getElementsByClassName("table_button")[2];
    	var edit=document.getElementsByClassName("table_button")[3];
    	var add=document.getElementsByClassName("table_button")[4];
    	var popbox=document.getElementById("pop_box");
    	$(".table_button:eq(2)").click(function(){
    		//删除按钮
    		if(flag==4){
    			id=["pop_box","hint_title","account_delete_hint"];
    			boxShow(id);
    		}
    		if(flag==3){
    			id=["pop_box","parent_delete_title","parent_delete_hint"];
    			boxShow(id);
    		}
    		if(flag==2){
    			id=["pop_box","hint_title","comment_delete_hint"];
    			boxShow(id);
    		}
    	});
    	$(".table_button:eq(3)").click(function(){
    		//编辑按钮
    		if(flag==4){
    			id=["edit_box","account_edit_title","account_edit_form"];
    			boxShow(id);
    		}
    		if(flag==3){
    			id=["edit_box","parent_edit_title","parent_edit_form"];
    			boxShow(id);
    		}
    	});
    	$(".table_button:eq(4)").click(function(){
    		//添加按钮
    		if(flag==4){
    			id=["add_box","account_add_title","account_add_form"];
    			boxShow(id);
    		}
    		if(flag==3){
    			id=["add_box","parent_add_title","parent_add_form"];
    			boxShow(id);
    		}
    	});
    	$(".table_button:eq(5)").click(function(){
    		//子类的删除按钮
    		if(flag==3){
    			id=["pop_box","child_delete_title","child_delete_hint"];
    			boxShow(id);
    		}
    	});
    	$(".table_button:eq(6)").click(function(){
    		//子类的编辑按钮
    		if(flag==3){
    			id=["edit_box","child_edit_title","child_edit_form"];
    			boxShow(id);
    		}
    	});
    	$(".table_button:eq(7)").click(function(){
    		//子类的添加按钮
    		if(flag==3){
    			id=["add_box","child_add_title","child_add_form"];
    			boxShow(id);
    		}
    	});

    	//box在不关闭的情况下转换内容
    	$(".popup_confirm").click(function(){
        	boxHide(id);
        	id=[];
    	});

    	//函数区
    	function boxShow(id){
    		popup.style.display="block";
    		for(var i=0;i<id.length;i++){
    			$("#"+id[i]).css({"display":"block"});
    		}
    		var h=$("#"+id[0])[0].scrollHeight;
    		$("#"+id[0]).css({"margin-top":"-"+h/2+"px"});
    	}
    	function boxHide(id){
    		popup.style.display="none";
    		for(var i=0;i<id.length;i++){
    			$("#"+id[i]).css({"display":"none"});
    		}
    	}
}