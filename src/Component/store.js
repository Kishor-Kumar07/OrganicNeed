import create from 'zustand'

 const [useStore] = create(set => ({
    product: [],
    output:[],
    rice:[],
    oil:[],
    beauty:[],
    nut:[],
    spice:[],
    pulse:[],
    mix:[],
    update: (prop) =>
    {
    set(state => 
      ({product:[...state.product, prop]}))
 },
 plus:(index,product,prop)=>{
set(state => 
  ({[prop]:product.filter(item=>item)}))
 },
 minus:(index,product,prop)=>{
  set(state => 
    ({[prop]:product.filter(item=>item)}))
   },
    updatetrash:(name) =>{
      set(state=> ({product:state.product.filter(item => item.englishname !== name)}))
    },
    trash:() =>{
      set(state=> ({product:[]}))
    },
    updateprod: (output,name) => set(state => ({[name]:output}))
  }))

  
  
  export {useStore}