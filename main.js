var canvas=new fabric.Canvas("myCanvas");
 player_x=10;
 player_y=10;

 block_w=30;
 block_h=30;

 player_img="";
 block_img="";

 function showgroot(){
     fabric.Image.fromURL("https://static.wikia.nocookie.net/p__/images/f/f6/GOTG2_Baby_Groot.png/revision/latest?cb=20200629020713&path-prefix=protagonist",function(Img){
         player_img=Img;

         player_img.scaleToWidth(150);
         player_img.scaleToHeight(140);
         player_img.set({
             top:player_y,
             left:player_x,
         });
         canvas.add(player_img);
     });
 }

 function showblock(getimg){
    fabric.Image.fromURL(getimg,function(Img){
        block_img=Img;

        block_img.scaleToWidth(block_w);
        block_img.scaleToHeight(block_h);
        block_img.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_img);
    });
}
window.addEventListener("keydown",Key_down);
function Key_down(e){
    key_code=e.keyCode;
    console.log(key_code);
    
    if(key_code=="70"){
        console.log("a");
        showblock("spiderman_face.png");    
    }

    if(key_code=="66"){
        console.log("b");
        showblock("ironman_body.png");
    }

    if(key_code=="76"){
        console.log("c");
        showblock("ironman_left_hand.png");
    }

    if(key_code=="82"){
        console.log("d");
        showblock("thor_right_hand.png");
    }

    if(key_code=="72"){
        console.log("e");
        showblock("hulk_legs.png");
    }

    if(key_code=="80" && e.shiftKey==true){
        console.log("plus");
        block_h=block_h+10;
        block_w=block_w+10;
        document.getElementById("Width").innerHTML=block_w;
        document.getElementById("Height").innerHTML=block_h;
    }

    if(key_code=="77" && e.shiftKey==true){
        console.log("minus");
        block_h=block_h-10;
        block_w=block_w-10;
        document.getElementById("Width").innerHTML=block_w;
        document.getElementById("Height").innerHTML=block_h;
    }

    if(key_code=="38"){
        console.log("up");
        up();
    }

    if(key_code=="40"){
        console.log("down");
        down();
    }

    if(key_code=="37"){
        console.log("left");
        left();
    }

    if(key_code=="39"){
       console.log("right");
       right();
    }
}