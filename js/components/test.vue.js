
Vue.component('test-component',{    
    props:[message],
    template:`
            <div>
                <h1>{{newMessage}}</h1>
                <h2>{{message}}</h2>
            </div>
            `,
    data(){
        return{
            newMessage:"I am a test Component with my own data"
        }
    }
});