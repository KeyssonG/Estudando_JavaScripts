let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;

let raio = diametro / 2;

let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

function setup() {
  createCanvas(600, 400);
}

function draw(){
  background(0);
  mostraBolinha();
  xBolinha = xBolinha + velocidadexBolinha; 
  yBolinha = yBolinha + velocidadeyBolinha;
  
  if(xBolinha + raio> width || xBolinha - raio< 0){
    velocidadexBolinha *= -1;
  }
    

  if(yBolinha +raio> height || yBolinha -raio< 0){
    velocidadeyBolinha *= -1;
  }
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}