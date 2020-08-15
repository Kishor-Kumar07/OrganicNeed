import Home from './Views/home.js'
import Cart from './Views/cart.js'
import Checkout from './Views/checkout.js'
import Blogs from './Views/blogs.js'
import About from './Views/about.js'
import Category from './Component/category'

const Routes = [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/category/:product",
      name: "category",
      component: Category
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout
    },
    {
      path: "/blogs",
      name: "blogs",
      component: Blogs
    },
    {
      path: "/aboutus",
      name: "About Us",
      component: About
    }
  ];
  
export default Routes;