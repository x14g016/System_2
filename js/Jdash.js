/*
 * おまじない
 */
enchant();

/*
 * 定数
 */
//パラメータ
var SCREEN_WIDTH = 800; //横幅
var SCREEN_HEIGHT =600; //縦幅

// 画像
//部屋
var ROOM1_IMAGE = "./images/room.png";
var ROOM2_IMAGE = "./images/room2.png";
var ROOM3_IMAGE = "./images/room3.png";
var ROOM4_IMAGE = "./images/room4.png";

//その他
var door_image = "./images/door.png";
var door2_image = "./images/door2.png";
var goal_image = "./images/goal.png";
var box1_image ="./images/box1.png"; 
var box2_image ="./images/box2.png";

//ボタン


var left_image ="./images/left.png";
var right_image="./images/right.png";
var input_image = "./images/input.png";

//アセットリスト
var ASSETS = [ ROOM1_IMAGE, ROOM2_IMAGE, ROOM3_IMAGE, ROOM4_IMAGE, ];


/*
 * グローバル変数
 */
var game = null;
var input_I = 0;


//ボタンに必要な変数
var btr_SR;
var btr_Ei=0;
var btr_Di=0;
var btr_Ci=0;
var btr_Bi=0;
var btr_Ai=0;
var btr_R =1;
var btr_A =1;
var btnStr =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"];

var buttonA = new Button(btnStr[btr_Ai],"dark",20,25);
var buttonB = new Button(btnStr[btr_Bi],"dark",20,25);
var buttonC = new Button(btnStr[btr_Ci],"dark",20,25);
var buttonD = new Button(btnStr[btr_Di],"dark",20,25);
var buttonE = new Button(btnStr[btr_Ei],"dark",20,25);
var buttonSwi = new Button("","light",5,5);
/*
 * 汎用処理
 */
// ランダム値生成
var randfloat = function(min, max) {
    return Math.random()*(max-min)+min;
};


/*
 * メイン処理
 */
