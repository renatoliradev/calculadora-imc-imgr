let height = document.querySelector('#height')
let weight = document.querySelector('#weight')
let absCirc = document.querySelector('#absCirc')


const calculatedResults = () => {
    let gender = document.querySelector('input[name="gender"]:checked').value;
    //#region IMC    
    let textResultIMC = document.querySelector('#text-result-imc')
    let squaredHeight = height.value / 100
    let calculatedIMC = parseFloat(weight.value / Math.pow(squaredHeight, 2)).toFixed(1)
    document.querySelector('#imc').innerHTML = calculatedIMC

    if (calculatedIMC < 18.5) { textResultIMC.innerHTML = 'Baixo Peso' }
    else if (calculatedIMC < 25) { textResultIMC.innerHTML = 'Peso Normal' }
    else if (calculatedIMC < 30) { textResultIMC.innerHTML = 'Excesso de Peso' }
    else if (calculatedIMC < 35) { textResultIMC.innerHTML = 'Obesidade - Grau I' }
    else if (calculatedIMC < 40) { textResultIMC.innerHTML = 'Obesidade - Grau II' }
    else if (calculatedIMC >= 40) { textResultIMC.innerHTML = 'Obesidade - Grau III' }
    else { textResultIMC.innerHTML = 'Erro no cálculo! Tente novamente.' }
    //#endregion

    //#region IMGR
    let textResultIMGR = document.querySelector('#text-result-imgr')
    let calculatedMaleIMGR = (64 - (20 * (height.value / absCirc.value)))
    let calculatedFemaleIMGR = (76 - (20 * (height.value / absCirc.value)))

    if (gender === 'male') {
        if (calculatedMaleIMGR < 2) { textResultIMGR.innerHTML = 'Abaixo do mínimo' }
        else if (calculatedMaleIMGR <= 6) { textResultIMGR.innerHTML = 'Classificação: Gordura Essencial' }
        else if (calculatedMaleIMGR <= 14) { textResultIMGR.innerHTML = 'Classificação: Atletas' }
        else if (calculatedMaleIMGR <= 18) { textResultIMGR.innerHTML = 'Classificação: Fitness' }
        else if (calculatedMaleIMGR < 25) { textResultIMGR.innerHTML = 'Classificação: Média' }
        else if (calculatedMaleIMGR >= 25) { textResultIMGR.innerHTML = 'Classificação: Obesidade' }
        else { textResultIMGR.innerHTML = 'Erro no cálculo! Tente novamente.' }

        document.querySelector('#imgr').innerHTML = `${calculatedMaleIMGR.toFixed(1)} %`
    }
    else if (gender === 'female') {
        if (calculatedMaleIMGR >= 10 || calculatedMaleIMGR <= 14) { textResultIMGR.innerHTML = 'Classificação: Gordura Essencial' }
        else if (calculatedMaleIMGR <= 21) { textResultIMGR.innerHTML = 'Classificação: Atletas' }
        else if (calculatedMaleIMGR <= 25) { textResultIMGR.innerHTML = 'Classificação: Fitness' }
        else if (calculatedMaleIMGR < 31) { textResultIMGR.innerHTML = 'Classificação: Média' }
        else if (calculatedMaleIMGR >= 32) { textResultIMGR.innerHTML = 'Classificação: Obesidade' }
        else { textResultIMGR.innerHTML = 'Erro no cálculo! Tente novamente.' }

        document.querySelector('#imgr').innerHTML = `${calculatedFemaleIMGR.toFixed(1)} %`
    }
    //#endregion
    if (calculatedIMC > 0) {
        document.querySelector('#btnCalc').style.display = 'none';
        document.querySelector('#btnReset').style.display = 'block';
    }
}

const hideBtnReset = () => {
    document.querySelector('#btnCalc').style.display = 'block';
    document.querySelector('#btnReset').style.display = 'none';

    document.querySelector('#imc').innerHTML = '0'
    document.querySelector('#imgr').innerHTML = '0 %'
    document.querySelector('#text-result-imc').innerHTML = ''
    document.querySelector('#text-result-imgr').innerHTML = ''
}


document.querySelector('#btnCalc').addEventListener('click', calculatedResults)
document.querySelector('#btnReset').addEventListener('click', hideBtnReset)

const form = document.querySelector('#frm')
form.addEventListener('submit', e => {
    e.preventDefault()
})

// document.addEventListener('keypress', function (e) {
//     if (e.which == 13) {
//         validateInputs()
//     }
// }, false);