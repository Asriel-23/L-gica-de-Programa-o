class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
}
class Habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    }
}
let NightShift = new Personagem("NightShift","💀 Cinturão dos Mortos",100,100,0);
let DoomStone = new Personagem("DoomStone","🐍 Descendente de Górgona",100,0,50);
document.getElementById("NightShift").textContent = NightShift.nome;
document.getElementById("titulo-hero").textContent = NightShift.titulo;
document.getElementById("DoomStone").textContent = DoomStone.nome
document.getElementById("titulo-boss").textContent = DoomStone.titulo;

let listaHabilidades = [
    new Habilidade(1, "⚔️ Ataque", 4, 0, 0),
    new Habilidade(2, "🪙 skill", 8, 10, 0),
    new Habilidade(3, "💥 Supremo", 15, 0, 100)
];
listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");//<button>
    btn.innerText = hab.home;
    containerBtn.appendChild(btn);
});