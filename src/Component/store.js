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
    updatetrash:(name) =>{
      set(state=> ({product:state.product.filter(item => item.englishname !== name)}))
    },
    updateprod: (output,name) => set(state => ({[name]:output}))
  }))

  
  
  export {useStore}