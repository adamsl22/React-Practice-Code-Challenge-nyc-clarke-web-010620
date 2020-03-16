import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
          onClick={() => props.eat(props.sushi.price, props.sushi.id)}>
        { 
          !props.eaten.includes(props.sushi.id) &&
          <img src={`${props.sushi.img_url}`}/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  );
}

export default Sushi