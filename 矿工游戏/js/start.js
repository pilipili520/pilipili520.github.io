/**
 * Created by Administrator on 2018/2/1.
 */
(function(){
    var centerObj = new Object();
    centerObj.camera = new HGAME.camera();//镜头对象
    centerObj.animate=new HGAME.animate();//动画对象
    centerObj.animate2=new HGAME.animate({time:60});//动画对象
    centerObj.model=new HGAME.model();
    centerObj.maxBox = new HGAME.canvas({
        w:500,
        h:800
    });//canvas对象
    centerObj.start=false;
    centerObj.loadedObj=new HGAME.source();//加载资源
    centerObj.camera.add(centerObj.maxBox);
    var arr=new Array();
    centerObj.failFun=function(){
        if(centerObj.model.showView==true)return;
        centerObj.model.btnType="cx";
        centerObj.model.btn2Type="jx";
     
        centerObj.model.show(centerObj.maxBox,{
            w:400,
            addY:15,
            title:{
                txt:"哎,失败了",
                bgColor:"#ff9900",
                color:"#ffffff"
            },
            content:{
                txt:["好气,没有过关啊"],
                verticalAlign:"middle"
            },
            btn:{
                txt:"重新开始",
                fontSize:"20",
                bgColor:"#ffbb00",
                color:"#ffffff",
                w:200
            },
            btn2:{
                txt:"继续这关",
                fontSize:"20",
                bgColor:"#aaee00",
                color:"#ffffff",
                w:200
            }
        });
    }

    centerObj.animate2.action=function(){
        if(centerObj.model.showView==false){
            for(var i = 0;i<centerobj.starr.length;i++){ methodinfo(centerobj.starr[i],"method2"); } if(centerobj.user.num>=gsImgInfo[centerObj.gs][2]){
          //  centerObj.gs++;
            //centerObj.user.num=0;
            if(centerObj.model.showView==false){
                centerObj.model.btnType="next";
                centerObj.model.show(centerObj.maxBox,{
                    w:400,
                    addY:30,
                    title:{
                        txt:"哇,好厉害",
                        bgColor:"#ff9900",
                        color:"#ffffff"
                    },
                    content:{
                        txt:["过关了,点击进行下一关"],
                        verticalAlign:"middle"
                    },
                    btn:{
                        txt:"下一关",
                        fontSize:"20",
                        bgColor:"#ffbb00",
                        color:"#ffffff"
                    }
                });
            }
          
       //     gsInfo(centerObj.gs);
        }
    }
    function clickNext(){
        if(centerObj.gs==centerObj.allGs){
            centerObj.model.btnType="cx";
            centerObj.model.show(centerObj.maxBox,{
                w:400,
                addY:30,
                title:{
                    txt:"哇哦",
                    bgColor:"#ff9900",
                    color:"#ffffff"
                },
                content:{
                    txt:["这么厉害啊，竟然打过全部的关卡了!!"],
                    verticalAlign:"middle"
                },
                btn:{
                    txt:"重新开始",
                    fontSize:"20",
                    bgColor:"#ffbb00",
                    color:"#ffffff"
                }
            });
            return ;
        }
        centerObj.model.close();
        centerObj.user.num=0;
        centerObj.nowTime=0;
        centerObj.gs++;
        localStorage.gs=centerObj.gs;
        gsInfo(centerObj.gs);
    }
    function continueFun(){
        centerObj.model.close();
        centerObj.user.num=0;
        centerObj.nowTime=0;
        gsInfo(centerObj.gs);
    }
    centerObj.animate2.aSecondAction=function(){
        if(centerObj.model.showView==true){return };
        centerObj.nowTime++;
        for(var i=0;i<centerobj.goodsarr.length;i++){ methodinfo(centerobj.goodsarr[i],"method3"); } if(centerobj.user.goodsaddinfo>0){
            centerObj.user.goodsAddInfo--;
        }else if(centerObj.user.goodsAddInfo==0){
            if(centerObj.user.goodsAdd==0)return;
            centerObj.user.goodsAdd=0;
        }
    }
    centerObj.animate.action=function(){
        centerObj.maxBox.render();
        if(centerObj.model.showView==true){        renderAfter();return };
        centerObj.user.angeleChangeFun();
        for(var i = 0;i<centerobj.starr.length;i++){ methodinfo(centerobj.starr[i]); } for(i="0;i<centerObj.goodsArr.length;i++){" methodinfo(centerobj.goodsarr[i]); renderafter(); }; centerobj.gs="0;" centerobj.allgs="8;" centerobj.starr="new" array(); centerobj.goodsarr="new" centerobj.nowtime="0;" function changeattr(struct){ var arr="new" for(var i in struct){ if(typeof struct[i]="=" "string"){ status[i]&&(arr="status[i].split("=">"));
                //0 设置 1 对象 2 属性 3 偏差
                if(arr[0]=="set"){
                    struct[i]=centerObj[arr[1]][arr[2]]+arr[3];
                }
            }
        }
    }
    function methodInfo(struct,name){
        name=name||"method";
        if(typeof struct[name]!="undefined"){
            //debugger;
            for(var q = 0;q<struct[name].length;q++){ if(typeof struct[struct[name][q].name]!="undefined" ){ struct[name][q].arguments="="string"){" arr="struct[name][q].arguments.split("=">");
                        if(arr.length>=2&&arr[0]=="set"){
                            struct[struct[name][q].name](centerObj);
                        }else{
                            struct[struct[name][q].name](struct[name][q].arguments);
                        }
                    }else{
                        struct[struct[name][q].name](struct[name][q].arguments);
                    }
                   
                }
            }
        }
    }
    function gsInfo(num){
        centerObj.gs=num;
        centerObj.animate.stop();
        centerObj.animate2.stop();
        centerObj.maxBox.empty();
        centerObj.stArr=new Array();
        centerObj.goodsArr=new Array();
        centerObj.loadedObj.loadCall=function(){
            var txt =centerObj.maxBox.txt;
            centerObj.maxBox.clear();
            txt.beginPath();
            txt.fillStyle="#000000";
            txt.fillRect(0,0,centerObj.maxBox.w,centerObj.maxBox.h);
            txt.fillStyle="#ffffff";
            txt.font=("normal normal {size}/{line} arial").replace("{size}","18px").replace("{line}","24px");
            txt.textBaseline="middle";
            txt.textAlign="center";
            txt.fillText("加载资源"+this.loadNum+"/"+(this.data.length-1),centerObj.maxBox.w/2,centerObj.maxBox.h/2);
            txt.closePath();
        }
        centerObj.loadedObj.loadedSource(gsImgInfo[centerObj.gs][0],function(){
            for(var i = 0;i<gsimginfo[centerobj.gs][1].length;i++){ changeattr(gsimginfo[centerobj.gs][1][i]); var obj="null;" gsimginfo[centerobj.gs][1][i].type="typeof" if(gsimginfo[centerobj.gs][1][i].type="="stone"){" hgame.stone(gsimginfo[centerobj.gs][1][i]); if(!obj.nowpush){ centerobj.starr.push(obj); } centerobj.maxbox.add(obj); }else hgame.goods(gsimginfo[centerobj.gs][1][i],centerobj); centerobj.goodsarr.push(obj); settimeout(function(){ centerobj.maxbox.add(centerobj.user.user); centerobj.animate.run(); centerobj.animate2.run(); },500); }); centerobj.loadedobj.loadedsource(allimgdata,function(){ userdate="METHOD.arrToImg(userImg);" uimgarr="[userDate[0],userDate[1],userDate[2],userDate[3]];" timgarr="[userDate[4],userDate[5],userDate[6],userDate[4]]" centerobj.user="new" hgame.userobj({ uimgobj:{w:73,h:77,x:100,y:135}, gzobj:{w:72,h:50}, timgarr:timgarr, lineobj:{w:50,h:4,color:"#cccccc"}, uimgarr:uimgarr, sw: centerobj.maxbox.w, sh: centerobj.maxbox.h, gzimg:userdate[8], maxbox:centerobj.maxbox txt="centerObj.maxBox.txt;" img="METHOD.createImg("img/bg/startBg.jpg");" txt.drawimage(img,0,0); gsinfo(centerobj.gs); centerobj.maxbox.dom.addeventlistener("click",function(e){ e="e||window.event;" point="{" x:e.offsetx, y:e.offsety if(centerobj.start="=false){" rectstart="{//开始游戏" x:186, y:531, w:128, h:38 rectstart02="{//继续游戏" y:577, if(method.inrect(point,rectstart)){ centerobj.start="true;" if(method.inrect(point,rectstart02)){ gsinfo(typeof localstorage.gs="="undefined"?0:localStorage.gs);" return; if(centerobj.model.showview){ if(method.inrect(point,{ x:centerobj.model.btn.const_buf_x, y:centerobj.model.btn.const_buf_y, w:centerobj.model.btn.w, h:centerobj.model.btn.h })){ if(centerobj.model.btntype="="next"){" clicknext(); centerobj.model.close(); centerobj.user.num="0;" centerobj.nowtime="0;" centerobj.gs="0;" x:centerobj.model.btn2.const_buf_x, y:centerobj.model.btn2.const_buf_y, w:centerobj.model.btn2.w, h:centerobj.model.btn2.h if(centerobj.model.btn2type="="jx"){" continuefun(); window.onkeydown="function(e){" if(e.keycode="=74){" if(centerobj.user.line.w!="centerObj.user.bufW)return;" centerobj.user.grabfun(centerobj); centerobj.user.colfun(centerobj.starr); e.keycode="=39){" centerobj.user.moveleft(); centerobj.user.moveright(); }; conststruct="{" bufw:0, bufw02:0, bufh:0, fontstr:"normal normal {size} {line} arial" function renderafter(){ if(centerobj.nowtime>=gsImgInfo[centerObj.gs][3]){
            centerObj.failFun();
        }
        var txt = centerObj.maxBox.txt;
        var str = "";
        txt.beginPath();
    
        txt.fillStyle="#000000";
        txt.fillRect(0,0,centerObj.maxBox.w,30);
      //  debugger;
        txt.font=constStruct.fontStr.replace("{size}","18px").replace("{line}",'24px');
        str="通关分数:"+centerObj.user.num+"/"+gsImgInfo[centerObj.gs][2];
        txt.fillStyle="#ffffff";
        txt.textBaseline="top";
        txt.textAlign="left";
        txt.fillText(str,10,3);
        constStruct.bufW+=txt.measureText(str).width+20;

        txt.strokeStyle="#ffffff";
        txt.lineWidth=2;
        txt.strokeRect(centerObj.maxBox.w-100-10,7,100,14);
        txt.fillStyle="#ffffff";
        txt.fillRect(centerObj.maxBox.w-100-9,8,98*(1-centerObj.nowTime/gsImgInfo[centerObj.gs][3]),12);
        txt.fillText("时间:",centerObj.maxBox.w-100-10-txt.measureText("时间:").width-10,3);
        constStruct.bufH=30;
        if(centerObj.user.goodsAddInfo>0){
            txt.shadowColor = 'rgba(0, 0, 0, 0.9)';
            // 将阴影向右移动15px，向上移动10px
            txt.shadowOffsetX = 0;
            txt.shadowOffsetY = 0;
            // 轻微模糊阴影
            txt.shadowBlur = 10;
            str="拉力增加:"+centerObj.user.goodsAddInfo+"s";
            txt.font=constStruct.fontStr.replace("{size}","12px").replace("{line}",'12px');
            txt.fillStyle="rgba(0,0,0,0.6)";
            txt.fillText(str,10,constStruct.bufH+5);
            constStruct.bufW02=10+txt.measureText(str).width;
            constStruct.bufH+=17;
            txt.shadowBlur = 0;
        }
        
        txt.closePath();
    }
    document.getElementById("demo").appendChild(centerObj.maxBox.dom);
})();</gsimginfo[centerobj.gs][1].length;i++){></struct[name].length;q++){></centerobj.starr.length;i++){></centerobj.goodsarr.length;i++){></centerobj.starr.length;i++){>