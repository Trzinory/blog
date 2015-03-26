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
        		$("#condition_switch").css({display:"block"});
        		$("#account_hint").css({display:"none"});
        		$("#article_table").css({display:"inline-table"});
        		$("#comments_table").css({display:"none"});
        		$("#parent_table").css({display:"none"});
        		$("#child_class_control").css({display:"none"});
        		$("#child_table").css({display:"none"});
        		$("#account_table").css({display:"none"});
        		$(".table_button:eq(2)").css({display:"none"});
        		$(".table_button:eq(3)").css({display:"none"});
        		$(".table_button:eq(4)").css({display:"none"});
        		resize();
        	});
        	$("#main3 li:eq(1)").click(function(){
        		flag=2;
        		$("#main3 ul p").animate({left:"117px"});
        		$("#condition_switch").css({display:"block"});
        		$("#account_hint").css({display:"none"});
        		$("#article_table").css({display:"none"});
        		$("#comments_table").css({display:"inline-table"});
        		$("#parent_table").css({display:"none"});
        		$("#child_class_control").css({display:"none"});
        		$("#child_table").css({display:"none"});
        		$("#account_table").css({display:"none"});
        		$(".table_button:eq(2)").css({display:"block"});
        		$(".table_button:eq(3)").css({display:"none"});
        		$(".table_button:eq(4)").css({display:"none"});
        		resize();
        	});
        	$("#main3 li:eq(2)").click(function(){
        		flag=3;
        		$("#main3 ul p").animate({left:"222px"});
        		$("#condition_switch").css({display:"none"});
        		$("#condition").css({display:"none"});
        		$("#account_hint").css({display:"none"});
        		$("#article_table").css({display:"none"});
        		$("#comments_table").css({display:"none"});
        		$("#parent_table").css({display:"inline-table"});
        		$("#child_class_control").css({display:"block"});
        		$("#child_table").css({display:"inline-table"});
        		$("#account_table").css({display:"none"});
        		$(".table_button:eq(2)").css({display:"block"});
        		$(".table_button:eq(3)").css({display:"block"});
        		$(".table_button:eq(4)").css({display:"block"});
        		resize();
        	});
        	$("#main3 li:eq(3)").click(function(){
        		flag=4;
        		$("#main3 ul p").animate({left:"327px"});
        		$("#condition_switch").css({display:"none"});
        		$("#condition").css({display:"none"});
        		$("#account_hint").css({display:"block"});
        		$("#article_table").css({display:"none"});
        		$("#comments_table").css({display:"none"});
        		$("#parent_table").css({display:"none"});
        		$("#child_class_control").css({display:"none"});
        		$("#child_table").css({display:"none"});
        		$("#account_table").css({display:"inline-table"});
        		$(".table_button:eq(2)").css({display:"block"});
        		$(".table_button:eq(3)").css({display:"block"});
        		$(".table_button:eq(4)").css({display:"block"});
        		resize();
        	});
        	$("#condition_switch").click(function(){
        		if($("#condition").css("display")=="none"){
        			$("#condition").css({display:"block"});
        		}
        		else {
        			$("#condition").css({display:"none"});
        		}
        		resize();
        	});

    	//表格按钮功能
    	//boxData记录当前弹出框对应的表格、操作和操作行序号
    	var boxData=new Array();
    	//count记录打勾数，number记录打勾行的序号
    	var count=0,number=0;
    	var parenttable=document.getElementById("parent_table");
    	var childtable=document.getElementById("child_table");
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
    			count=0;
    			for(var i=1;i<parenttable.rows.length;i++){
    				if(parenttable.rows[i].cells[0].childNodes[0].checked){
    					number=i;
    					count++;
    					if(count>=2){
    						break;
    					}
    				}
    			}
    			if(count>=2){
    				id=["edit_box","hint_title","class_edit_hint"]
    				boxShow(id);
    				boxData=[];
    			}
    			else if(count==1) {
    				id=["edit_box","parent_edit_title","parent_edit_form"];
    				boxShow(id);
    				$("#parent_edit_form input:last").focus();
    				boxData=["parent","edit",number];
    			}
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
    			$("#parent_add_form input:last").focus();
    			boxData=["parent","add"];
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
    			count=0;
    			for(var i=1;i<childtable.rows.length;i++){
    				if(childtable.rows[i].cells[0].childNodes[0].checked){
    					number=i;
    					count++;
    					if(count>=2){
    						break;
    					}
    				}
    			}
    			if(count>=2){
    				id=["edit_box","hint_title","class_edit_hint"]
    				boxShow(id);
    				boxData=[];
    			}
    			else if(count==1) {
    				id=["edit_box","child_edit_title","child_edit_form"];
    				boxShow(id);
    				$("#child_edit_form input:last").focus();
    				boxData=["child","edit",number];
    			}
    		}
    	});
    	$(".table_button:eq(7)").click(function(){
    		//子类的添加按钮
    		if(flag==3){
    			id=["add_box","child_add_title","child_add_form"];
    			boxShow(id);
    			$("#child_add_form input:last").focus();
    			boxData=["child","add"]
    		}
    	});

    	//确认按钮事件
    	$(".popup_confirm").click(function(){
    		var str=new Array();
    		var table;
    		var parent;
    		if(boxData[0]=="parent"&&boxData[1]=="add"){
    			str[0]=document.getElementById(boxData[0]+"_"+boxData[1]+"_input").value;
    			table=document.getElementById(boxData[0]+"_table");
    			if(!check(table,str,0)){
    				return;
    			}
    			newTr(table,str);
    			parent="<option>"+str[0]+"</option>";
    			$("#child_edit_form select").append(parent);
    			$("#child_add_form select").append(parent);
        		boxHide(id);
        		id=[];
    		}
    		else if(boxData[0]=="child"&&boxData[1]=="add"){
    			str[0]=document.getElementById("child_add_select").value;
    			str[1]=document.getElementById("child_add_input").value;
    			table=document.getElementById(boxData[0]+"_table");
    			if(!check(table,str,1)){
    				return;
    			}
    			newTr(table,str);
        		boxHide(id);
        		id=[];
    		}
    		else if(boxData[0]=="parent"&&boxData[1]=="edit"){
    			str[0]=document.getElementById("parent_edit_input").value;
    			table=document.getElementById(boxData[0]+"_table");
    			if(!check(table,str,0)){
    				return;
    			}
    			parent=table.rows[boxData[2]].cells[2].textContent;
    			//先改子类表格的相关父类名
    			for(var i=1;i<childtable.rows.length;i++){
    				if(childtable.rows[i].cells[2].textContent==parent){
    					childtable.rows[i].cells[2].textContent=str[0];
    				}
    			}
    			for(var i=0;i<$("#child_add_form option").length;i++){
    				if($("#child_add_form option:eq("+i+")").text()==parent){
    					$("#child_add_form option:eq("+i+")").text(str[0]);
    					$("#child_edit_form option:eq("+i+")").text(str[0]);
    				}
    			}
    			//再改父类表格的父类名
    			changeTr(table,str,boxData[2]);
        		boxHide(id);
        		id=[];
    		}
    		else if(boxData[0]=="child"&&boxData[1]=="edit"){
    			str[0]=document.getElementById("child_edit_select").value;
    			str[1]=document.getElementById("child_edit_input").value;
    			table=document.getElementById(boxData[0]+"_table");
    			if(!check(table,str,1)){
    				return;
    			}
    			parent=table.rows[boxData[2]].cells[2].textContent;
    			var same=parent==str[0]?1:0;
    			changeTr(table,str,boxData[2]);
    			//父类改动的话，把该子类的文章数叠加到现在的父类上
    			if(!same){
    				for(var i=1;i<parenttable.rows.length;i++){
    					//找出子类增加的父类
    					if(parenttable.rows[i].cells[2].textContent==str[0]){
    						parenttable.rows[i].cells[4].textContent
    						=parseInt(parenttable.rows[i].cells[4].textContent)
    						+parseInt(table.rows[boxData[2]].cells[4].textContent);
    					}
    					//找出子类减少的父类
    					else if(parenttable.rows[i].cells[2].textContent==parent){
    						parenttable.rows[i].cells[4].textContent
    						=parseInt(parenttable.rows[i].cells[4].textContent)
    						-parseInt(table.rows[boxData[2]].cells[4].textContent);
    					}
    				}
    			}
        		boxHide(id);
        		id=[];
    		}
    		else {
        		boxHide(id);
        		id=[];
        	}
    	});

    	//函数区
    	function boxShow(id){
    		//控制弹出框显示
    		popup.style.display="block";
    		for(var i=0;i<id.length;i++){
    			$("#"+id[i]).css({"display":"block"});
    			if($("#"+id[i]+" input").attr("type")=="text"){
    				$("#"+id[i]+" input").val("");
    			}
    		}
    		var h=$("#"+id[0])[0].scrollHeight;
    		$("#"+id[0]).css({"margin-top":"-"+h/2+"px"});
    	}
    	function boxHide(id){
    		//控制弹出框关闭
    		popup.style.display="none";
    		for(var i=0;i<id.length;i++){
    			$("#"+id[i]).css({"display":"none"});
    		}
    	}
    	function newTd(string){
    		var td=document.createElement("td");
    		if(string=="input"){
    			var input=document.createElement("input");
    			input.type="checkbox";
    			td.appendChild(input);
    		}
    		else {
    			td.textContent=string;
    		}
    		return td;
    	}
    	function getTr(table,arr){
    		//把数据插入表格
    		var tr=document.createElement("tr");
    		tr.appendChild(newTd("input"));
    		var num=table.rows.length;
    		tr.appendChild(newTd(num));
    		for(var i=0;i<arr.length;i++){
    			tr.appendChild(newTd(arr[i]));
    		}
    		table.appendChild(tr);
    	}
    	function newTr(table,str){
    		var tr=document.createElement("tr");
    		tr.appendChild(newTd("input"));
    		var num=table.rows.length;
    		tr.appendChild(newTd(num));
    		for(var i=0;i<str.length;i++){
    			tr.appendChild(newTd(str[i]))
    		}
    		var len=table.rows[0].cells.length-2-str.length;
    		for(var i=0;i<len;i++){
    			tr.appendChild(newTd("0"));
    		}
    		table.appendChild(tr);
    	}
    	function changeTr(table,str,number){
    		table.rows[number].cells[2].textContent=str[0];
    		if(str[1]){
    			table.rows[number].cells[3].textContent=str[1];
    		}
    	}
    	function check(table,str,n){
    		if(n==0){
    			for(var i=1;i<table.rows.length;i++){
    				if(table.rows[i].cells[2].textContent.toLowerCase()==str[0].toLowerCase()){
    					alert("父类名重复！");
    					return false;
    				}
    			}
    			return true;
    		}
    		if(n==1){
    			for(var i=1;i<table.rows.length;i++){
    				if(table.rows[i].cells[3].textContent.toLowerCase()==str[1].toLowerCase()
    					&&table.rows[i].cells[2].textContent.toLowerCase()==str[0].toLowerCase()){
    					alert("该父类中子类名重复！");
    					return false;
    				}
    			}
    			return true;
    		}
    	}
}