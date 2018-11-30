import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "../utils/MyButton";


export default class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  }

  percentage = () => {
    if(this.state.discountStart < this.state.discountEnd){
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate(){
    setTimeout(() => {
      this.percentage()
    }, 30)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal ={() => this.percentage()}
          >
            <div className="discount_percentage">
              <span>{this.state.discountStart}&amp;</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase Your Flowers 1 Month Before Your Event</h3>
              <p>
                Plan to get your flowers for your event 1 month before the
                expected date! By doing it this way we can ensure that we have
                the best hand picked flowers from our garden ready for you. You
                also get to enjoy an amazing 30% off discount. Everyone Wins!
              </p>

              <MyButton 
                text="Purchase Flowers"
                bck="#FFA800"
                color="#FFF"
                link="https://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
