const button = document.querySelectorAll('.button')
// console.log(button);
const body = document.querySelector("body")
console.log(body);
button.forEach((item)=>{
    console.log(item);
    item.addEventListener('click', function(e){
        // console.log(e);
        console.log(e.target.id);
        if(e.target.id == 'grey'){
            document.body.style.backgroundColor = "grey"
        }
        else if(e.target.id == 'white'){
            document.body.style.backgroundColor = "white"
        }
        else if(e.target.id == 'blue'){
            document.body.style.backgroundColor = "blue"
        }
        else{
            document.body.style.backgroundColor = "yellow"
        }
    })
})