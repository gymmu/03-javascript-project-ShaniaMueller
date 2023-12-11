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
const capitalizedElement = currentElement.toUpperCase() //Grossschreibung der Buchstaben

result.push(capitalizedElement) //Grossbuchstaben werden wiedergegeben werden
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
  return count //Anzahl der gezählten E im Output
}
 

//aufgabe 4: neuer Button -> 
export function aufgabe04(args) {
  const input = args 
  const result = []
  let count = 1

//soll die Sonderzeichen umgehen können
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
if (currentElement === ""){
count = count + 1
}}
return count 
}



//aufgabe 5:
export function aufgabe05(args) {
  const input = args
  const result = []
  let capitalLetters = 0
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input [i]
    if (currentElement === ".") { //erkennt Punkt
    } else if (currentElement === " ") { //erkennt Leerzeichen
 
    }
    else if (currentElement !== currentElement.toLowerCase()) { //erkennt grosse und kleine Buchstaben
      capitalLetters++
    }
  }
 
  if (capitalLetters> 0) { //gibt nur die Grossbuchstaben in den Output
    return true
  }else {
    return false
  }
 
}
 


//aufgabe 8: alle 'e'durch 3 ersetzen
export function aufgabe08(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

if (currentElement === 'e') { //hier wird das e erkannt
result.push("3") // nur das kleine 'e' muss durch 3 ersetzt werden
} 
else {
result.push(currentElement) //wenn es kein e ist, soll das Element bleiben
}
}
return result.join("")
}


//aufgabe 12:


  export function aufgabe12(args) {
    const input = args //soll erste Position von e finden
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') { //erkennt das e 
      return i
    }
  }
  return -1 //die erste Position wird im Output mit -1 gezeigt
   
  }

  //aufgabe 9:
export function aufgabe09(args) {
const input= args
let len = 0 //fängt an zu zählen bei 0
for (let i = 0; i < input.length; i++) {
len++
}

if (len === 6 ) {
return true

} else { //im Output wird false angezeigt, wenn 6 mehr/weniger Zeichen
 return false

}
}

//aufgabe 11: 

export function aufgabe11 (args) {
  const input = args
  let ascii = null
if (input.length > 1) //funktionswächter 
{
  return null
}


  for (let i = 0; i < input.length; i++) {
const currentElement = input [i]
ascii = currentElement.charCodeAt(0)
return ascii}

  return null
}

//aufgabe 13:
export function aufgabe13 (args) {
  const input = args
  const result = []
  
  for (let i = 1; i < input.length; i++) { //soll die letzte position erkennen
    const currentElement = input[i]
    if (currentElement === 'e') { 
      return i
    }
  }
  return -1 //wenn kein e gefunden wird dann -1
  }

  //aufgabe 14:
  export function aufgabe14(args) {
    const input = args 
  const result = []
    let countE = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') { //bei jedem e wird es höher gecountet
      countE++
      if (countE === 3) { //nach 3 e wird die dritte Position angegeben
        return i
      }
    }
  }
  return -1
  }

  //aufgabe 15:

  export function aufgabe15(args) {
    const input = args
    const result = []
 
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]

  if (currentElement=== ' ' ) { //erkennt Lehrzeichen (ähnlich wie Aufgabe 13)
  return result.join("")
 
  }

      result.push(currentElement) //Widergabe des Output bis zum ersten Lehrzeichen
  }
    return result.join("")
  }


  //aufgabe 19: 

  export function aufgabe19(args) {
    const input = args 
    const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] 
    result.push(currentElement)
    result.push(currentElement) //fügt das Element zwei Mal in den Output rein
  }


    return result.join("")
  }

//aufgabe 10:
  export function aufgabe10(args) {
    const input = args
   
    if (input.length !== 7) return false
    if (input[0] !== "#") return false
 
    for (let i = 1; i < input.length; i++) {
      const currentElement = input[i]
      const ascii = currentElement.charCodeAt(0)


      if (48 <= ascii && ascii <= 57) {
       } else if (65 <= ascii && ascii <= 70) {
       }   
       else {
            return false
       }}
    return true
  }


  //aufgabe 6:
  export function aufgabe06(args) {
    const input = args
      const result = []
    
    
    for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    //prüft nach Sonderzeichen
    if (currentElement=== ".") 
return true }
    return false }
    
    

    //aufgabe 7 (mit noah): 
    
    export function aufgabe07(args) {
      const input = args 

      const result = []
     
      let capitalLetters = 0
       
      for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
     
      if (currentElement=== ".") {}

      else if (currentElement===" "){}
       
      else if (currentElement === currentElement.toUpperCase())
      {capitalLetters++}
      }
       
      if (capitalLetters > 0) {
        return true

      } else
       {
         return false
      }
    }

    //bubblesort:
    export function bubbleSort (args) {
      const list = args.split("") // es braucht eine Liste
       for (let i = 0; i < list.length -1; i++) 
       
       {
         const currentElement = list[i]
         const nextElement = list[i+1] //ascii soll die buchstaben in zahlen umwandeln und sie dann der Grösse nach anordnen
         
         if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) { //einige Elemente werden gewechselt
           
          const tmp = list[i+1]
           list[i+1] = list[i]
           list[i] = tmp
           
           i = -1 //vorgang soll wiederholt werden
         }
       
        }
       const result = list.join("")
       return (result)
     
     }
    
//aufgabe 20:
     export function aufgabe20(args) {
      const input = args
      const result = []
     
      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
      if (currentElement === '.' )  //erkennt den Punkt
      if (input [i+1] === ' ') { //prüft ob nach dem Punkt ein Lehrzeichen folgt

        return true
      }
       
      }
     
    return false
     
    }

//aufgabe 27:
export function aufgabe27(args) {
  const input = args
  if (input.length === 0) return false
 
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt (0)
    if(48 <= ascii && ascii <= 57) { //prüft obdie Elemente Zahlen sind --> zwischen 0-9
    } else {
      return false //falsch wenn es nichts findet
    }
 
  }
  return true //richtig wenn es etwas findet
}

//aufgabe 26:
export function aufgabe26 (args) {
   
  const list = args.split("")  // es braucht eine liste
  for (let i = 0; i < list.length - 1; i++) {
    
    const currentElement = list[i]
    const nextElement = list[i+1]
    if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // elemente tauschen

      const tmp = list[i+1]
      list[i+1] = list[i]
      list[i] = tmp
      i = 0 // nach dem vertauschen soll der vorgang erneut gestartet werden
    }
  }
  const result = list.join("")
  return (result)
 
}

//aufgabe 18: 
export function aufgabe18 (args) {
const text = args 
let switchFirst = true 
const listFirst = []
const listSecond = []

for (let i = 0; i < text.length; i++) {
  if (text[i] === " ") {
    switchFirst = false 
  } else {
    if (switchFirst === true) {
      listFirst.push(text[i])
    } else {
      listSecond.push(text[i])
    }
  }
}
const name = listFirst.join("")
const age = listSecond.join("")

return "Sie heissen " + name + " und sind " + age + " Jahre alt" //der Text und die Eingabe sollen angezeigt werden
}