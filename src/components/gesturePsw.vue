<template>
  <canvas ref='myCanvas'></canvas>
</template>
<script>
export default{
  data(){
    return{
      c:'',
      cPosition:{},
      cxt:'',
      CW:600,
      CH:320,
      Radius:25,
      offsetX:40,
      offsetY:30,
      password:[0,1,2,3,4],
      // successColor:'#627eed', //蓝色
      successColor:'#008000', //绿色
      errorColor:'red',
      innerColor:'',
      // successInnerColor:'#ffffff',
      successInnerColor:'#90EE90', //浅绿色
      defaultInnerColor:'#D3D3D3', //浅灰色
      errorInnerColor:'#ffffff',
      selectColor:'',
      Re:[],
      borderWidth:1,
      pointLine:[],
      pointWidth:8,//圆心的半径大小
      lineWidth:3,//连线的大小
      outerLayerColor:"#D3D3D3" //浅灰色
    }
  },
  mounted(){
    let _this=this;
    this.selectColor=this.successColor;
    this.innerColor=this.defaultInnerColor;
     this.$nextTick(function(){
      _this.init();
      _this.initEvent();
     });
  },
  methods:{
    init(){
      this.initCas();
      this.getPointLocationArr();
      this.draw();
    },
    initCas(){//初始化画布
       this.c=this.$refs.myCanvas;
        this.CW=document.body.offsetWidth;
        this.c.width=this.CW;
        this.c.height=this.CH;
        this.cPosition=this.c.getBoundingClientRect();
        this.cxt=this.c.getContext('2d');
    },
    getPointLocationArr(){//获取九宫格圆心位置信息
      //获取圆点之间的间距
      let diffX=(this.CW-this.offsetX*2-this.Radius*2*3)/2;
      let diffY=(this.CH-this.offsetY*2-this.Radius*2*3)/2;
      for(let row=0;row<3;row++){
        for(let col=0; col<3;col++){
          let point={
            x:this.offsetX+col*diffX+(col*2+1)*this.Radius,
            y:this.offsetY+row*diffY+(row*2+1)*this.Radius
          }
          this.Re.push(point);
        }
      }
    },
    drawPoint(touches,touchPoint){//选中的圆画圆心并连接起来
    let pointLine=this.pointLine;
    this.cxt.beginPath();
      for(let i=0; i<pointLine.length;i++){
        let point=this.Re[pointLine[i]];//根据存储的圆点的下标找到圆点的圆心位置
        //连接选中的点begin
        this.cxt.lineTo(point.x,point.y);
      }
       this.cxt.strokeStyle=this.selectColor;
        this.cxt.lineWidth=this.lineWidth;
        this.cxt.stroke();
        this.cxt.closePath();
        if(touchPoint){
          let lastPoint=this.Re[this.pointLine[this.pointLine.length-1]];
          this.cxt.beginPath();
          this.cxt.moveTo(lastPoint.x,lastPoint.y);
          this.cxt.lineTo(touches.pageX-this.cPosition.left,touches.pageY-this.cPosition.top);
         this.cxt.strokeStyle=this.selectColor;
        this.cxt.lineWidth=this.lineWidth;
        this.cxt.stroke();
        this.cxt.closePath();
        }

    },
    isPointSelect(touchs){//圆点是否被选中
    let Re=this.Re;
      for(let i=0;i<Re.length;i++){
        let currentPonit=Re[i];
        let xdiff=Math.abs(touchs.pageX-currentPonit.x-this.cPosition.left);
         let ydiff=Math.abs(touchs.pageY-currentPonit.y-this.cPosition.top);
         let dir=Math.pow(xdiff*xdiff+ydiff*ydiff,0.5);//当前鼠标的位置与圆心之间的距离两边和的开方
         if(dir<=this.Radius){
           if(this.pointLine.indexOf(i)==-1){
           this.pointLine.push(i);
         }
         break;
      }
      }

    },
    initEvent(){
      let _this=this;
      this.c.addEventListener('touchstart',function(e){
        _this.isPointSelect(e.touches[0]);
      });
      this.c.addEventListener('touchmove',function(e){
         _this.isPointSelect(e.touches[0]);
         //清空画布
         _this.cxt.clearRect(0,0,_this.CW,_this.CH);
         _this.draw(e.touches[0],true);

      });
      this.c.addEventListener('touchend',function(e){
        if(_this.pointLine.length<4){
          alert('密码长度不能小于4！');
          _this.selectColor=_this.errorColor;
          _this.innerColor=_this.errorInnerColor;
        }
        _this.checkIsRight();
         //清空画布
         _this.cxt.clearRect(0,0,_this.CW,_this.CH);
         _this.draw(e.touches[0],false);
        _this.resetCxt(e.touches[0]);
        
      });
    },
    resetCxt(touches){
      let _this=this;
      setTimeout(()=>{
          this.pointLine=[];
          this.selectColor=this.successColor;
          this.innerColor=this.defaultInnerColor;
          this.cxt.clearRect(0,0,_this.CW,_this.CH);
          this.draw(touches,false);
      },3000);
    },
    checkIsRight(){
      if(this.password.toString()!=this.pointLine.toString()){
         this.selectColor=this.errorColor;
        this.innerColor=this.errorInnerColor;
      }else {
        // 若密码输入正确
        this.$emit("checkPsw","pass")
      }
    },
    draw(touches,touchPonit){
      //画九宫格
      if(this.pointLine.length>0)
      this.drawPoint(touches,touchPonit);
      let Re=this.Re;
      for(let i=0; i<Re.length;i++){
        let point=Re[i];
        //画外层蓝色的圆(改成灰色)
        this.cxt.fillStyle=this.outerLayerColor;
        this.cxt.beginPath();
        this.cxt.arc(point.x,point.y,this.Radius,0,2*Math.PI,true);//圆心x坐标，y坐标，圆的半径，从0 画到360，逆时针画图
        this.cxt.fill();
        this.cxt.closePath();
        //画内部白色的圆
        this.cxt.fillStyle=this.innerColor;
        this.cxt.beginPath();
        this.cxt.arc(point.x,point.y,this.Radius-this.borderWidth,0,2*Math.PI,true);
         this.cxt.fill();
        this.cxt.closePath();
        //画选中圆点的圆心
      if(this.pointLine.indexOf(i)!=-1){
        //画选中的点begin
        this.cxt.fillStyle=this.selectColor;
        this.cxt.beginPath();
        this.cxt.arc(point.x,point.y,this.pointWidth,0,2*Math.PI,true);
        this.cxt.fill();
        this.cxt.closePath();
        //画选中的点end
      }

      }

    }

  }
}
</script>