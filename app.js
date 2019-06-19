// Custom Tag
Vue.component('ohm',{
    data:function(){
        return{
            count:0
        }
    },
    template:'<button v-on:click="count++">Click :{{count}}</button>'
});

Vue.component('post', {
    props:['title'],
    template:'<h3>{{title}}</h3>'
});

Vue.component('showview', {
    props: {
        title:{
            type:String,
            required:true
        },
        view:{
            type:Number,
            default:0
        }
    },
    template:'<h3>{{title}} | {{view}}</h3>'
});

Vue.component('showcomment',{
    //ตัวหนา เอียง
    //การแสดงผ่านตัว props
    props:['commentpost'],
    template:'<li><i>{{commentpost}}</i><li>'    
});

new Vue({
    el:"#vue-app",
    data:{
        newComment:'',
        comments:[
            'สวัสดีตอนเช้า','ทักทาย','ยินดีด้วย','สบายดี','กำลังนอน'
        ]
    },
    methods: {
        addComment:function(){
            this.comments.push(this.newComment)
            this.newComment=''
        }
    },
});