const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");
const diceQdt = document.getElementById("diceQdt");

function rollDice(){
    let sumDiceValues = 0;
    diceResults = [];
    diceImagesArray = []

    if(diceQdt.value < 0)
    {
        diceResult.textContent = `Please, insert a valid dice quantity`
    }else{
        for(let i = 0; i < diceQdt.value; i++){
            let diceFaceNumber =  Number(Math.floor(Math.random()*6) + 1);
            
            diceResults.push(diceFaceNumber);
            diceImagesArray.push(`<img src="diceImages/${diceFaceNumber}.png" alt="Dice ${diceFaceNumber}">`);
        }
        
        for (i in diceResults)
            {
                sumDiceValues += diceResults[i];
            }
        diceResult.textContent = `The total value is ${sumDiceValues}`;
        diceImages.innerHTML = diceImagesArray.join('');
    }
}
