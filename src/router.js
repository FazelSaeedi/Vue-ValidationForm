import Vue from 'vue';
import Router from 'vue-router';
import Form1 from "@/components/Form1";
import HelloWorld from "@/components/HelloWorld";

Vue.use(Router)

export default new Router({
    base: '/dist/',
    mode : "history",
    routes: [
        {
            path: '/form1',
            name: 'Form1',
            component: Form1
        },
        {
            path: '/Home' ,
            name : 'HelloWorld',
            component: HelloWorld
        }
    ]
})

