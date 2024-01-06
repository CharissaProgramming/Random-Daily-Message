//Global variables

const nounArr = ["oranges","watermelon","penguins","cats","dogs","elephants","apple","banana","car","dog","elephant","flower","guitar","house","island","jacket","kite","lamp","mountain","notebook","ocean","piano","quilt","river","sunflower","tree","umbrella","violin","waterfall","xylophone","yacht","zebra"];

const adjectiveArr = ["awesome","brilliant","colorful","delightful","energetic","fearless","graceful","happy","imaginative","joyful","kind","lively","mysterious","playful","quiet","radiant","shimmering","tranquil","unique","vibrant","whimsical","zealous"];

const verbArr = ["dance","explore","fly","glisten","hike","illuminate","jump","laugh","migrate","navigate","observe","play","question","relax","sing","travel","unwind","venture","whisper","xerox","yodel","zip"];

const locationArr = ["Paris","New York","Tokyo","Sydney","London","Rio de Janeiro","Cape Town","Dubai","Barcelona","Venice","Marrakech","Bali","Santorini","Kyoto","Reykjavik","Banff","Amsterdam","Prague","Cairo","Hawaii","Monte Carlo","Vancouver","here","Stockholm","Copenhagen"];
//Functions

//This function takes in a noun array, an adjective array, and a verb array.  It will then return a message that includes one random element from each arrays.

const randomMessage = (nounArr, adjectiveArr, verbArr, locationArr) => {

    let noun = nounArr[Math.floor(Math.random()*nounArr.length)];
    const adjective = adjectiveArr[Math.floor(Math.random()*adjectiveArr.length)];
    const verb = verbArr[Math.floor(Math.random()*verbArr.length)];
    const location = locationArr[Math.floor(Math.random()*locationArr.length)];

    const preposition = () => {
        return locationArr == 'here' ? 'right here' : 'over in';
    }

    noun = noun[0].toUpperCase() + noun.slice(1).toLowerCase();
    return `${noun} will always be ${adjective}! \nSo why not just ${verb} ${preposition()} ${location}?`;
}


//This function manipulates the html document to hide the button after it's been clicked and display the message of the day.
function showMessage(){    
    const message = document.getElementById('message');
    const messageBox = document.getElementById('message-content');
    const button = document.getElementById("button");

    console.log((randomMessage(nounArr, adjectiveArr, verbArr, locationArr)));

    message.textContent = (randomMessage(nounArr, adjectiveArr, verbArr, locationArr));
    button.style.display = 'none';
    messageBox.style.display = 'block';
    

}       

const button = document.getElementById("button");
button.addEventListener('click', (e) => showMessage());