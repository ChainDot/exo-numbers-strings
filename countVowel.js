let str = 'Je suis le ténébreux, - le veuf, - l\'inconsolé,\n'+
'Le prince d\'Aquitaine à la tour abolie :\n'+
'Ma seule étoile est morte, - et mon luth constellé\n'+
'Porte le soleil noir de la Mélancolie.\n\n'+
'Dans la nuit du tombeau, toi qui m\'as consolé,\n'+
'Rends-moi le Pausilippe et la mer d\'Italie,\n'+
'La fleur qui plaisait tant à mon cœur désolé,\n'+
'Et la treille où le pampre à la rose s\'allie.\n\n'+
'Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?\n'+
'Mon front est rouge encor du baiser de la reine ;\n'+
'J\'ai rêvé dans la grotte où nage la sirène...\n\n'+
'Et j\'ai deux fois vainqueur traversé l\'Achéron ;\n'+
'Modulant tour à tour sur la lyre d\'Orphée\n'+
'Les soupirs de la sainte et les cris de la fée.'

const vowel = ['a','à','A','e','é','è','ê','E','i','I','o','O','u','ù','U','y','Y']
let CountVowel = 0
let up = str.toUpperCase()
let low = str.toLowerCase()

for ( let i = 0; i < str.length; i++){
  if(low[i] ===  'a' || low[i] === 'à' || up[i] ===  'A' || low[i] ===  'e' || low[i] ===  'é' || low[i] ===  'è' || low[i] ===  'ê' || up[i] ===  'E' ||  low[i] ===  'i' || up[i] ===  'I' ||  low[i] ===  'o' || up[i] ===  'O' ||  low[i] ===  'u' ||  low[i] ===  'ù'  || up[i] ===  'U' ||  low[i] ===  'y' || up[i] ===  'Y'){
      CountVowel = CountVowel + 1
  }  
}

console.log(`In this text you have ${CountVowel} Vowels`)


