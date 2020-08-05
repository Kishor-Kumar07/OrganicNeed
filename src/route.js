import Home from './Views/home.js'
import Shop from './Views/shop.js'
import Collection from './Views/collection.js'
import Blogs from './Views/blogs.js'
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
      path: "/:handle",
      name: "shop",
      component: Shop
    },
    {
      path: "/collections",
      name: "collection",
      component: Collection
    },
    {
      path: "/blogs",
      name: "blogs",
      component: Blogs
    }
  ];
  
export default Routes;