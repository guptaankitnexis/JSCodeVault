const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()

    const height =parseInt(document.querySelector('#height').value)
    const weight =parseInt(document.querySelector('#weight').value)
    const results =document.querySelector('#results')
    const ptag =document.querySelector('#pTag')
    // console.log(`${height} ----${weight}`);
    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML=`Please give me a valid height`;
    }
    if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give me a valid weight`;
    }
    else{
        const bmi =(weight/((height*height)/10000)).toFixed(2);
      
        results.innerHTML=`<span>${bmi}</span>`
    //    if(bmi < 18.6){
    //     ptag.innerHTML=`Under - Weight`
    //    }
    //    else if(bmi < 24.9){
    //     ptag.innerTex=`Normal - Range`
    //    }
    //    if(bmi > 24.9){
    //     ptag.innerHTML=`Over - Weight`
    //    }
    }
})