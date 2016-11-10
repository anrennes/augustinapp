import Home from 'components/Home/home';
import Posts from 'components/Posts/posts';
import Post from 'components/Posts/post';
import Sandwichs from 'components/sandwich/sandwichs';
import NotFound from 'components/NotFound/notFound';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/sandwichs',
    component: Sandwichs
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
