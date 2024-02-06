const form = document.getElementsByClassName('form')
function generateNumber(){
    return Math.floor(Math.random()*99 + 1);
}
const generatedNumber = generateNumber();
form.addEventListener('submit', function(e){
    e.preventDefault();

    const userValue =parseInt(document.querySelector('#guessField').value)
    if(userValue==generateNumber){
        
    }
    
})