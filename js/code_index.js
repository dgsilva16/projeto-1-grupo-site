/* PEGAR A QUANTIDADE DE ITENS NO CARRINHO */
quantidade_carrinho = Number(localStorage.getItem("quantidade_carrinho"))

/* CHECAR QUANTOS ITENS EXISTEM NO CARRINHO (na inicialização da página) */
function checar_quantidade_carrinho() {
    if (quantidade_carrinho >= 0) {
        document.getElementById("carrinho").src = "./img/contador_carrinho_" + quantidade_carrinho + ".png";
    }
    else {
        localStorage.setItem("quantidade_carrinho", 0)
        quantidade_carrinho = Number(localStorage.getItem("quantidade_carrinho"))
        img(quantidade_carrinho);
    }
}


/* DEFINIR ÍCONE DO CARRINHO */
function img(qtd) {
    document.getElementById("carrinho").src = "./img/contador_carrinho_" + qtd + ".png";
}


/* ADICIONAR ITEM AO CARRINHO */
function adicionar_ao_carrinho(mensagem_adicionar_ao_carrinho) {
    if (quantidade_carrinho == 20) {
        alert("Seu carrinho está muito cheio!")
    }
    else {
        quantidade_carrinho = quantidade_carrinho + 1
        localStorage.setItem("quantidade_carrinho", quantidade_carrinho)
        img(quantidade_carrinho)
        setTimeout(function () {
            alert(mensagem_adicionar_ao_carrinho);
        }, 50)
    }
}


/* REMOVER ITEM DO CARRINHO */
function remover_do_carrinho(mensagem_remover_do_carrinho) {

    /* CHECAR SE O CARRINHO JÁ ESTÁ VAZIO */
    if (quantidade_carrinho == 0) {
        alert("SEU CARRINHO JÁ ESTÁ VAZIO!")
    }
    else {
        quantidade_carrinho = quantidade_carrinho - 1
        localStorage.setItem("quantidade_carrinho", quantidade_carrinho)
        img(quantidade_carrinho)
        setTimeout(function () {
            alert(mensagem_remover_do_carrinho);
        }, 50)
    }
}


/* LIMPAR O CARRINHO */
function limpar_o_carrinho(mensagem_limpar_o_carrinho) {

    /* CHECAR SE O CARRINHO JÁ ESTÁ VAZIO */
    if (quantidade_carrinho == 0) {
        alert("SEU CARRINHO JÁ ESTÁ VAZIO!")
    }
    else {
        quantidade_carrinho = 0
        localStorage.setItem("quantidade_carrinho", quantidade_carrinho)
        img(quantidade_carrinho)
        setTimeout(function () {
            alert(mensagem_limpar_o_carrinho);
        }, 50)
    }
}


/* FORMULÁRIO DE CONTATO */
function formulario_de_contato(formulario_de_contato) {
    alert(formulario_de_contato)
}


/* CHECAR SE O EMAIL ESTÁ CORRETO (checagem pelo "@" e ".com") */
function validar_email() {
    var email = document.getElementById("id_email").value;
    var nome = document.getElementById("id_nome").value;
    var mensagem = document.getElementById("id_mensagem").value;
    if ((email === undefined || email === null || email === "") || (nome === undefined || nome === null || nome === "") || (mensagem === undefined || mensagem === null || mensagem === "")) {
        alert("Falta preencher alguma informação, favor verificar!")
    }
    else {
        if (email.match(/@/) && email.match(/\.com/)) {
            alert("Mensagem enviada com sucesso!");
        }
        else {
            alert("Email incorreto! Favor verificar.");
        }
    }
}