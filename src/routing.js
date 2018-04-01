import VueRouter from 'vue-router'
import HomeComponent from './components/home.vue';
import BookComponent from './components/book.vue';

const routes = [
  { path: '/', name:"root", component: HomeComponent },
  { path: '/book/:bookId', name:"book", component: BookComponent },
]
export default new VueRouter({
  routes
})