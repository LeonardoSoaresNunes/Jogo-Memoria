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
  createCardsFromTechs:function(){
   this.cards = [];

   this.techs.forEach(tech => {
    this.cards.push(this.createPairFromTech(tech));
       
  /*
    for (let tech of techs){
 */
        

    })
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
