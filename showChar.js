// Standard

let str =  'C\'était à Mégara, faubourg de Carthage, dans les jardins d\'Hamilcar.'

for (let i = 0; i < str.length; ++i){
  console.log(`Le caractère ${str[i]} est à l'index ${i}`)
}

// Updated

let intro = 'extrait de Salammbô de Gustave Flaubert'

console.log(`Voici un ${intro} et cette extrait contient ${str.length} caractères.`)

for(let i = 0; i < str.length; ++i){
  console.log(`Le caractère ${str[i]} est à l'index ${i}`)
}