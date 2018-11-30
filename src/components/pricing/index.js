import React, { Component } from 'react';
import { log } from 'handlebars';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';


export default class index extends Component {
  state = {
    prices: [100, 150, 250],
    title: ["Birthday Party", "Mother's Day Event", "Small Wedding"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae magni quasi mollitia similique commodi voluptatem reiciendis dolorum. Enim, aliquam exercitationem!",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae magni quasi mollitia similique commodi voluptatem reiciendis dolorum. Enim, aliquam exercitationem!",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae magni quasi mollitia similique commodi voluptatem reiciendis dolorum. Enim, aliquam exercitationem!",
    ],
    linkto: ['https://google.com', 'https://google.com', 'https://google.com'],
    delay: [500,0,500]
  }

  showBoxes = () => {
    return (
      this.state.prices.map((box, i) => (
      <Zoom delay ={this.state.delay[i]} key={i}> 
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
          
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.title[i]}</span>
            </div>
            <div className="pricing_description">
              <span>{this.state.desc[i]}</span>
            </div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#fff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
      )
      )
    )
  }

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    )
  }
}
