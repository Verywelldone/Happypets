import React from 'react';
import { keydownScoped } from 'react-keydown';
 
class EnterPress extends React.Component {
 
  @keydownScoped( 'enter' ) // or specify `which` code directly, in this case 13
  submit() {

  }
}
export defoult EnterPress;