function calcularCuota(monto, plazo, tasaInteres) {
    // Suponemos que la tasa de interés ya está en formato decimal (ej. 5% = 0.05)
    tasaInteres = tasaInteres / 12;  // Tasa de interés mensual
    return monto * tasaInteres / (1 - Math.pow(1/(1 + tasaInteres), plazo));
}

function simularCredito() {
    let monto = document.getElementById("monto").value;
    let plazo = document.getElementById("plazo").value;
    let tasaInteres = 0.05;  // Suponemos una tasa de interés del 5%

    if(monto > 0 && plazo > 0) {
        let cuotaMensual = calcularCuota(monto, plazo, tasaInteres);
        document.getElementById("resultado").innerText = "La cuota mensual sería: " + cuotaMensual.toFixed(2);
    } else {
        document.getElementById("resultado").innerText = "Por favor, ingresa valores válidos.";
    }
}