window.onload = function() {
    // ゲームオブジェクトの生成
    game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);
    var isTouch = false;    // タッチフラグ(タッチ中のみ true にする)
    var touchX  = null;     // タッチX座標
    var touchY  = null;     // タッチY座標
 	game.fps = 24;
     

    
   	game.preload(ASSETS);
    //矢印
    game.preload("http://jsrun.it/assets/Y/v/p/P/YvpP5.gif");
    game.preload("http://jsrun.it/assets/Q/E/j/P/QEjPU.gif");
    //扉
    game.preload(door_image);
    game.preload(door2_image);
    //外
    game.preload(goal_image);
    //鍵
    game.preload("http://jsrun.it/assets/6/K/5/c/6K5c4.png");
    //箱
    game.preload(box1_image);
    game.preload(box2_image);
    //矢印
    game.preload(left_image);
    game.preload(right_image);
    
    //掲示板
    game.preload(input_image);

    // ゲーム開始時の処理
    game.onload = function() {
        
        
        var scene = game.rootScene;
        scene.backgroundColor = "black";
        
        var scene = game.rootScene;
        scene.backgroundColor = "black";
        
        var scene = game.rootScene;
        scene.backgroundColor = "black";
        
        var scene = game.rootScene;
        scene.backgroundColor = "black";
        
        //配列
        var item = Array();
        
        var i = 0;
        var e = 3;
        
        var view = 1;
        Room(view);
        
         //部屋の絵表示
        function Room(view){
        
        switch(view){
            case 1 :
    			scene.addChild(buttonSwi);
            	btr_R=1;
            	btr_SR=0;
                var room1 = new Sprite(800, 600);
                room1.image = game.assets[ROOM1_IMAGE];
                room1.moveTo(10, 20);
                scene.addChild(room1);
                Right();
                Left();
                Door();
                button();
                break;
            case 2 :
            	btr_R=1;
                var room2 = new Sprite(800, 600);
                room2.image = game.assets[ROOM2_IMAGE];
                room2.moveTo(10, 20);
                scene.addChild(room2);
                Right();
                Left();
				button();
                break;
            case 3 :
            	btr_R=1;
                var room3 = new Sprite(800, 600);
                room3.image = game.assets[ROOM3_IMAGE];
                room3.moveTo(10, 20);
                scene.addChild(room3);
                Right();
                Left();
                button();
                break;
            case 4 :
            	btr_R=0;
                var room4 = new Sprite(800, 600);
                room4.image = game.assets[ROOM4_IMAGE];
                room4.moveTo(10, 20);
                scene.addChild(room4);
                Right();
                Left();
                box();
                input();
                Key();
                button();
                break;
            }
            
            //右
            function Right(){
                var right = new Sprite(45, 45);
                    right.image = game.assets[right_image];
                    right.moveTo(740, 225);
                    scene.addChild(right);
        
                right.ontouchstart = function(){
                     switch(view){
                            case 1 :
                                Room(2);
                                break;
                            case 2 :
                                Room(3);
                                break;
                            case 3 :
                                Room(4);
                                break;
                            case 4 :
                                Room(1);
                               break;
                            }
                        };
                }
        
        
             //左
             function Left(){
                 var left = new Sprite(45, 45);
                        left.image = game.assets[left_image];
                        left.moveTo(20, 225);
                        scene.addChild(left);
                    
                left.ontouchstart = function(){
                    switch(view){
                            case 1 :
                                Room(4);
                                break;
                            case 2 :
                                Room(1);
                                break;
                            case 3 :
                                Room(2);
                                break;
                            case 4 :
                                Room(3);
                               break;
                            }
                        };
                    }
                   
                   

             		
            
            return;
            
                    
            
            function Key(){
                if(e == 3 ){
                 var　key = new Sprite(25, 35);
                 key.image = game.assets["http://jsrun.it/assets/6/K/5/c/6K5c4.png"];
                 key.moveTo(300, 400);
                 scene.addChild(key);
                 
                    
                    key.ontouchstart = function(){
                        key.moveTo(30, 550); 
                        e = 0;
                    };
                }
            }
            function box(){
            		var box = new Sprite(200,222);
            		box.image = game.assets[box1_image];
            		if(i==0){
            			box.moveTo(200, 400);
            		}else if(i==1){
           				box.moveTo(500,400);
            		}
            		scene.addChild(box);
            		box.ontouchstart = function(){
            			if(i==0){
            				box.moveTo(500,400);
            				i=1;
            			}else{
            				i=0;
            				box.moveTo(200,400);
				 			
            			}
            				
            		}
          
           }
                
            
                function Door(){
                 var door = new Sprite(200, 300);
                 door.image = game.assets[door_image];
                 door.moveTo(200, 180);
                 scene.addChild(door);
                 
                
                    
                    if (e === 0){
                    door.ontouchstart = function(){
                        var door2 = new Sprite(200, 300);
                        door2.image = game.assets[door2_image];
                        door2.moveTo(200, 180);
                        scene.addChild(door2);
                        var miti = new Sprite(200, 300);
                        miti.image = game.assets[goal_image];
                        miti.moveTo(265, 163);
			window.location.href = 'https://www.google.co.jp/';
                        scene.addChild(miti);
                 			   }
                   			 }
                   			}
				function input(){
					
					var input = new Sprite(300,150);
					input.image = game.assets[input_image];
					input.moveTo(75,100);
					scene.addChild(input);
				}
					
				 
				 
				 	//ボタン
				 	function button(){
				 	if(btr_SR==0){
				 		buttonSwi.moveTo(80,80);
				 		btr_SR=1;
				 		}else{
				 		buttonSwi.moveTo(-80,-80);
				 	}
				 	if(btr_R==0&&btr_A==1){
				 		scene.addChild(buttonA);
				     	scene.addChild(buttonB);
				        scene.addChild(buttonC);
				        scene.addChild(buttonD);
				        scene.addChild(buttonE);
				       	buttonE.moveTo(300,200);
				       	buttonD.moveTo(250,200);
				       	buttonC.moveTo(200,200);
				        buttonB.moveTo(150,200);
				        buttonA.moveTo(100,200);
				        btr_A=0;
				 	}else if(btr_R==0){
				 		buttonE.moveTo(300,200);
				 		buttonD.moveTo(250,200);
				        buttonC.moveTo(200,200);
				        buttonB.moveTo(150,200);
				        buttonA.moveTo(100,200);
               		}else{
               			buttonE.moveTo(-200,-200);
               			buttonD.moveTo(-250,-200);
						buttonC.moveTo(-300,-200);
				        buttonB.moveTo(-350,-200);
				        buttonA.moveTo(-400,-200);
               			btr_R=0;
               		}
               	}
							
						
                 
            }//room
            		//button識別変数
            			buttonA.ind=1;
						buttonB.ind=2;
						buttonC.ind=3;
						buttonD.ind=4;
						buttonE.ind=5;
		            //buttonイベント
					buttonA.ontouchstart = buttonOntuch;
               	 	buttonB.ontouchstart = buttonOntuch;
         		    buttonC.ontouchstart = buttonOntuch;
         		    buttonD.ontouchstart = buttonOntuch;
         		    buttonE.ontouchstart = buttonOntuch;
      			   		function buttonOntuch(){
							switch(this.ind){
							case 1 :
								btr_Ai=checkInd(btr_Ai);
								buttonA.text=btnStr[btr_Ai];
								break;
							case 2 :
								btr_Bi=checkInd(btr_Bi);
								buttonB.text=btnStr[btr_Bi];
								break;		
							case 3 :
								btr_Ci=checkInd(btr_Ci);
								buttonC.text=btnStr[btr_Ci];
								break;
							case 4 :
								btr_Di=checkInd(btr_Di);
								buttonD.text=btnStr[btr_Di];
								break;
							case 5 :
								btr_Ei=checkInd(btr_Ei);
								buttonE.text=btnStr[btr_Ei];
								break;
							}
							
							if(btnStr[btr_Ai]=="A" && btnStr[btr_Bi]=="B" && btnStr[btr_Ci]=="C" && btnStr[btr_Di]=="D" && btnStr[btr_Ei]=="E"){
								alert("正解！");
							}
							
							

					    }
						    //ボタン添え字管理
					function checkInd(btr){
						btr++;
						
						if(btr==25){
						    btr=0;
						 
						}
						    return btr;
						}
					
           
 
    };
    
    game.start();
};