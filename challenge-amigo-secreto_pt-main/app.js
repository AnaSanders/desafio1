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
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }
    
    let sorteio = {};
    let amigosDisponiveis = [...amigos];
    let amigosParaSortear = [...amigos];
    
    amigosParaSortear.forEach(amigo => {
        let possiveis = amigosDisponiveis.filter(a => a !== amigo);
        
        if (possiveis.length === 0) {
            alert("Não foi possível realizar o sorteio. Tente novamente.");
            return;
        }
        
        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        sorteio[amigo] = sorteado;
        amigosDisponiveis = amigosDisponiveis.filter(a => a !== sorteado);
    });
    
    exibirResultado(sorteio);
}

function exibirResultado(sorteio) {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    for (let [amigo, sorteado] of Object.entries(sorteio)) {
        let li = document.createElement("li");
        li.textContent = `${amigo} → ${sorteado}`;
        resultadoLista.appendChild(li);
    }
}