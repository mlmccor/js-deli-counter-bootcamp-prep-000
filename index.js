
function takeANumber(katzDeliLine, name) {
  console.log(katzDeliLine.push(name))
  var place= katzDeliLine.length
  return "Welcome, "+name+". You are number "+place+" in line."
}

function nowServing(katzDeliLine) {
  if( katzDeliLine.length >0) {  
    return `Currently serving ${katzDeliLine.shift()}.`
 
  } else{
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  returns "The "
}