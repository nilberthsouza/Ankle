var lista = [];

var adicionarBtn = document.getElementById("adicionar");

adicionarBtn.addEventListener("click", function() {
	var frente = document.getElementById("frente").value;
	var costa = document.getElementById("costa").value;
	var entrada = { frente: frente, costa: costa };
	lista.push(entrada);

	var listaUl = document.getElementById("lista");
	var entradaLi = document.createElement("li");
	entradaLi.textContent = frente + " - " + costa;
	listaUl.appendChild(entradaLi);
});

var gerarJsonBtn = document.getElementById("gerar-json");

gerarJsonBtn.addEventListener("click", function() {
	var json = JSON.stringify(lista);

	var a = document.createElement("a");
	var file = new Blob([json], { type: "application/json" });
	a.href = URL.createObjectURL(file);
	a.download = "lista.json";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
});