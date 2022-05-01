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
    let textResultAbsCirc = document.querySelector('#text-result-abs-circ')
    let textResultIMGR = document.querySelector('#text-result-imgr')
    let calculatedMaleIMGR = (64 - (20 * (height.value / absCirc.value)))
    let calculatedFemaleIMGR = (76 - (20 * (height.value / absCirc.value)))

    if (gender === 'male') {
        if (calculatedMaleIMGR < 2) { textResultIMGR.innerHTML = 'Abaixo do mínimo' }
        else if (calculatedMaleIMGR <= 6) { textResultIMGR.innerHTML = 'Gordura Essencial' }
        else if (calculatedMaleIMGR <= 14) { textResultIMGR.innerHTML = 'Atletas' }
        else if (calculatedMaleIMGR <= 18) { textResultIMGR.innerHTML = 'Fitness' }
        else if (calculatedMaleIMGR < 25) { textResultIMGR.innerHTML = 'Média' }
        else if (calculatedMaleIMGR >= 25) { textResultIMGR.innerHTML = 'Obesidade' }
        else { textResultIMGR.innerHTML = 'Erro no cálculo! Tente novamente.' }

        document.querySelector('#imgr').innerHTML = `${calculatedMaleIMGR.toFixed(1)} %`

        if (absCirc.value <= 90) { textResultAbsCirc.innerHTML = 'Normal' }
        else if (absCirc.value < 94) { textResultAbsCirc.innerHTML = 'Médio' }
        else if (absCirc.value < 102) { textResultAbsCirc.innerHTML = 'Alto' }
        else if (absCirc.value >= 102) { textResultAbsCirc.innerHTML = 'Altíssimo' }
        else { textResultAbsCirc.innerHTML = '-------' }
    }
    else if (gender === 'female') {
        if (calculatedFemaleIMGR < 10) { textResultIMGR.innerHTML = 'Abaixo do mínimo' }
        else if (calculatedFemaleIMGR <= 14) { textResultIMGR.innerHTML = 'Gordura Essencial' }
        else if (calculatedFemaleIMGR <= 21) { textResultIMGR.innerHTML = 'Atletas' }
        else if (calculatedFemaleIMGR <= 25) { textResultIMGR.innerHTML = 'Fitness' }
        else if (calculatedFemaleIMGR < 32) { textResultIMGR.innerHTML = 'Média' }
        else if (calculatedFemaleIMGR >= 32) { textResultIMGR.innerHTML = 'Obesidade' }
        else { textResultIMGR.innerHTML = 'Erro no cálculo! Tente novamente.' }

        document.querySelector('#imgr').innerHTML = `${calculatedFemaleIMGR.toFixed(1)} %`

        if (absCirc.value <= 80) { textResultAbsCirc.innerHTML = 'Normal' }
        else if (absCirc.value < 84) { textResultAbsCirc.innerHTML = 'Médio' }
        else if (absCirc.value < 88) { textResultAbsCirc.innerHTML = 'Alto' }
        else if (absCirc.value >= 88) { textResultAbsCirc.innerHTML = 'Altíssimo' }
        else { textResultAbsCirc.innerHTML = '-------' }
    }
    //#endregion
    if (calculatedIMC > 0) {
        document.querySelector('#btnCalc').style.display = 'none';
        document.querySelector('#btnReset').style.display = 'block';

        const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            timer: 2000,
            timerProgressBar: true
        })

        Toast.fire({
            icon: 'success',
            title: 'Calculado com Sucesso!'
        })
    }
}

const hideBtnReset = () => {
    document.querySelector('#btnCalc').style.display = 'block';
    document.querySelector('#btnReset').style.display = 'none';

    document.querySelector('#imc').innerHTML = '0'
    document.querySelector('#imgr').innerHTML = '0 %'
    document.querySelector('#text-result-imc').innerHTML = ''
    document.querySelector('#text-result-imgr').innerHTML = ''
    document.querySelector('#text-result-abs-circ').innerHTML = ''
}

function showInfoAbsCirc() {
    Swal.fire({
        imageUrl: './assets/img/infoAbsCirc.png',
        imageHeight: 400,
        imageAlt: 'Obter a circunferência abdominal'
    })
}

function showInfoIMC() {
    Swal.fire({
        imageUrl: './assets/img/infoIMC.png',
        imageHeight: 400,
        imageAlt: 'Info IMC'
    })
}

function showInfoIMGR() {
    Swal.fire({
        imageUrl: './assets/img/infoIMGR.png',
        imageHeight: 400,
        imageAlt: 'Info IMGR'
    })
}

document.querySelector('#info-abs-circ').addEventListener('click', showInfoAbsCirc)
document.querySelector('#info-IMC').addEventListener('click', showInfoIMC)
document.querySelector('#info-IMGR').addEventListener('click', showInfoIMGR)
document.querySelector('#btnCalc').addEventListener('click', calculatedResults)
document.querySelector('#btnReset').addEventListener('click', hideBtnReset)

const form = document.querySelector('#frm')
form.addEventListener('submit', e => {
    e.preventDefault()
})