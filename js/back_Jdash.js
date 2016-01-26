diff a/js/Jdash.js b/js/Jdash.js	(rejected hunks)
@@ -170,9 +170,11 @@
                 Left();
                 Door();
                 button();
+                button_int();
                 break;
             case 2 :
             	btr_R=1;
+            	btr_nR=1;
                 var room2 = new Sprite(800, 600);
                 room2.image = game.assets[ROOM2_IMAGE];
                 room2.moveTo(10, 20);
