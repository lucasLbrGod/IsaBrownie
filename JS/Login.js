function fazerLogin() {

    if(
        document.getElementById("email").value === "lucas@gmail.com" &&
        document.getElementById("senha").value === "121212"
    ){

        localStorage.setItem("logado", "true");

        window.location.href = "../HTML/Encomenda.html";

    }else{

        alert("Dados incorretos");

    }

}