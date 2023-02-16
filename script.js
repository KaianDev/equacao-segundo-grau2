let A = document.getElementById('numA')
let B = document.getElementById('numB')
let C = document.getElementById('numC')
let res = document.getElementById('resultado')

//Calcula o Delta
function calcularDelta(n1,n2,n3) {
    let delta = n2**2 - 4*n1*n3
    return delta
}
//Calcula o X quando Delta é 0
function equacao2Grau1(n1,n2){
    let raizX = -n2/(2*n1)
    return raizX
}
//Calcula o X linha 1
function equacao2GrauX1(n1,n2,delta) {
    return (-n2 + Math.sqrt(delta))/(2*n1)
}
//Calcula o X linha 2
function equacao2GrauX2(n1,n2,delta) {
    return (-n2 - Math.sqrt(delta))/(2*n1)
}

function calcular() {
    if(A.value.length == 0 || B.value.length == 0 || C.value.length == 0) {
        alert('Erro, informe os valores de A, B e C!');
    } else {
        let numA = Number(A.value)
        let numB = Number(B.value)
        let numC = Number(C.value)
        var valorDelta = calcularDelta(numA,numB,numC)
        var xunico = equacao2Grau1(numA,numB)
        var raizX1 = equacao2GrauX1(numA,numB,valorDelta)
        var raizX2 = equacao2GrauX2(numA,numB,valorDelta)
        res.innerHTML = `<p class="equacao">${numA}x² + ${numB}x + ${numC} = 0</p>`
        // Para valor de Delta menor que 0 (Zero)
        if (valorDelta < 0 ){
            res.innerHTML +='<p>Δ < 0, logo a equação não possui valores reais.</p>'
        // Para valor de Delta igual a 0 (Zero)
        }else if(valorDelta == 0 ){
            res.innerHTML +='<p>Δ = 0, logo a equação tem duas raizes reais e iguais, ou seja, uma única raiz real.</p>'
            res.innerHTML += `<p>X = ${xunico}</p>`
        // Para valor de Delta maior que 0 (Zero)    
        }else {
            console.log(raizX1);
            console.log(raizX2)            
            console.log(valorDelta);
            res.innerHTML +='<p>Δ > 0, logo a equação tem duas raizes reais e diferentes.</p>'
            res.innerHTML += `<p> Δ = ${valorDelta}</p>`
            res.innerHTML += `<p>X' = ${raizX1} <br> X" = ${raizX2}</p>`
        }               
    }
    A.value = ""
    B.value = ""
    C.value = ""
}


