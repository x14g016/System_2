
// おまじない

	enchant();

/*
 * 定数
 */
//パラメータ
	var SCREEN_WIDTH =800; //横幅
	var SCREEN_HEIGHT =600; //縦幅

// 画像
	//部屋
	var ROOM1_IMAGE = "./images/room.png";
	var ROOM2_IMAGE = "./images/room2.png";
	var ROOM3_IMAGE = "./images/room3.png";
	var ROOM4_IMAGE = "./images/room4.png";
	var ROOM5_IMAGE = "./images/room5.png"; 
	var ROOM6_IMAGE = "./images/room6.png";
	
	//鍵
	var key_image="./images/key.png";
	
	//扉_image
	var door_image = "./images/door.png";
	var door2_image = "./images/door2.png";
	var goal_image = "./images/goal.png";

	//箱_image
	var box1_image ="./images/box1.png";

	//ソファ_image
	var sofa_image = "./images/sofa.png"
	var cushion_image = "./images/cushion.png";

	//ボタン_image
	var left_image ="./images/left.png";
	var right_image="./images/right.png";
	var inputOn_image = "./images/inputON.png";
	var inputOff_image= "./images/inputOFF.png";

	var swiOn_image = "./images/switchON.png";
	var swiOff_image = "./images/switchOFF.png";


	//アセットリスト
	var ASSETS = [ ROOM1_IMAGE, ROOM2_IMAGE, ROOM3_IMAGE, ROOM4_IMAGE, ROOM5_IMAGE,ROOM6_IMAGE];


	/*
	 * グローバル変数
	 */
	var game = null;
	var input_I = 0;
	var swi_i = 0;


	//ボタン文字の添え字
	var btr_Ei=0;
	var btr_Di=0;
	var btr_Ci=0;
	var btr_Bi=0;
	var btr_Ai=0;

	//ボタンの部屋flag
	var btr_R =1;

	//ボタン生成flag
	var btr_A =1;
	var btnStr =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","Z"];

	//掲示板flag
	var input_flag = 0;
	
	//ボタン生成
	var buttonA = new Button(btnStr[btr_Ai],"dark",20,25);
	var buttonB = new Button(btnStr[btr_Bi],"dark",20,25);
	var buttonC = new Button(btnStr[btr_Ci],"dark",20,25);
	var buttonD = new Button(btnStr[btr_Di],"dark",20,25);
	var buttonE = new Button(btnStr[btr_Ei],"dark",20,25);
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
    //扉
    game.preload(door_image,door2_image);
    //外
    game.preload(goal_image);
    //鍵
    game.preload(key_image);
    //箱
    game.preload(box1_image);
    //矢印
    game.preload(left_image,right_image);

    //掲示板
    game.preload(inputOn_image,inputOff_image);
    
    //ソファ
    game.preload(cushion_image,sofa_image);
    
    //スイッチ
    game.preload(swiOff_image,swiOn_image);

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

        var box_i = 0;
        var e = 3;
        var cushion_i = 0;

        var view = 1;
        Room(view);

         //部屋の絵表示
        function Room(view){

        switch(view){
            case 1 :
            	btr_SR=0;
                var room1 = new Sprite(800, 600);
                room1.image = game.assets[ROOM1_IMAGE];
                room1.moveTo(10, 20);
                scene.addChild(room1);
                Right();
                Left();
                Door();
                button(1);
                break;
            case 2 :
                var room2 = new Sprite(800, 600);
                room2.image = game.assets[ROOM2_IMAGE];
                room2.moveTo(10, 20);
                scene.addChild(room2);
                Right();
                Left();
				button(1);
				b_switch();
                break;
            case 3 :
                var room3 = new Sprite(800, 600);
                room3.image = game.assets[ROOM3_IMAGE];
                room3.moveTo(10, 20);
                scene.addChild(room3);
                Right();
                Left();
                button(1);
                sofa();
                break;
            case 4 :
                var room4 = new Sprite(800, 600);
                room4.image = game.assets[ROOM4_IMAGE];
                room4.moveTo(10, 20);
                scene.addChild(room4);
                Right();
                Left();
                box();
                input();
                Key();
                button(0);
                break;
            case 5 :
            	btr_R=1;
                var room5 = new Sprite(800, 600);
                room5.image = game.assets[ROOM5_IMAGE];
                room5.moveTo(10, 20);
                scene.addChild(room5);

                Right();
                Left();
             //   Key2();
                button();
                break;
            case 6 :
               	btr_R=1;
                var room6 = new Sprite(800, 600);
                room6.image = game.assets[ROOM6_IMAGE];
                room6.moveTo(10, 20);
                scene.addChild(room6);
                Right();
                Left();
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
                                Room(5);
                               break;
                             case 5 :
                                Room(6);
                               break;
                             case 6 :
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
                                Room(6);
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
                            case 5 :
                            	Room(4);
                               break;
                            case 6 :
                            	Room(5);
                            	break;
                            }
                        };
                    }
                   




            return;



            function Key(){
                if(e == 3 ){
                 var key = new Sprite(25, 35);
                 addObj(key,300,400,key_image);
                    key.ontouchstart = function(){
                        key.moveTo(30, 550);
                        e = 0;
                    };
                }
            }
            
            //箱
            function box(){
            		var box = new Sprite(200,222);
            		box.image = game.assets[box1_image];
            		if(box_i==0){
            			addObj(box,200,400,box1_image);
            		}else if(box_i==1){
            			addObj(box,500,400,box1_image);
            		}
            		box.ontouchstart = function(){
            			if(box_i==0){
            				box.moveTo(500,400);
            				box_i=1;
            			}else{
            				box_i=0;
            				box.moveTo(200,400);

            			}

            		}

           }

           	//ソファ
            	function sofa(){
            		var sofa = new Sprite(400,186);
            		addObj(sofa,320,350,sofa_image);
            		
            //クッション
            		var cushion = new Sprite(150,112);
            		cushion.image = game.assets[cushion_image];
            		if(cushion_i==0){
            			cushion.moveTo(350,370);
            		}else if(cushion_i==1){
            			cushion.moveTo(500,395);
            			}
            		scene.addChild(cushion);
            		
            		cushion.ontouchstart= function(){
            			if(cushion_i==0){
            				cushion.moveTo(500,370);
            				cushion_i=1;
            			} else {
            				cushion.moveTo(350,370);
            				cushion_i=0;
            			}
            				
            		}

            	}
            	
            	//スイッチ
            	function b_switch(){
            		var b_switch = new Sprite(80,84);
            		//画面遷移時のON/OFF切り替え
            		if(swi_i==0){
            			addObj(b_switch,200,180,swiOff_image);
            		}else{
            			addObj(b_switch,200,180,swiOn_image);
            		}
            		b_switch.ontouchstart = function(){
            			if(swi_i==0){
            				input_flag=1;
            				swi_i=1;
            				b_switch.image = game.assets[swiOn_image];
            			}else{
            				input_flag=0;
	            			swi_i=0;
	                  		b_switch.image = game.assets[swiOff_image];
            				}
            			}
           		 }

            	//扉
                function Door(){
                 var door = new Sprite(200, 300);
                 addObj(door,200,180,door_image);

                    if (e === 0){
                    door.ontouchstart = function(){
                        var door2 = new Sprite(200, 300);
                        addObj(door2,200,180,door2_image);
                        var miti = new Sprite(200, 300);
                        addObj(miti,265,163,goal_image);
					    	   }
                   			 }
                   			}
				function input(){
					var input = new Sprite(300,150);
					if(input_flag==1){
						addObj(input,75,100,inputOn_image);
					}else{
						addObj(input,75,100,inputOff_image);
					}
				}



				 	//ボタン
				 	function button(A){
						addButton(buttonA,300,200,A);
				 		addButton(buttonB,250,200,A);
				 		addButton(buttonC,200,200,A);
				 		addButton(buttonD,150,200,A);
				 		addButton(buttonE,100,200,A);
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
      		
      			//buttonクリック処理	
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

							if(btnStr[btr_Ai]=="A" && btnStr[btr_Bi]=="H" && btnStr[btr_Ci]=="C" && btnStr[btr_Di]=="H" && btnStr[btr_Ei]=="E"){
								alert("正解！");
							}



					    }
					//オブジェクト追加  addObj(オブジェクトインスタンス,x座標,y座標,画像)
					function addObj(ins,x,y,image){
						if(image!=false){
							ins.image =game.assets[image];
						}
							ins.moveTo(x,y);
							scene.addChild(ins);
						
					}
					    
						    //ボタン添え字管理
					function checkInd(btr){
						btr++;

						if(btr==25){
						    btr=0;

						}
						    return btr;
						}

				//  ボタン追加 addButton(ボタンインスタンス,x座標,y座標,画面追加[0]/否追加[1])
					function addButton(button,x,y,flag){
						if(flag==0&&btr_A<6){
				 			scene.addChild(button);
			      		button.moveTo(x,y);
				        	btr_A++;
				 		}else if(flag==0){
				 			button.moveTo(x,y);
	             		}else{
	        	   			button.moveTo(-(x),-(y));
	               		}
    		    }



    };

    game.start();
};