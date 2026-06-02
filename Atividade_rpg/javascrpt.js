class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
    hero_atacar(alvo, Habilidade) {
        if (this.mana >= Habilidade.custo
            && this.energia >= Habilidade.energia) {
            alvo.hp = alvo.hp - Habilidade.dano;

            if (Habilidade.custo > 0) {
                this.mana -= Habilidade.custo
                this.energia += 50;
            }
            this.energia -= Habilidade.energia;

            console.log(
                `$(this.nome) usou $(Habilidade.nome) em $(alvo.nome)`
            );
            console.log(`$(alvo.nome)ficou com $(alvo.hp)HP`);
        } else {
            console.log("Sem mana ou energia.")
        }
    }
    boss_atacar(alvo) {
        console.log
        if (this.energia >= 100) {
            alvo.hp -= 15;
            this.energia = 0;
        } else {
            this.energia += 50;
        }
    }
}

class Habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id
        this.nome = nome
        this.dano = dano
        this.custo = custo
        this.energia = energia
    }
}

let NightShift = new Personagem("NightShift", "💀 Cinturão dos Mortos", 100, 100, 0);
let DoomStone = new Personagem("DoomStone", "🐍 Descendente de Górgona", 100, 0, 50);
document.getElementById("NightShift").textContent = NightShift.nome;
document.getElementById("titulo-hero").textContent = NightShift.titulo;
document.getElementById("DoomStone").textContent = DoomStone.nome
document.getElementById("titulo-boss").textContent = DoomStone.titulo;

let containerBtn = document.getElementById("controles");
let listaHabilidades = [
    new Habilidade(1, "⚔️ Ataque", 4, 0, 0),
    new Habilidade(2, "🪙 skill", 8, 10, 0),
    new Habilidade(3, "💥 Supremo", 15, 0, 100)
];
listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");//<button>
    btn.innerText = hab.nome;
    btn.classList.add("btn", "btn-primary");
    containerBtn.appendChild(btn);
    btn.onclick = () => {
        NightShift.hero_atacar(DoomStone, hab);
        DoomStone.boss_atacar(NightShift)
        atualizarTela();
    }
});

const atualizarTela = () => {
    document.getElementById("hp-boss").value = DoomStone.hp;
    document.getElementById("hp-hero").value = NightShift.mana;
    document.getElementById("en-hero").value = NightShift.energia;

    document.getElementById("hp-hero").value = NightShift.hp
    document.getElementById("en-boss").value = DoomStone.energia

    if (NightShift.hp <= 0) {
        game_over();
    }
}
async function game_over() {
    const resposta = await fetch('gameover.html');
    const htmlContent = await resposta.text();
    document.getElementById('tela').innerHTML = htmlContent;

}