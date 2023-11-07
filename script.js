export function aufgabe01(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

if (currentElement === 'e') {
result.push("")
} else if ( currentElement === 'E') {
result.push("")
}
else {
result.push(currentElement)
}
}
return result.join("")
}


//aufgabe 2: Nur Grossbuchstaben, Grossschreibung
export function aufgabe02(args) {
const input = args 
const result = []

for (let i = 0; i < input.length; i++) {

  const currentElement = input [i]
const capitalizedElement = currentElement.toUpperCase()

result.push(capitalizedElement)
}
return result.join("")

}


//aufgabe 3: neuer Button -> 
export function aufgabe03(args) {
const input = args 
const result = []
let count = 0
 
//soll nichts ausser ein kleines 'e' enthalten
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
if (currentElement === 'e'){
  count = count + 1
}
 
// soll die grossen 'E' zählen
else if (currentElement === 'E'){
  count = count + 1
}
  }
  return count
}
 

//aufgabe 4: neuer Button -> 
export function aufgabe04(args) {
  const input = args 
  const result = []
}
//soll die Sonderzeichen umgehen können
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
if (currentElement === ("")){
count = count + 1
}}



//aufgabe 5:
export function aufgabe05(args) {
const input = args
  const result = []
let capitalLetters = 0


for (let i = 0; i < input.length; i++) {
const currentElement = input[i]

//prüft ob es einen Grossbuchstaben gibt
if (currentElement=== ".") {}
else if (currentElement===" "){}

//wenn ein Element gleich ist, dann rechnet es plus 1.
else if (currentElement === currentElement.toUpperCase()) 
{capitalLetters++}
}

if (capitalLetters > 0) {
  return true
} else {
   return false
}

}

//aufgabe 8: alle 'e'durch 3 ersetzen
export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

if (currentElement === 'e') {
result.push("3") // nur das kleine 'e' muss durch 3 ersetzt werden
} 
else {
result.push(currentElement)
}
}
return result.join("")
}


//aufgabe 12:


  export function aufgabe12(args) {
    const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      return i
    } else if (currentElement === 'E') {
      return i
    }
  }
  return -1

   
  }