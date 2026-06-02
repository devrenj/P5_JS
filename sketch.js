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

function setup() {
    createCanvas(SCREEN_X, SCREEN_Y);
    colorMode(HSB);
    noStroke();
}

function draw() {
      fill(100, 220, 255);
    ellipse(personagem_posX, personagem_posY, personagem_tamanho, personagem_tamanho);

    fill(30, 100, 100);
    rect(0, PLATAFORMA_POSICAO, SCREEN_X, PLATAFORMA_ALTURA);
}