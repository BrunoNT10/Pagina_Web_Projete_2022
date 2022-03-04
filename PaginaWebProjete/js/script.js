// ----------- RELATÓRIOS -----------

function relatorio_diario(){
    document.getElementById("texto_relatorio").innerHTML = "Digite ou selecione a data que deseja ver o relatório: "
    document.getElementById("data_relatorio").type = "date"
    var x = document.getElementById("divisao_mes");
    if (x.style.display === "block") {
        console.log("botoes visiveis")
        x.style.display = "none";
    } 
}
function relatorio_mensal(){
    document.getElementById("data_relatorio").type = "hidden"
    document.getElementById("texto_relatorio").innerHTML = "Selecione o mês que deseja ver o relatório: "
    var x = document.getElementById("divisao_mes");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
}
function mostra_oculta(){

    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}
function janeiro(){
    console.log("janeiro");

}

function fevereiro(){
    console.log("fevereiro");

}

function marco(){
    console.log("marco");

}

function abril(){
    console.log("abril");

}

function maio(){
    console.log("maio");

}

function junho(){
    console.log("junho");

}

function julho(){
    console.log("julho");

}

function agosto(){
    console.log("agosto");

}

function setembro(){
    console.log("setembro");

}

function outubro(){
    console.log("outubro");

}

function novembro(){
    console.log("novembro");

}

function dezembro(){
    console.log("dezembro");
}

// ----------- CADASTRO DAS EPI'S -----------
var var_capacete = 0;
var var_luva = 0;
var var_botas = 0;
var var_pa = 0;
var var_colete = 0;
var var_oculos = 0;

function capacete(){
    cor_botao = document.getElementById("botao_capacete");
    cor_botao.style.backgroundColor = "green";
    var_capacete = 1;

}
function luva(){
    cor_botao = document.getElementById("botao_luvas");
    cor_botao.style.backgroundColor = "green";
    var_luva = 1;

}
function botas(){
    cor_botao = document.getElementById("botao_botas");
    cor_botao.style.backgroundColor = "green";
    var_botas = 1;

}function pa(){
    cor_botao = document.getElementById("botao_pa");
    cor_botao.style.backgroundColor = "green";
    var_pa = 1;

}function oculos(){
    cor_botao = document.getElementById("botao_oculos");
    cor_botao.style.backgroundColor = "green";
    var_oculos = 1;

}
function colete(){
    cor_botao = document.getElementById("botao_colete");
    cor_botao.style.backgroundColor = "green";
    var_colete = 1;

}
function concluido(){
    if (var_capacete != 1){
        cor_botao = document.getElementById("botao_capacete");
        cor_botao.style.backgroundColor = "red";
    }
    if (var_luva != 1){
        cor_botao = document.getElementById("botao_luvas");
        cor_botao.style.backgroundColor = "red";

    }
    if (var_pa != 1){
        cor_botao = document.getElementById("botao_pa");
        cor_botao.style.backgroundColor = "red";

    }
    if (var_oculos != 1){
        cor_botao = document.getElementById("botao_oculos");
        cor_botao.style.backgroundColor = "red";

    }
    if (var_colete != 1){
        cor_botao = document.getElementById("botao_colete");
        cor_botao.style.backgroundColor = "red";

    }
    if (var_botas != 1){
        cor_botao = document.getElementById("botao_botas");
        cor_botao.style.backgroundColor = "red";

    }
}