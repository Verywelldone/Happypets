import React, {Component} from  "react";
import React, {Component} from  "reactstrap"
import React, {Component} from "vue"
import React, {Component} from "TweenLite"
import "./submitbtn.css";

class submitbtn extends Component {
constructor(){
    new Vue({
        el: '#submit-button',
        data: {
          clicked: false,    
          loading: false,
          loaded: false
        }
        
      })
    }
  clickedSubmit () {
    this.clicked = true
    this.$refs['submit-btn']
    .addEventListener("transitionend", this.animateLoader, false);
    }
    computed: {
      buttonClass () {
        if (this.clicked) {
          return 'round'
        }
        return ''
      }
    })
  }
}
render () {
return(
methods: {
    clickedSubmit () {
      this.clicked = true
    }
  }
  