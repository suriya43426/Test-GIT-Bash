new Vue({
    el:'#vue-app2',
    data:{
        name:"Suriya C",
        job:"engineer",
        age:0,
        status:false,
        website: 'http://www.ksl-calc.com'
    },
    method :{
        getName:function(){
            return this.name
        },
        setName:function(n){
            return this.name=n
        },
        addAge:function(){
            this.age++;
            console.log(this.age);
        },
        SubtractAge:function(){
            this.age--;
            console.log(this.age);
        }

    }
})