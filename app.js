const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices = ['камень', 'ножницы', 'бумагу']

const handleClick = (e) => {
  getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
}
choices.forEach(choice => {
  const button = document.createElement('button')
  button.innerHTML = choice
  button.addEventListener('click', handleClick)
  choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'ножницыбумагу':
    case 'каменьножницы':
    case 'бумагукамень':
      resultDisplay.innerHTML = 'Вы выбрали ' + userChoice + ' и компьютер выбрал ' + computerChoice + ' , Победа!';
      break
    case 'бумагуножницы':
    case 'бумагукамень':
    case 'каменьбумагу':
      resultDisplay.innerHTML = 'Вы выбрали ' + userChoice + ' и компьютер выбрал ' + computerChoice + ' , Поражение!';
      break
    case 'ножницыножницы':
    case 'каменькамень':
    case 'бумагубумагу':
      resultDisplay.innerHTML = 'Вы выбрали ' + userChoice + ' и компьютер выбрал ' + computerChoice + ' , Ничья!';
      break
  }
}