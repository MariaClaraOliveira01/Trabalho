// Altera o texto do parágrafo inincial 
function alterarTexto() {
document.getElementById("text").innerText = "Ao clicar, eu mudei!!";
}

// Adiciona um novo parágrafo ao final do corpo
function adicionarParagrafo() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Depois que voçê clicou, eu apareci 😊 !!";
    document.body.appendChild(novoParagrafo);
}

// Remove o último parágrafo, se houver mais de um
function removerParagrafo() {
    const paragrafos = document.querySelectorA11("p");
    if (paragrafos.lenght > 1) {
        paragrafos[paragrafos.lenght - 1].remove();
    } else {
        alert("Não há mais parágrafo para remover 😢 !!");
    }
}

//Muda a cor de funfo da página para uma cor aleatória
function mudarCorFundo (){
    const corAleatoria =  '#${Math.floor(Math.random() = 16777215).toString(16)}';
    document.body.style.backgroundColor = corAleatoria;
}

//Muda a cor do texto do parágrafo inicial par auma cor aleatória
function mudarCorTexto() {
    const cores = ["#FF5733", "#33FF57", "#3357FF", "#FF3"]
}