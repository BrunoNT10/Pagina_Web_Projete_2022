var firebaseConfig = {
    apiKey: "AIzaSyDVyPsRvmfFwH3hASMeqLrpMElyeP48RRw",
    authDomain: "projete-2022.firebaseapp.com",
    databaseURL: "https://projete-2022-default-rtdb.firebaseio.com",
    projectId: "projete-2022",
    storageBucket: "projete-2022.appspot.com",
    messagingSenderId: "392429305078",
    appId: "1:392429305078:web:31e7a9605638bbc20380d7",
    measurementId: "G-31C7LKYKWP"
  };

firebase.initializeApp(firebaseConfig)

db = firebase.database()

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

function ReceberNomeSetor(){
    NomeSetor = document.getElementById('input_nome_setor').value;
    return NomeSetor;
}

function capacete(){
    var nome_do_setor = ReceberNomeSetor()
    try{
        db.ref(nome_do_setor).set({
            capacete: true
        });
        
    }
    catch(err){
        alert('Problema')
    }
    cor_botao = document.getElementById("botao_capacete");
    cor_botao.style.backgroundColor = "green";
    var_capacete = 1;

}
function luva(){
    var nome_do_setor = ReceberNomeSetor()
    try{
        db.ref(nome_do_setor).set({
            luva: true
        });
        
    }
    catch(err){
        alert('Problema')
    }
    cor_botao = document.getElementById("botao_luvas");
    cor_botao.style.backgroundColor = "green";
    var_luva = 1;

}
function botas(){
    var nome_do_setor = ReceberNomeSetor()
    try{
        db.ref(nome_do_setor).set({
            botas: true
        });
        
    }
    catch(err){
        alert('Problema')
    }
    cor_botao = document.getElementById("botao_botas");
    cor_botao.style.backgroundColor = "green";
    var_botas = 1;

}function pa(){
    var nome_do_setor = ReceberNomeSetor()
    try{
        db.ref(nome_do_setor).set({
            pa: true
        });
        
    }
    catch(err){
        alert('Problema')
    }
    cor_botao = document.getElementById("botao_pa");
    cor_botao.style.backgroundColor = "green";
    var_pa = 1;

}function oculos(){
    var nome_do_setor = ReceberNomeSetor()
    try{
        db.ref(nome_do_setor).set({
            oculos: true
        });
        
    }
    catch(err){
        alert('Problema')
    }
    cor_botao = document.getElementById("botao_oculos");
    cor_botao.style.backgroundColor = "green";
    var_oculos = 1;

}
function colete(){
    var nome_do_setor = ReceberNomeSetor()
    try{
        db.ref(nome_do_setor).set({
            colete: true
        });
        
    }
    catch(err){
        alert('Problema')
    }
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

function cadastrar_epis(){
    console.log("função acessada");
    var cadastrar = document.getElementById("div_epi");

    if (cadastrar.style.display == "none") {
        console.log("botoes visiveis");
        cadastrar.style.display = "block";
    }

}
