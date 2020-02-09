new Vue(
   { el:'#app',
data:{
    youHP:100,
    monHP:100,
    inProgress:false,
    moves:[],
    result:""
},
methods:{
    startgame:function () {
        this.inProgress=!this.inProgress
        this.youHP=100
        this.monHP=100
        this.result=''
    },
    attack:function(){
        let monAttack=Math.floor(Math.random()*10);
        let youAttack=Math.floor(Math.random()*10);
        this.moves.push('Monster attacks you for ' + monAttack )
        this.moves.push('You attack monster for ' + youAttack )
        if(this.youHP>monAttack)
        {
            this.youHP-=monAttack
        }
        else this.youHP=0

        if(this.monHP>youAttack)
        {
            this.monHP-=youAttack
        }
        else this.monHP=0


        
        
    },
    heal:function(){
        let hp=Math.floor(Math.random()*20);
        if(this.youHP<100)
        this.youHP+=hp
    },
    splAttack:function(){

    }
},
watch: {
    youHP:function(){
        if(this.youHP==0)
        {
       this.inProgress=!this.inProgress
        this.result='Monster win'
        this.moves=[]
        }
    },
    monHP:function(){
        if(this.monHP==0)
        {
            this.inProgress=!this.inProgress
            this.result='You win'
            this.moves=[]
        }
      
    }
},
}
)