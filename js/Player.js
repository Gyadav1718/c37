class Player{
    constructor(){
        this.name = null,
        this.distance = 0,
        this.Index = null 
    }
    getCount(){
        var playerCountref=database.ref('playerCount');
        playerCountref.on("value",function(data){
        playerCount = data.val();
        });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }
    update(){
        var playerIndex = "players/player"+this.Index;
        database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        });
    }

     static getPlayerinfo(){
         var palyerInfo = database.ref('players');
         playerInfo.on("value",(data)=>{
         allPlayers = data.val();
         });
     }
    }

