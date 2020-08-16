import create from 'zustand'

 const [useStore] = create(set => ({
    product: [],
    rice:[],
    oil:[],
    beauty:[],
    nut:[],
    spice:[],
    pulse:[],
    update: (prop) =>
    {
    set(state => 
      ({product:[...state.product, prop]}))
 },
 plus:(index,product)=>{
set(state => 
  ({product:product.filter(item=>item)}))
 },
 minus:(index,product)=>{
  set(state => 
    ({product:product.filter(item=>item)}))
   },
    updatetrash:(name) =>{
      set(state=> ({product:state.product.filter(item => item.englishname !== name)}))
    },
    trash:() =>{
      set(state=> ({product:state.product.filter(item => item)}))
    },
    updateprod: (output,name) => set(state => ({[name]:output}))
  }))

  
  
  export {useStore}