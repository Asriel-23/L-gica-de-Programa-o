// Atividade 1: O Filtro de Hashtags
const tags = ["#vida", "#javascript", "#aula", "#js", "#café"]    
const tagsFiltradas = tags.filter (tag => tags.includes ("#js"));
console.log(tagsFiltradas);

// Atividade 2: Formatador de Nomes de Usuário
 const usuarios = ["aLeX", "mArIa", "jOãO", "bIa"];
 const usuariosCorrigidos = usuarios.map(n => n.toUpperCase());
 console.log(usuariosCorrigidos);

 // Atividade 3: Atividade 3: Sistema de Busca de Convidados
 const convidados = ["Ana", "Al", "Alberto", "Bia", "Amanda", "Ab"];
 const convidadosVip = convidados.filter(c => c.startsWith("A") && (c.length > 2)); 
 console.log(convidadosVip);

 // Atividade 4: O Corretor de Preços (Matemática)
 const precos = [50, 100, 150, 200];
 const precosComDesconto = precos.map(preco => preco - 10);
 console.log(precosComDesconto);

