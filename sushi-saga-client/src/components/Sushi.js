import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false,
    name: '',
    price: 0,
    img: ''
  }

  eatSushi = (e) => {
    if(this.props.cash >= this.state.price){
      this.setState({
        eaten: true,
      })
      this.props.eat
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/sushis')
    .then(resp => resp.json())
    .then(sushis => {

    const sushi = sushis[Math.floor(Math.random() * sushis.length)]
    this.setState({
      name: sushi.name,
      price: sushi.price,
      img: sushi.img_url
    })
  })
  }
  
  render() {
    console.log(this.state.img)
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.eatSushi}>
          { 
            this.state.eaten === 
            false ?
              <img src={`${this.state.img}`} width="100%"/>
            :
              <div className="empty-plate" />
          }
        </div>
        <h4 className="sushi-details">
          {this.state.name} - ${this.state.price}
        </h4>
      </div>
    );
  }
}

export default Sushi