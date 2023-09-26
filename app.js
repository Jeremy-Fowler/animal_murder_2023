const locations = ['🌵', '📚', '🎱', '⛱']

const animals = [
  {
    name: 'Oslo',
    emoji: '🦧',
    currentLocation: '📚',
    isGuilty: false
  },
  {
    name: 'Steven',
    emoji: '🦃',
    currentLocation: '🎱',
    isGuilty: false

  },
  {
    name: 'Lil Jeremy',
    emoji: '🦞',
    currentLocation: '🎱',
    isGuilty: false

  },
  {
    name: 'Big Jeremy',
    emoji: '🦞',
    currentLocation: '🎱',
    isGuilty: false

  },
  {
    name: 'Jung',
    emoji: '🦓',
    currentLocation: '🌵',
    isGuilty: false

  },
  {
    name: 'Hank',
    emoji: '🦛',
    currentLocation: '⛱',
    isGuilty: false

  },
  {
    name: 'Antonio',
    emoji: '🦒',
    currentLocation: '⛱',
    isGuilty: false

  },
  {
    name: 'Karina',
    emoji: '🐅',
    currentLocation: '🌵',
    isGuilty: false

  },
  {
    name: 'Jordan',
    emoji: '🐧',
    currentLocation: '📚',
    isGuilty: false

  },
  {
    name: 'Billium',
    emoji: '🦆',
    currentLocation: '🎱',
    isGuilty: false

  },
]

function drawAnimals() {
  locations.forEach(locationEmoji => {
    const locationElement = document.getElementById(locationEmoji)
    let animalsInLocation = animals.filter(animal => animal.currentLocation == locationEmoji)
    let animalEmojis = animalsInLocation.map(animal => animal.emoji)
    locationElement.innerText = animalEmojis.join('')
  })
}

function moveAnimals() {
  animals.forEach(animal => {
    if (animal.emoji == '☠') { return }
    animal.currentLocation = getRandomItemFromArray(locations)
  })
  drawAnimals()
}

function getRandomItemFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  const randomItem = array[randomIndex]
  console.log(`index: ${randomIndex}`);
  console.log('item:', randomItem);
  return array[randomIndex]
}

function makeMurderer() {
  const randomAnimal = getRandomItemFromArray(animals)
  randomAnimal.isGuilty = true
}

function commitMurder() {
  const murderer = animals.find(animal => animal.isGuilty)
  const animalsAtMurdererLocation = animals.filter(animal => animal.currentLocation == murderer.currentLocation && animal.emoji != '☠' && animal != murderer)
  const victim = getRandomItemFromArray(animalsAtMurdererLocation)
  if (victim) {
    victim.emoji = '☠'
  }
  isEveryoneDeceased(murderer)
  moveAnimals()
}

function isEveryoneDeceased(animalWhoDunnit) {
  const nonMurderers = animals.filter(animal => animal != animalWhoDunnit)
  const everyoneIsDeceased = nonMurderers.every(animal => animal.emoji == '☠')

  if (everyoneIsDeceased) {
    window.alert(`Sorry detective. They're all gone. It was ${animalWhoDunnit.name} the entire time.`)
  }
}

function accuseAnimalOfMurder() {
  const accused = window.prompt('Whodunnit')

  const murderer = animals.find(animal => animal.isGuilty)

  if (murderer.emoji == accused) {
    window.alert(`${murderer.name} is going away for a loooong time. Nice work, detective.`)
  }
  else {
    commitMurder()
  }
}

makeMurderer()
moveAnimals()