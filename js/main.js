
Vue.component('test-component',{   
    //props:['premuim'],
    props:{
        premuim:{type:String,required:true}
    },
    template:`
            <div>
                <h1>{{newMessage}}</h1>
                <hr>
                <p style="color:tomato;">Shiping is : {{Shipping}}</p>
            </div>
            `,
    data(){
        return{
            newMessage:"Component with my own data"
        }
    },
    computed:{
        Shipping(){
            if(this.premuim){
                 return "Free"
            }
            return 2.99
        }
    }
});

/*
Vue.component('todo-item',{
    template:`
    <div>
        <span>{{msg}}</span>   
        <li>
            <input type="checkbox" v-bind="{checked: todo.isCompleted}">

            <span v-bind:class="{isCompleted: todo.isCompleted,
                                inCompleted: !todo.isCompleted}">
                {{todo.text}}
            </span>
        </li>
        <button v-on:click="$emit('greet', todo.text)">Say something</button>
    </div>
    `,
    props:['todo','msg']
});

*/
Vue.component("add-new-cart",{
    template:`<button @click="add" id="emit">Click</button>`,
    methods:{
        add(){
            this.$emit('add-to-cart');
        }
    }
})
var app = new Vue({
    el: '#app',
    data:{
        message:"Hello Stephen!",
        premuim:false,
        userData:"",
        messageColor:false,
        visible:true,
        count:0,
        cart:2,
        price:0,
        countLimit:false,
        todos:
        [
            {text:'Cook Rice', completed:true},
            {text:'Wash Cloths', completed:false},
            {text:'Code', completed:true},
        ]
    },
    methods: {
        upCount(){
            this.count += 1;
            if(this.count === 1){
                this.countLimit = false;
            }
        },

        downCount(){            
            this.count -= 1;
            if(this.count === 0){
                this.countLimit = true;
            }
        },

        moneyFormatted:function(price){
            return ("₦" + price + ".00");
        },
        updateCart(){
            this.cart +=1
        }
    },
    computed: {
        tax(){
            return (parseInt(this.price) * 0.2)
        },
        total(){
            return (parseInt(this.tax) + parseInt(this.price))
        }
    },
});


var app2 = new Vue({
    el: '#app2',
    data:{
        name:"OVERVUE",
    }
})