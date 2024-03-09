/*
fetch('url')
    .then(res => {
        console.log("Responce , Waiting to parse ...", res);
        return res.json()
    })
    .then(data => {
        console.log("Data Parsed ...");
        console.log(data.ticker.price);
    })
    .catch(e => {
        console.log("OH NO ! ERROR ", e);
    })  
*/
// axios.get('url')
// .then(res => {
//     console.log(res.data.ticker.price);
// }) 
// .catch(err => {
//     console.log("ERROR", err);
// })

const getBitCoinPrice = async () => {
    try{
        const res = await axios.get('url')
        console.log(res.data.ticker.price);
    }
    catch(e){
        console.log("ERROR", e);
    }
}

const getDadJoke =  async () => {
    const config = {header:{Accept:'application/json'}}
    const res = await axios.get('url' , config)
    console.log(res);
}