import React from 'react';

class EnterPress extends React.Component {
constructor(props) {
    super(props);
  this.handleKeyPress = this.handleKeyPress.bind(this);
}
handleKeyPress = (event) => {
  if(this.event.key === 'Enter'){
    // console.log('enter press here! ');
  }
}
}
export default EnterPress;