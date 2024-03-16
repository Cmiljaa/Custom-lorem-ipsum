const array = ["apple elephant mountain banana laptop sunshine book ocean guitar pizza butterfly basketball candle giraffe",
"moonlight flower helicopter strawberry cloud telescope tiger umbrella rainbow castle dolphin pineapple bicycle starfish coffee", 
"diamond kangaroo volcano lemonade snowflake dragon spaceship mushroom firework camera waterfall compass lion seashell spaceship",
"paintbrush popcorn coconut puzzle cricket dragonfly wristwatch peacock soccer crocodile jellyfish pineapple telescope strawberry",
"rainbow keyboard guitar coffee diamond helicopter bicycle basketball apple elephant mountain banana laptop sunshine book ocean",
"butterfly candle giraffe moonlight flower telescope tiger umbrella castle dolphin pizza cloud kangaroo volcano lemonade",
"snowflake dragon spaceship mushroom firework camera waterfall compass lion seashell spaceship paintbrush popcorn coconut",
"puzzle cricket dragonfly wristwatch peacock soccer crocodile jellyfish pineapple telescope strawberry rainbow keyboard",
"guitar coffee diamond helicopter bicycle basketball apple elephant mountain banana laptop sunshine book ocean butterfly",
"candle giraffe moonlight flower telescope tiger umbrella castle dolphin pizza cloud kangaroo volcano lemonade snowflake",
"dragon spaceship mushroom firework camera waterfall compass lion seashell spaceship paintbrush popcorn coconut puzzle",
"cricket dragonfly wristwatch peacock soccer crocodile jellyfish pineapple telescope strawberry rainbow keyboard guitar",
"coffee diamond helicopter bicycle basketball apple elephant mountain banana laptop sunshine book ocean butterfly candle",
"giraffe moonlight flower telescope tiger umbrella castle dolphin pizza cloud kangaroo volcano lemonade snowflake dragon",
"spaceship mushroom firework camera waterfall compass lion seashell spaceship paintbrush popcorn coconut puzzle cricket",
"dragonfly wristwatch peacock soccer crocodile jellyfish pineapple telescope strawberry rainbow keyboard guitar coffee",
"diamond helicopter bicycle basketball apple elephant mountain banana laptop sunshine book ocean butterfly candle",
"giraffe moonlight flower telescope tiger umbrella castle dolphin pizza cloud kangaroo volcano lemonade snowflake dragon",
"spaceship mushroom firework camera waterfall compass lion seashell spaceship paintbrush popcorn coconut puzzle cricket",
"dragonfly wristwatch peacock soccer crocodile jellyfish pineapple telescope strawberry rainbow keyboard guitar coffee",
"diamond helicopter bicycle basketball apple elephant mountain banana laptop sunshine book ocean butterfly candle",
"giraffe moonlight flower telescope tiger umbrella castle dolphin pizza cloud kangaroo volcano lemonade snowflake",
"dragon spaceship mushroom firework camera waterfall compass lion seashell spaceship paintbrush popcorn coconut",
"puzzle cricket dragonfly wristwatch peacock soccer crocodile jellyfish pineapple telescope strawberry rainbow",
"keyboard guitar coffee diamond helicopter bicycle basketball apple elephant mountain banana laptop sunshine",
"book ocean butterfly candle giraffe moonlight flower telescope tiger umbrella castle dolphin pizza cloud",
"kangaroo volcano lemonade snowflake dragon spaceship mushroom firework camera waterfall compass lion",
"seashell spaceship paintbrush popcorn coconut puzzle cricket dragonfly wristwatch peacock soccer crocodile",
"jellyfish pineapple telescope strawberry rainbow keyboard guitar coffee diamond helicopter bicycle basketball",
"apple elephant mountain banana laptop sunshine book ocean butterfly candle giraffe moonlight flower telescope"];

let p = document.querySelector('p');
let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click',(event) => {

    p.innerText="";
    let value = input.value;

    if(value=="")
    {
        alert('You must type something!');
    }
    else if(value <= 0 || value > 29)
    {
        alert("Wrong number!");
    }
    else
    {
        for (let index = 0; index < value; index++) {
            const element =  " " + array[index];
            p.innerText+= element;
        }
    }  
})