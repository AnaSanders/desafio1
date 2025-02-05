let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector('input');
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.classList.add("remove-button");
        botaoRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para realizar o sorteio.");
        return;
    }
    
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirResultado(sorteado);
}

function exibirResultado(sorteado) {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    let li = document.createElement("li");
    li.textContent = `O amigo sorteado é: ${sorteado}`;
    resultadoLista.appendChild(li);
}