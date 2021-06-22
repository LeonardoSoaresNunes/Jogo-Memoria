const front = "card_front"
const back ="card_back"

let techs = ['bootstrap',
'css',
'react',
'php',
'node',
'js',
'htmlcss',
'python',
'c#',
'c'];

createCardsFromTechs(techs);

function createCardsFromTechs(techs){
    let cards = [];
    for (let tech of techs){
        cards.push(createPairFromTech(tech));

    }
    return cards.flatMap(pair => pair);

    function createPairFromTech(tech){
        return [{
            id:creatIdwidthTech(tech),
            icon:tech,
            flipped:false,
        },{}]
    }
}

function creatIdwidthTech(tech){
    return tech + parseInt(Math.random()*1000);
}
