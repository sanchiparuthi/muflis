const baseURL = "https://deck-builder.onrender.com"


const getCards = async function(color){
    try{
        const buildDeck = await fetch(`${baseURL}/command/:create_deck`)
        const shuffleCard = await fetch (`${baseURL}/command/:shuffle_deck`)
const cardIDs = await fetch(`${baseURL}/command/:draw_card`)
const cardIDsJSON = await cardIDs.json();

console.log(cardIDsJSON.value)

const cardH1 =document.getElementById("firstcard");
cardH1.innerHTML = cardIDsJSON.value;
    } catch(error){
        console.log(error)
    }
    try{
        const shuffleCard = await fetch (`${baseURL}/command/:shuffle_deck`)
    const cardIDs = await fetch(`${baseURL}/command/:draw_card`)
const cardIDsJSON = await cardIDs.json();

console.log(cardIDsJSON.value)

const cardH1 =document.getElementById("secondcard");
cardH1.innerHTML = cardIDsJSON.value;
    } catch(error){
        console.log(error)
    }

    try{
        const shuffleCard = await fetch (`${baseURL}/command/:shuffle_deck`)
        const cardIDs = await fetch(`${baseURL}/command/:draw_card`)
    const cardIDsJSON = await cardIDs.json();
    
    console.log(cardIDsJSON.value)
    
    const cardH1 =document.getElementById("thirdcard");
    cardH1.innerHTML = cardIDsJSON.value;
        } catch(error){
            console.log(error)
        }

        try{
            const shuffleCard = await fetch (`${baseURL}/command/:shuffle_deck`)
            const cardIDs = await fetch(`${baseURL}/command/:draw_card`)
        const cardIDsJSON = await cardIDs.json();
        
        console.log(cardIDsJSON.value)
        
        const cardH1 =document.getElementById("fourthcard");
        cardH1.innerHTML = cardIDsJSON.value;
            } catch(error){
                console.log(error)
            }

            try{
                const shuffleCard = await fetch (`${baseURL}/command/:shuffle_deck`)
                const cardIDs = await fetch(`${baseURL}/command/:draw_card`)
            const cardIDsJSON = await cardIDs.json();
            
            console.log(cardIDsJSON.value)
            
            const cardH1 =document.getElementById("fifthcard");
            cardH1.innerHTML = cardIDsJSON.value;
                } catch(error){
                    console.log(error)
                }

                try{
                    const shuffleCard = await fetch (`${baseURL}/command/:shuffle_deck`)
                    const cardIDs = await fetch(`${baseURL}/command/:draw_card`)
                const cardIDsJSON = await cardIDs.json();
                
                console.log(cardIDsJSON.value)
                
                const cardH1 =document.getElementById("sixthcard");
                cardH1.innerHTML = cardIDsJSON.value;
                    } catch(error){
                        console.log(error)
                    }
                
                 
                



                }
getCards();
            
/*
const winner = async function(match){
   try{
    
Compare the sums and display a message
const messageElement = document.getElementById("comp");
if (sumFirstThree < sumLastThree) {
    messagElement.innerHTML = "Computer Wins";
    
} else { (sumFirstThree == sumLastThree)
    messageElement.innerHTML = "No one wins!";
}

const messageElementtTwo = document.getElementById("comp");
if (sumFirstThree > sumLastThree) {
    messageElementtTwo.innerHTML = "You Win";
    
} else { (sumFirstThree == sumLastThree)
    messageElementtTwo.innerHTML = "No one wins!";
}
    } catch(error){
        console.log(error)
    }
    */
