new Vue({
    el:'#vue-app',
    data:{
        newData:{
            empName:'',
            salary:0
        },
        empGroup:[
        {
            empName:"สมพร",
            salary:5000
        },
        {
            empName:"สมศรี",
            salary:4000
        }
        ]
    },methods:{
        addEmp:function(){
            this.empGroup.push({
                empName: this.newData.empName,
                salary: this.newData.salary
            });
            this.newData.empName = '';
            this.newData.salary = 0;
        },showMessage:function(){
            console.log("Send data");
        }
    },
    computed:{
        summation:function(){
            var sum = this.empGroup.reduce(function(value, data) {
            return value + Number(data.salary);
            },0);
            return sum;
        },
        avg:function(){
            var sum = this.empGroup.reduce(function(value, data) {
            return value + Number(data.salary);
            },0);
            return sum/this.empGroup.length;
        }
    }, watch: {
        //หลังจากที่ avg ทำงานเสร็จ
        //ให้ไปใช้งานคำสั่ง showMessage
        summation: function(){
            this.showMessage();
        }
    }
});