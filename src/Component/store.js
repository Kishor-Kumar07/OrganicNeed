import create from 'zustand'

 const [useStore] = create(set => ({
    product: [],
    update: (prop) => set(state => ({product:[...state.product, prop]}))
  }))

  
  
  export {useStore}