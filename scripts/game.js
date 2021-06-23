let game = {

    tockMoude:false,
    firstCard:null,
    secondCard:null,

    setCard:function(id){

    let card = this.cards.filter(card=>card.id===id)[0];
    console.log(card);

        if(card.flipped || this.lockMode){
            return false;
        }

        if(!this.firstCard){
            this.firstCard = card;
            return true;

        }else{
            this.secondCard = card;
            this.lockMode = true;
            return true;
        }

        
    },

    checkMatch:function(){
        if(!this.firstCard || !this.secondCard){
            return false;
        }

        return this.firstCard.icon == this.secondCard.icon;
   },

   clearCards:function(){
       this.firstCard = null;
       this.secondCard = null;
       this.lockMode = false;
   },

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


 creatIdwidthTech:function (tech){       /*Erro nessa Linha Corrigir declaração nome de função*/
     
    return tech + parseInt(Math.random()*1000);
}
