let img_0,img_a,img_b,img_c,img_d,img_e,img_f;

function preload(){
    img_0 = loadImage('img/0.png')
    img_a = loadImage('img/a.png')
    img_b = loadImage('img/b.png')
    img_c = loadImage('img/c.png')
    img_d = loadImage('img/d.png')
    img_e = loadImage('img/e.png')
    img_f = loadImage('img/f.png')
}

let boxArray=[];

let img_phase;

  const zoom=0.8;
  const startX=309,startY=36;
  const gapX=663/5;
  const gapY=663/5;

  function setup() {
    createCanvas(1280,720);

    //boxArray 初期化
    for(let t=0;t<5;t++){
        boxArray.push([false,false,false,false,false]);
    }
  }
  
  function draw() {
    background(225);
    if(img_phase){
        image(img_phase,0,0,1280,720)
    }

    noStroke();
    fill(0);
    stroke(0);
    strokeWeight(2);

    for(let i=0;i<5;i++){
        for(let j=0;j<5;j++){
            if(boxArray[i][j]){
                rect(startX+gapX*i,startY+gapY*j,gapX,gapY);
            }
        }
    }
  }

//クリック時
function  mouseClicked(){
    let x=mouseX;
    let y=mouseY;
    if(startX<x && x<(startX+gapX*5) && startY<y && y< (startY+gapY*5) ){
        let row = Math.floor((x-startX)/gapX);
        let col = Math.floor((y-startY)/gapY);
        boxArray[row][col] = !boxArray[row][col];
    }
}

function keyTyped(){
    if(key === "1"){
        img_phase=img_a;
    }else if(key === "2"){
        img_phase=img_b;
    }else if(key === "3"){
        img_phase=img_c;
    }else if(key === "4"){
        img_phase=img_d;
    }else if(key === "5"){
        img_phase=img_e;
    }else if(key === "6"){
        img_phase=img_f;
    }else if(key === " "){
            let fs = fullscreen();
            fullscreen(!fs);
    }
    console.log(key);
}