const SCREEN_X = 800;
const SCREEN_Y = 600;
let hueOffset = 0;

let velocityY = 0;
let gravity = 1;
let movimento = 5;

let personagem_posX = SCREEN_X / 2;
let personagem_posY = 0;
let personagem_tamanho = 50;
let personagem_colisao = personagem_tamanho / 2;

const PLATAFORMA_ALTURA = 40;
const PLATAFORMA_POSICAO = SCREEN_Y - PLATAFORMA_ALTURA;

// Debug
let modoDebug = false;
let debugMostrarPosicao = true;
let debugMostrarTeclaPressionada = true;

function setup() {
  createCanvas(SCREEN_X, SCREEN_Y);
  colorMode(HSB);
  noStroke();
}

function draw() {
  desenharFundoGradiente();
  fill(100, 220, 255);
  ellipse(personagem_posX, personagem_posY, personagem_tamanho, personagem_tamanho);

  fill(30, 100, 100);
  rect(0, PLATAFORMA_POSICAO, SCREEN_X, PLATAFORMA_ALTURA);

  function desenharFundoGradiente() {
    let stripeCount = 12;
    let stripeHeight = height / stripeCount;

    for (let y = 0; y < height; y += stripeHeight) {
      let fadeAmount = y / height;
      
      let hueValue = (fadeAmount * 120 + hueOffset) % 360; 
      
      let currentColor = color(hueValue, 100, 70);
      fill(currentColor);
      rect(0, y, width, stripeHeight);
    }
    hueOffset += 1; 
  }
  // Ferramentas de Debug
  // Nota: Mudar variáveis no topo do  documento
    
  if (modoDebug) {
    // Mostrar Posição Atual
    if (debugMostrarPosicao) {
      let position = `X:${int(personagem_posX)}, Y:${int(personagem_posY)}`;
      fill(225, 225, 255)
      let mensagem = text(position, personagem_posX, personagem_posY - 35); 
    }
    // Mostrar qual tecla foi pressionada
    if (debugMostrarTeclaPressionada) {
      textSize(20);
      text(key, 20, 30);
    }
  }

}