// const counterDiv = document.createElement('div')
// const counterInput = document.createElement('input')
// const incrementButton = document.createElement('button')
// const decrementButton = document.createElement('button')
// const resetButton = document.createElement('button')
//
//
// counterDiv.style.textAlign = 'center'
// counterInput.style.width = '50px'
// incrementButton.style.marginRight = '10px'
// decrementButton.style.marginRight = '10px'
// incrementButton.innerHTML = '+'
// decrementButton.innerHTML = '-'
//
// document.body.appendChild(counterDiv);
// counterDiv.appendChild(counterInput);
// counterDiv.appendChild(incrementButton);
// counterDiv.appendChild(decrementButton);
// counterDiv.appendChild(resetButton);
//
// let count = 0
// incrementButton.addEventListener('click', () => {
//     count++
//     counterInput.value = count
//     updateColor()
// })
//     decrementButton.addEventListener('click', () => {
//         count--
//         counterInput.value = count;
//         updateColor()
//     })
// resetButton.addEventListener('click', () => {
//     count = 0
//     counterInput.value = count
//     updateColor()
// })
// function updateColor() {
//     if (count > 0) {
//         counterInput.style.color = 'green'
//     } else if (count < 0) {
//         counterInput.style.color = 'red'
//     } else {
//         counterInput.style.color = 'gray'
//     }
// }
const trafficLight = document.createElement('div');
trafficLight.style.display = 'flex';
trafficLight.style.flexDirection = 'column';
trafficLight.style.alignItems = 'center';

const redLight = document.createElement('div')
redLight.style.width = '100px'
redLight.style.height = '100px'
redLight.style.backgroundColor = 'red'
redLight.style.marginBottom = '10px'
redLight.style.borderRadius = '50%'

const yellowLight = document.createElement('div')
yellowLight.style.width = '100px'
yellowLight.style.height = '100px'
yellowLight.style.backgroundColor = 'yellow'
yellowLight.style.marginBottom = '10px'
yellowLight.style.borderRadius = '50%'

const greenLight = document.createElement('div')
greenLight.style.width = '100px'
greenLight.style.height = '100px'
greenLight.style.backgroundColor = 'green'
greenLight.style.borderRadius = '50%'

document.body.appendChild(trafficLight)
trafficLight.appendChild(redLight)
trafficLight.appendChild(yellowLight)
trafficLight.appendChild(greenLight)

function showMessage(message) {
    alert(message);
}

redLight.addEventListener('click', () => {
    showMessage('Стой')
})

yellowLight.addEventListener('click', () => {
    showMessage('Готовься')
})
greenLight.addEventListener('click', () => {
    showMessage('Иди')
})


