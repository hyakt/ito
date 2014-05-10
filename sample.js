var canvas = document.getElementById("pb");
var ctx = canvas.getContext("2d");

var frame = 0;                  // 全体のフレームカウント
var JIBUN = {x:250,y:450};          // 自分
var BALL = {x:250,y:400,dx:-1,height:300};  // ボール
var PIN = {x:250,y:200};            // ピン
var point = 0;                  //得点
var crash ={x:300,y:300};           //ボールと自分の間
var get    ={x:300,y:300};          //ボールとピンの間
var sound = new Audio("http://jsrun.it/assets/j/4/v/y/j4vyg.wav");      //衝撃音

//マウスの位置を取得
canvas.onmousemove = mouseMoveListener;
function mouseMoveListener(e){
    var rect = e.target.getBoundingClientRect();
    JIBUN.x = e.clientX - rect.left;            
//  JIBUN.y= e.clientY - rect.top;          
}

function start(){
//animeを50ミリ秒毎起動
setInterval(anime,50);                      
sound.play();
}
    
//アニメ関数
function anime(){                           
    frame++;
    
    // 背景クリア
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = "lightgreen";               
    ctx.fillRect(0,0,500,500);
    
    //ボール描画
    ctx.globalAlpha = 1;
    ctx.fillStyle = "white";    
    ctx.beginPath();            
    ctx.arc(BALL.x-10,BALL.y-10,20,0,2*Math.PI,true);   
    ctx.fill();

    //自分描画
    ctx.fillStyle = "orange";                   
    ctx.fillRect(JIBUN.x-50,JIBUN.y-10,100,20);
    
    //ピン描画
    ctx.fillStyle = "gray"; 
    ctx.beginPath();    
    ctx.arc(PIN.x-10,PIN.y-10,20,0,2*Math.PI,true); 
    ctx.fill();
    
    //文字描画
    ctx.fillStyle = "white";
    ctx.font = "20px 'arial' "; 
    ctx.fillText("得点:" + point,0,450);
    
    //ボール移動
    BALL.x = BALL.x + BALL.dx;
    BALL.y = Math.floor(450-Math.abs(Math.sin(frame/36))*BALL.height);
    
    // ボール移動・壁処理    
    if((BALL.x > 490)||(BALL.x <  10))  BALL.dx = -BALL.dx;
    
    //自分とボールの処理
    crash.x = BALL.x - JIBUN.x;
    crash.y = BALL.y - JIBUN.y;    
    if(Math.abs(crash.y)<5){
    if (Math.abs(crash.x) < 50){
        BALL.dx = BALL.dx + crash.x/10;
        if(BALL.dx>5)BALL.dx/=2;
        BALL.height=300;
        sound.play();
    }
    BALL.height-=50;if(BALL.height<50)BALL.height=50;
    }

    //ボールとピンの処理
    get.x = BALL.x - PIN.x;
    get.y = BALL.y - PIN.y;
    if ((Math.abs(get.x)<30) && (Math.abs(get.y) < 30)){
    sound.play();
    point++;
    BALL.dx = -BALL.dx;
    }
}