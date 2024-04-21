let xBolinha =300;
let yBolinha =200;
let dBolinha =20;
let raio = dBolinha/2;

let velocidadeXB =5;
let velocidadeYB =5;

let xRaquete =5;
let yRaquete =150;
let cRaquete =10;
let aRaquete =90;

let xRaqueteOP = 585;
let yRaqueteOP = 150;
let velocidadeYOP;

let meuP = 0;
let opP = 0;

let colidiu = false;

let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}



function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraB();
  movimentaB();
  colisaoB();
  mostraRaquete();
  movimentaR();
  colisaoR();
  mostraRaqueteOP();
  movimentaRaqueteOP();
  colisaoRaqueteOP();
  incluiPlacar();
  marcaP();
  
function mostraB() {
  
  circle(xBolinha,yBolinha,dBolinha);
}

function movimentaB() {
  
  xBolinha += velocidadeXB;
  yBolinha += velocidadeYB;
}

function colisaoB() {
  
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    
    velocidadeXB *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
    
    velocidadeYB *= -1;
  }
}
}

function mostraRaquete() {
  
  rect(xRaquete,yRaquete, cRaquete, aRaquete);
  
}

function mostraRaqueteOP() {
  
  rect(xRaqueteOP,yRaqueteOP, cRaquete, aRaquete);
  
}

function movimentaR() {
  
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function colisaoR () {
  
  if(xBolinha - raio < xRaquete + cRaquete && yBolinha - raio < yRaquete + aRaquete && yBolinha + raio > yRaquete) {
    velocidadeXB *= -1;
    raquetada.play();
  }
}

function colisaoRaqueteOP() {
    colidiu = collideRectCircle(xRaqueteOP, yRaqueteOP, cRaquete, aRaquete, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXB *= -1;
      raquetada.play();
    }
}

function movimentaRaqueteOP() {
  if(keyIsDown(87)) {
    yRaqueteOP -= 10;
  }
  
  if(keyIsDown(83)) {
    yRaqueteOP += 10;
  }
}

function incluiPlacar() {
  fill(255)
  text(meuP,278,26)
  text(opP,321,26)
}

function marcaP() {
  
  if(xBolinha > 590) {
    meuP += 1;
    ponto.play();
  }
  if(xBolinha < 10) {
    opP += 1;
    ponto.play();
  }
}