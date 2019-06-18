new Vue({
    el:"#vue-app",
    data:{
        name:"suriya Chayatummagoon",
        job:"Software Engineer",
        age:"32 Years",
        status:"false",
        website:'http://www.ksl-calc.com'
    },
    methods:{
        getName:function(){
            return this.name
        },
        setName:function(n){
            return this.name=n
        },
        addAge:function(){

        },
        SubtractAge:function(){

        }
    }
})