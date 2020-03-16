import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  state = {
    startIndex: 0
  }

  nextPage = () => {
    let newIndex = this.state.startIndex + 4
    if(newIndex >= this.props.sushis.length){newIndex = 0}
    this.setState({
      startIndex: newIndex
    })
  }

  renderSushis = () => {
    let fourSushis = this.props.sushis.slice(this.state.startIndex,this.state.startIndex + 4)
    return fourSushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eat={this.props.eat} eaten={this.props.eaten}/>)
  }

  render(){
    return (
      <Fragment>
        <div className="belt">
          {this.renderSushis()}
          <MoreButton more={this.nextPage}/>
        </div>
      </Fragment>
    )
  }

}

export default SushiContainer