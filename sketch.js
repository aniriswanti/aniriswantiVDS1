function setup(){
    createCanvas(400,200);

    y=100;
    x=100;
    i=0;
    j=0;
}

function draw(){
    background(255,255,255);

    stroke(0);
    line(200,0,200,200);
    var y = 100+5*Math.sin(PI/15*j);
    j+=1
    //topi segitiga
    fill(0,255,254);
    triangle(x+30,y,x-30,y,x,y-95);
    //badan atau kaki
    fill(255,0,0);
    strokeWeight(5);
    stroke(63,255,0);
    ellipse(x,y+50,95,77);
    //leher
    ellipse(x,y+20,50,20);
    //kepala
    ellipse(100,y-20,75,75);
    //mata
    fill(0);
    stroke(0);
    ellipse(85,y-20,15,5);
    ellipse(115,y-20,15,5);
    //mulut
    fill(255);
    strokeWeight(3);
    stroke(0,255,254);
    ellipse(x,y,20,12);
    //hidung
    stroke(0);
    line(x,y-15,x+7,y-10);
    //kursor lingkaran sebelah kanan
    fill(0);
    stroke(mouseX, mouseY,10,10);
    //lingkaran sebelah kanan 
    fill(255,255,0);
    arc(300,100,100,100,mouseX,mouseY);
}