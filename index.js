const exibir =() =>{
    const n = (document.getElementById("num").value);
    const resultado = document.getElementById("resultado");
    const error = document.getElementById("error");

    // Limpa o conteúdo anterior de erro e resultado
    error.innerHTML = "";
    resultado.innerHTML = "";

    if(n > 0){
        let tabuada = ""

        for(let i = 0; i<=10; i++){
            tabuada = tabuada + `${n} x ${i} = ${n * i}<br>`;
            resultado.innerHTML = tabuada;
            resultado.classList.remove('main');
            resultado.classList.add('extend');
        }
        apagar();
    }else if(n == ""){
        const p = document.createElement("p");
        p.innerHTML = "Digite um número!";
        p.classList.add("error");
        error.appendChild(p);
    }
    else{
        const p = document.createElement("p");
        p.innerHTML = "Números negativos não permitidos!";
        p.classList.add("error");
        error.appendChild(p);
    }
    
}
const apagar = () =>{
    const input = document.getElementById("num").value = ""
}
const limpar = () =>{
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa o conteúdo da tabuada
    resultado.classList.remove('extend'); // Remove a classe estendida, se adicionada
    document.getElementById("error").innerHTML = ""; // Limpa as mensagens de erro
}