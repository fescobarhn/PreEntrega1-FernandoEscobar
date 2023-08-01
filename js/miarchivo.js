function calcularCuota(monto, plazo, tasaInteres) {
    // Suponemos que la tasa de interés ya está en formato decimal (ej. 5% = 0.05)
    tasaInteres = tasaInteres / 12;  // Tasa de interés mensual
    return monto * tasaInteres / (1 - Math.pow(1/(1 + tasaInteres), plazo));
}

function simularCredito() {
    let monto = document.getElementById("monto").value;
    let plazo = document.getElementById("plazo").value;

    if(monto > 0 && plazo > 0) {
        let salida = "Tasa de interés: Cuota mensual\n";

        // Simulamos tasas de interés desde 1% hasta 10%
        for(let tasaInteres = 0.01; tasaInteres <= 0.10; tasaInteres += 0.01) {
            let cuotaMensual = calcularCuota(monto, plazo, tasaInteres);
            salida += (tasaInteres * 100).toFixed(2) + "%: " + cuotaMensual.toFixed(2) + "\n";
        }
        
        document.getElementById("resultado").innerText = salida;
    } else {
        document.getElementById("resultado").innerText = "Por favor, ingresa valores válidos.";
    }
}

