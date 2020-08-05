import create from 'zustand'

 const [useStore] = create(set => ({
    product: [],
    rice:[],
    oil:[],
    beauty:[],
    nut:[],
    spice:[],
    pulse:[],
    update: (prop) => set(state => ({product:[...state.product, prop]})),
    updateprod: (output,name) => set(state => ({[name]:output}))
  }))

  
  
  export {useStore}