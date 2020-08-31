import React, { Component } from 'react'
import Admin from './Admin'
 class App extends Component {
  constructor(props)
  {
      super(props)
      this.state={
          output:[],
          oil:[],
          nut:[],
          pulse:[],
          rice:[],
          spice:[],
          beauty:[],
          mix:[]
      }
  }
  async componentDidMount()
  {
      var output,oil,rice,spice,pulse,beauty,nut,mix;
  output = await (await fetch('http://13.233.120.227:8080/api/products')).json()
  oil= await(await fetch('http://13.233.120.227:8080/api/products?category=Oil')).json()
  mix= await(await fetch('http://13.233.120.227:8080/api/products?category=Readymix')).json()
  rice= await(await fetch('http://13.233.120.227:8080/api/products?category=Rice')).json()
  spice= await(await fetch('http://13.233.120.227:8080/api/products?category=Spices')).json()
  pulse= await(await fetch('http://13.233.120.227:8080/api/products?category=Pulses')).json()
  beauty= await(await fetch('http://13.233.120.227:8080/api/products?category=Beauty products')).json()
  nut= await(await fetch('http://13.233.120.227:8080/api/products?category=Nuts')).json()
  this.setState({ output: output,fetched:true,oil:oil,mix:mix,spice:spice,nut:nut,rice:rice,beauty:beauty,pulse:pulse })
  }
  render() {
    return (
      <div>
        <Admin state={this.state}/>
      </div>
    )
  }
}
export default App;