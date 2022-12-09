// helloWorld function
function helloWorld (){
    return "Hello, World!";
}
function sayHello(name) {
    if(!name)
        return "Hello World!";
    if(typeof name != "string")
        return "Hello World!";
    if(!isNaN(name))
        return "Hello World!";
    return "Hello " + name + "!";
}
function isFive(number){
    if(number == 5) {return true}
    return false
}
function isEven (number)  {
    if(number % 2 === 0) {return true}return false
}
function isVowel (word)  {
    if(!isVowel || typeof word != 'string') {return false;}
    if(word.toUpperCase() === "A" || word.toUpperCase() === "E" || word.toUpperCase() === "I" || word.toUpperCase() === "O" || word.toUpperCase() === "U")
        return true
    return false
}
function add  (x, y)  {
    x = parseFloat(x)
    y = parseFloat(y)
    return x + y
}