// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    amigos.push(nombre);
    console.log(amigos);
    mostrarAmigos();
    document.getElementById("amigo").value = "";
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo como texto del <li>
        listaAmigos.appendChild(li); // Agregar el <li> al <ul>
    });
}

function sortearAmigo() {
    let sorteoAmigoAleatorio = Math.floor(Math.random() * amigos.length);
    let listaAmigos = document.getElementById("listaAmigos");
    let resultado = document.getElementById("resultado");
    listaAmigos.innerHTML = "";

    console.log(sorteoAmigoAleatorio);
    resultado.textContent = `El amigo secreto sorteado es: ${amigos[sorteoAmigoAleatorio]}`;
}