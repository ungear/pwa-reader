import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/home.vue';
import BookComponent from '@/components/book.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name:"root", component: HomeComponent },
    { path: '/book/:bookId', name:"book", component: BookComponent },
  ]
})
