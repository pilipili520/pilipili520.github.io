/**
 * Created by Administrator on 2018/2/4.
 */
//uImgArr
//gzImg
//lineInfo
//uImgObj
//gzObj
//lineObj
HGAME.userObj=function(Obj){
    this.uImgObj={};
    this.gzObj={};
    this.lineObj={};
    this.sW=0;
    this.sH=0;
    this.changW=6;
    this.maxBox=null;
    extend(this,Obj);
    //设置默认的图像
    this._struct="userObj";
    var THIS = this;
    //this.uImgArr=new Array();
    //用户看到的人
    this.user=new HGAME.Object2D(this.uImgObj);
    //用户看到的钩子
    this.gz=new HGAME.Object2D(this.gzObj);
    //用户看到的线
    this.line=new HGAME.Object2D(this.lineObj);
    this.user.img=this.uImgArr[0];
    this.gz.img=this.gzImg;
    //将对应的层级加入
    this.user.add(this.line);
    this.line.add(this.gz);

   //设置默认的坐标轴
    this.line.x=this.lineObj.x?this.lineObj.x:this.user.w/2;
    this.line.y=this.lineObj.y?this.lineObj.y:this.user.h/2+16;
    this.gz.y=this.gzObj.y?this.gzObj.y:this.line.h-this.gz.h/2;
    this.gz.x=this.gzObj.x?this.gzObj.x:this.line.w-this.gz.w/2;
    //设置旋转坐标
    this.line.rotatePointX=0;
    //托管属性 重写等号运算符
    this.lineChangeFun=function(){
        //当线条改变将钩子的对应坐标和角度进行改变
        var p=METHOD.polarCoordinates({x:0,y:0},this.angle,this.w);
        THIS.gz.x= p.x-THIS.gz.w/2;
        THIS.gz.y= p.y-THIS.gz.h/2;
        THIS.gz.angle=this.angle-90<0?360+this.angle-90:this.angle-90; }; method.defineex(this.line,"angle",89,this.linechangefun); method.defineex(this.line,"w",this.lineobj.w,this.linechangefun); method.defineex(this.line,"h",this.lineobj.h,this.linechangefun); 初始化 防止出现角度为负数出现的bug this.line.angle++; this.grabget="true;" this.bufw="this.line.w;" 动画对象 this.color="#ffff00" ; this.animate="new" hgame.animate(); this.goodsadd="0;" this.goodsaddinfo="0;" method.defineex(this,"goodsadd",0,function(){ debugger; if(this.goodsadd>0){
            THIS.goodsAddInfo+=10;
        }
    });
    this.lineMoveInt=0;
    this.animate.action=function(){
        var bool = true;
        if(THIS.stArr.length){
            if(THIS.getCol!=true){

       
            for(var q = 0;q<this.starr.length;q++){ if(this.colobj.rotatetest(this.starr[q],this.gz)="=true){" if(this.maxbox!="null&&THIS.getGold==null){" this.maxbox.remove(this.starr[q]); this.gz.add(this.starr[q]); this.starr[q].x="THIS.gz.w/2-THIS.stArr[q].w/2;" this.starr[q].y="THIS.gz.h/2-THIS.stArr[q].h/2;" this.getcol="true;" this.getgold="THIS.stArr[q];" this.grabget="false;" return ; } if(this.grabget){ if(this.gz.const_buf_x+this.gz.w>THIS.sW){
                bool=false;
                THIS.grabGet=false;
            }
            if(THIS.gz.CONST_BUF_X<-this.gz.w 2){ bool="false;" this.grabget="false;" } if(this.gz.const_buf_y+this.gz.h>THIS.sH){
                bool=false;
                THIS.grabGet=false;
            }
            if(bool){
                THIS.line.w+=THIS.changW;
            }
        }else{
            if(THIS.line.w<=this.bufw){ this.grabget="true;" this.line.w="THIS.bufW;" this.animate.stop(); this.getcol="false;" if(this.getgold!="null){" this.num+="THIS.getGold.addNum;" this.gz.remove(this.getgold); this.starr.splice( this.starr.indexof(this.getgold),1); this.say("+"+this.getgold.addnum, this.color); this.getgold="null;" } this.user.img="THIS.uImgArr[THIS.nowInt];" }else{ var w="0;" a="0;" this.line.w-="w;" this.linemoveint+="w;" if(this.linemoveint>=8){
                        THIS.lineMoveInt=0;
                        if(THIS.nowInt>=THIS.showLength-1){
                            THIS.nowInt=0;
                        }else{
                            THIS.nowInt++;
                        }
                        THIS.user.img=THIS.tImgArr[THIS.nowInt];
                    }
                }
            
               
            }
        }
        
    };
    //分数相关
    this.num=0;
    //抓这一个行为的函数
    this.grabFun=function(obj){
        THIS.animate.stop();
        THIS.animate.run();
    };
    //角度改变这一个行为
    this.angeleAdd=true;
    this.angeleChangeFun=function(){
        if(THIS.line.w!=THIS.bufW)return;
        if(this.line.angle>=160){
            this.angeleAdd=false;
        }else if(this.line.angle<=30){ this.angeleadd="true;" } if(this.angeleadd){ this.line.angle++; }else{ this.line.angle--; }; 移动行为 this.nowint="0;" this.showlength="this.uImgArr.length;" this.moveleft="function(){" if(this.user.const_buf_x+this.user.w<this.sw-30){ this.user.x+="8;" this.user.x="this.sW-30-this.user.w;" if(this.nowint>=this.showLength-1){
            this.nowInt=0;
        }else{
            this.nowInt++;
        }
        this.user.img=this.uImgArr[this.nowInt];
    };
    this.moveRight=function(){
        if(this.user.CONST_BUF_X>30){
            this.user.x-=8;
        }else{
            this.user.x=30;
        }
        if(this.nowInt>=this.showLength-1){
            this.nowInt=0;
        }else{
            this.nowInt++;
        }
        this.user.img=this.uImgArr[this.nowInt];
    };
    //碰撞行为
    this.colObj=new HGAME.collision();
    this.stArr=new Array();
    this.getCol=false;
    this.getGold=null;
    this.colFun=function(arr){
        if(arr==this.stArr){
            return;
        }
        this.stArr=arr;
    }
    this.say = function(str,color){
        str=str||"";
        var sayObj = new HGAME.sayObj({
            belong:this.user,
            text:str,
            animateDeath:true,
            fontOption:{
                color:color||"#ffffff",
                fontSize:"24"
            }
           
        });
        sayObj.animate.run();
    }

};


/*
* 石头类
* */

HGAME.stone=function(Obj){
    HGAME.Object2D.call(this,Obj);
    this.stonge=3;//重量
    this.addNum = 10;
    extend(this,Obj);
    this._struct="stone";
    if(typeof this.img=="undefined"||this.img==null){
        if(typeof this.imgArr!="undefined"){
            this.img = this.imgArr[0];
        }
    }

    //改变帧数函数
    this.nowImg=0;
    this.imgArr&&(this.imgAlllen=this.imgArr.length?this.imgArr.length:0);
    this.changeAnimate=function(){
        if(!this.imgArr)return;
        if(this.nowImg>=this.imgAlllen-1){
            this.nowImg=0;
        }else{
            this.nowImg++;
        }
        if(!this.imgArr.length)return;
        this.img=this.imgArr[this.nowImg];
    }
};
/*
* 物品类
* */
HGAME.goods=function(Obj,centerObj){
    this.sW=centerObj.maxBox.w;
    this.sH=centerObj.maxBox.h;
    this.changeKey="goodsAdd";
    this.changeVal=5;
    this.changeValTxt="拖动速度增加+"
    this.show=false;
    this.fNum=0.5;
    this.bufTime=30;
    this.createTime=10;
    HGAME.Object2D.call(this);
    this._struct="goods";
    this.colObj = new HGAME.collision();
    this.moveY=function(centerObj){
        if(this.show==false)return;
    
        if(this.y+this.h>this.sH){
            this.death&&this.death(centerObj);
            return;
        }
        if(this.colObj.test(centerObj.user.user,this)!="pzNO"){
    
            typeof centerObj.user[this.changeKey]!="undefined"&&(centerObj.user[this.changeKey]= centerObj.user[this.changeKey]+parseFloat(this.changeVal));
            this.getGoods&&this.getGoods(centerObj);
            centerObj.user.say(this.changeValTxt+this.changeVal);
            this.death(centerObj);
            return;
        };
        this.y++;
    }
    this.isCreate=function(){
       // debugger;
       if(this.createTime>0){return}
        if(this.show==true)return;
        if(Math.random()>this.fNum){
            this.create();
        }
    }
    this.create=function(){
        this.show=true;
        centerObj.maxBox.add(this);
        this.y=0;
        this.x=Math.random()*(centerObj.maxBox.w-60)+30;
    }
    this.timeInfo=function(){
        if(this.createTime>0)this.createTime--;
    }
    this.death=function(centerObj){
        this.y=-this.h;
        this.x=-this.w;
        this.CONST_BUF_X=0;
        this.CONST_BUF_Y=0;
        this.createTime=this.bufTime;
        this.show=false;
        centerObj.maxBox.remove(this);
       
    }
    extend(this,Obj);
};
/*
* 对话类
* */
HGAME.sayObj=function(Obj){
    if(typeof Obj=="undefined"){
        Obj={};
    }
    var THIS = this;

    this.animateDeath=false;
    this.moveArgument={
        start:{
            x:-5,
            y:0
        },
        end:{
            x:-5,
            y:-40
        }
    };
    this.fontOption={
        fontSize:16,
        color:"#ffffff",
        lineHeight:30,
        bgColor:"rgba(0,0,0,0)"
    };
    this.belong=null;//属于
    this.buffer="normal normal {size}/{line} arial";

    this.animateInt=0;
    this.animateIntBuf=0;

    extend(this.moveArgument,Obj.moveArgument);
    extend(this.fontOption,Obj.fontOption);
    if(typeof Obj.moveArgument!="undefined")delete Obj.moveArgument;
    if(typeof Obj.fontOption!="undefined")delete Obj.fontOption;
    this.text="my name";


    this.changeText=function(){
        this.txt.font=this.buffer.replace("{size}",this.fontOption.fontSize+"px").replace("{line}",this.fontOption.lineHeight+"px");

        this.w=this.txt.measureText(this.text).width;
        this.h=this.fontOption.lineHeight;
        this.txt.beginPath();

        this.txt.clearRect(0,0,this.w,this.h);
        this.txt.fillStyle=this.fontOption.bgColor;
        this.txt.fillRect(0,0,this.w,this.h);
        this.txt.font=this.buffer.replace("{size}",this.fontOption.fontSize+"px").replace("{line}",this.fontOption.lineHeight+"px");

        this.txt.fillStyle=this.fontOption.color;
        this.txt.textBaseline="top";
        this.txt.textAlign="left";

       this.txt.fillText(this.text,0,0);
        this.txt.closePath();
    };
    this.changeInfo=1;
    this.time=30;
    HGAME.canvas.call(this,Obj);
    this._struct="sayObj";
    METHOD.defineEx(this,"text",this.text,function(){
        this.changeText();
    });

    this.x=this.moveArgument.start.x;
    this.y=this.moveArgument.start.y;

    this.animate=new HGAME.animate({
        action:function(){
            THIS.transition();
        },
        time:this.time
    });
    this.transition=function(){
        if(this.animateIntBuf>=this.animateInt){
            if(THIS.animateDeath){
                THIS.belong.remove(THIS);
                THIS.animate.stop();
            }
            this.animateIntBuf=0;
            this.x=this.moveArgument.start.x;
            this.y=this.moveArgument.start.y;
        }else{
          //  debugger;
            if(this.moveArgument.end.x>0){
                if(this.x<this.moveargument.end.x){ this.x="this.x+this.changeInfo;" } }else{ if(this.x>this.moveArgument.end.x){
                    this.x=this.x-this.changeInfo;
                }
            }

            if(this.moveArgument.end.y>0){
                if(this.y<this.moveargument.end.y){ this.y="this.y+this.changeInfo;" } }else{ if(this.y>this.moveArgument.end.y){
                    this.y=this.y-this.changeInfo;
                }
            }

            this.animateIntBuf++;
        }
    };
    this.initAnimateInt=function(){

        this.animateInt= Math.abs((this.moveArgument.start.x-this.moveArgument.end.x)/this.changeInfo);
        var buf = Math.abs((this.moveArgument.start.y-this.moveArgument.end.y)/this.changeInfo);
        if(!(this.animateInt-buf>0)){
            this.animateInt=buf;
        }
        this.animateInt=Math.abs(this.animateInt);
    };
    this.changeText();
    this.initAnimateInt();
    this.belong.add(this);
};
HGAME.model=function(Obj){
    HGAME.canvas.call(this);
    extend(this,Obj);
    var THIS = this;
    this.title=new HGAME.canvas();
    this.content=new HGAME.canvas();
    this.btn=new HGAME.canvas();
    this.btn2=new HGAME.canvas();
    this.buffer="normal normal {size}/{line} arial";
    this.initContent=function(Obj){
        Obj=Obj||{};
        var defaultObj={
            txt:["test title"],//title显示文字
            fontSize:"16",//title的字体大小
            lineHeight:"20",//title的行高
            color:"#999999",//title的文字颜色
            bgColor:"#ffffff",//title 背景颜色
            verticalAlign:"middle",
            textAlign:"center" //center 剧中 left剧左 right 剧右
        };
        var txt = this.content.txt;
        var h =Obj.h?Obj.h:150;
        var w = Obj.w?Obj.w:this.w;
        extend(defaultObj,Obj);
        this.content.w=w;
        this.content.h=h;
        txt.clearRect(0,0,w,h);
        txt.beginPath();
        /*绘制背景*/ 
        txt.fillStyle=defaultObj.bgColor;
        txt.fillRect(0,0,w,h);
        /*绘制文字*/
        var startY = (h - defaultObj.txt.length*defaultObj.lineHeight)/2;
        for(var i = 0;i</this.moveargument.end.y){></this.moveargument.end.x){></=30){></=this.bufw){></-this.gz.w></this.starr.length;q++){></0?360+this.angle-90:this.angle-90;>