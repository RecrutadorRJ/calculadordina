// Função para alternar entre as abas
function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;

    // Esconder todos os conteúdos das abas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remover a classe "ativo" de todos os botões
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }

    // Mostrar o conteúdo da aba atual e adicionar a classe "ativo" ao botão
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Cálculo da Absorção (pano molhado / pano seco * 100)
function calcularAbsorção() {
    var seco1 = parseFloat(document.getElementById("seco1").value);
    var molhado1 = parseFloat(document.getElementById("molhado1").value);
    var seco2 = parseFloat(document.getElementById("seco2").value);
    var molhado2 = parseFloat(document.getElementById("molhado2").value);
    var seco3 = parseFloat(document.getElementById("seco3").value);
    var molhado3 = parseFloat(document.getElementById("molhado3").value);
    var seco4 = parseFloat(document.getElementById("seco4").value);
    var molhado4 = parseFloat(document.getElementById("molhado4").value);

    var absorção1 = (molhado1 / seco1) * 100;
    var absorção2 = (molhado2 / seco2) * 100;
    var absorção3 = (molhado3 / seco3) * 100;
    var absorção4 = (molhado4 / seco4) * 100;

    var médiaAbsorção = (absorção1 + absorção2 + absorção3 + absorção4) / 4;

    document.getElementById("resultado-absorção").textContent = "Absorção Média: " + médiaAbsorção.toFixed(2) + "%";
}

// Cálculo da Gramatura
function calcularGramatura() {
    var pano1 = parseFloat(document.getElementById("pano1").value);
    var pano2 = parseFloat(document.getElementById("pano2").value);
    var pano3 = parseFloat(document.getElementById("pano3").value);
    var pano4 = parseFloat(document.getElementById("pano4").value);
    var pano5 = parseFloat(document.getElementById("pano5").value);

    var médiaGramatura = (pano1 + pano2 + pano3 + pano4 + pano5) / 5;

    document.getElementById("resultado-gramatura").textContent = "Média de Gramatura: " + médiaGramatura.toFixed(2) + " g";
}

// Cálculo da Espessura
function calcularEspessura() {
    var espessura1 = parseFloat(document.getElementById("espessura1").value);
    var espessura2 = parseFloat(document.getElementById("espessura2").value);
    var espessura3 = parseFloat(document.getElementById("espessura3").value);
    var espessura4 = parseFloat(document.getElementById("espessura4").value);
    var espessura5 = parseFloat(document.getElementById("espessura5").value);

    var médiaEspessura = (espessura1 + espessura2 + espessura3 + espessura4 + espessura5) / 5;

    document.getElementById("resultado-espessura").textContent = "Média de Espessura: " + médiaEspessura.toFixed(2) + " mm";
}
