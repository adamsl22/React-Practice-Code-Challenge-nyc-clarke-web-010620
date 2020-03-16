import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  renderSushi = () => {
    this.render()
  }
  
  render(){
    return (
      <Fragment>
        <div className="belt">
          <Sushi cash={this.props.cash} eat={this.props.eat}/>
          <Sushi cash={this.props.cash} eat={this.props.eat}/>
          <Sushi cash={this.props.cash} eat={this.props.eat}/>
          <Sushi cash={this.props.cash} eat={this.props.eat}/>
          <MoreButton more={this.renderSushi}/>
        </div>
      </Fragment>
    )
  }

}

export default SushiContainer