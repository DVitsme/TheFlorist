import React from 'react';
import { scroller } from 'react-scroll';


import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
  const scrollToElement = (el) => {
    scroller.scrollTo(el, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    });
    props.onClose(false);
  }
  return <div>
      <Drawer anchor="right" open={props.open} onClose={() => props.onClose(false)}>
        <List component="nav">
        <ListItem button onClick={() => scrollToElement("Featured")}>
            Back To Top
          </ListItem>

          <ListItem button onClick={() => scrollToElement("LocationInfo")}>
            Our Hours
          </ListItem>

          <ListItem button onClick={() => scrollToElement("AboutUs")}>
            About Us
          </ListItem>

          <ListItem button onClick={() => scrollToElement("Pricing")}>
            Pricing
          </ListItem>

        <ListItem button onClick={() => scrollToElement("Map")}>
            Locations
          </ListItem>
        </List>
      </Drawer>
    </div>;
};

export default SideDrawer;