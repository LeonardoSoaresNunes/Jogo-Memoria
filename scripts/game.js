let game = {
     techs : ['bootstrap',
'css',
'react',
'php',
'node',
'js',
'htmlcss',
'python',
'c#',
'c'],

 cards : null,
  createCardsFromTechs:function(techs){
   this.cards = [];
    for (let tech of techs){
        this.cards.push(this.createPairFromTech(tech));

    }
    return this.cards.flatMap(pair => pair);},

    createPairFromTech: function (tech){
        return [{
            id:this.creatIdwidthTech(tech),
            icon:tech,
            flipped:false,
        },{
            id:this.creatIdwidthTech(tech),
            icon:tech,
            flipped:false,
        }]
    }
}
 creatIdwidthTech:function (tech){
     
    return tech + parseInt(Math.random()*1000);
}
