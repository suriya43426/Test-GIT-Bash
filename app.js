var post=new Vue({
    el:"#post",
    data:{
        title:'ส่งโปรเจค',
        message:'รายละเอียดโปรเจค'
    }
});

var comment=new Vue({
    el:"#comment",
    data:{
        text:'อากาศดีมาก'
    }
});

var likeSystem=new Vue({
    el:"#likeSystem",
    data:{
        like:true
    },
    methods:{
        changeLike:function(){
            console.log("like");
        }
    }
});