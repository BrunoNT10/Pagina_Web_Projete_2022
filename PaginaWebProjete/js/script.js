function cadastrar_empresa(){
    console.log("Cadastrar empresa")
}
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
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
function teste(){
    try{
        db
         .ref('users')
         .once('value')
         .then(function(snapshot){
               console.log(snapshot.val());
            //    console.log(JSON.stringify(snapshot.val()))
               resElement = JSON.stringify(snapshot.val());
               console.log(resElement);
            
  })
}catch(err){
     alert("Houve algum erro!");
}
  
}
function baixar_imagens(){
    var data = document.getElementById("data").value;
    var nome = document.getElementById("nome").value;
    console.log(data)
    console.log(nome)

    if (data != "" && nome != ""){
        console.log("funcionou");
    }
    else{
        console.log("erro");
        document.getElementById("texto_erro").innerHTML = "Data e/ou nome inválidos"

        setTimeout(function tempo_espera(){
            console.log("timeout acessado ");
            document.getElementById("texto_erro").innerHTML = "";
        
        }, 8000);
    }

    
}
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