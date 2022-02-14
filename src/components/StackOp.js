
import React from 'react';
import '../App.css';
import StackComp from './StackOp/StackComp';
import SizeComp from './StackOp/SizeComp';

class StackOp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size_entered: false,
      size: 0,
      stack: []
    }
  }

  stack_push = (ele) => {
    var lis = this.state.stack
    if (lis.length === this.state.size) {
      alert('Stack Overflow!!')
    }
    else if (ele === ""){
      alert('Please enter something!')
    }
    else {
      lis.unshift(ele)
      this.setState({
        stack: lis
      })
    }
  }
  
  stack_pop = () => {
    if (this.state.stack.length === 0) {
      alert('Stack Underflow!!')
    }
    else {
      var lis = this.state.stack.slice(1, this.state.stack.length)
      alert(this.state.stack[0] + ' was popped');
      this.setState({
        stack: lis
      })
    }
  }

  update_size = (new_size) => {
    if (parseInt(new_size) <= 0) {
      alert('Please enter valid size')
    }
    else {
      this.setState({
        size_entered: true,
        size: parseInt(new_size)
      })
    }
    // console.log(typeof(this.sizeref.current.value))
  }

  render() {
    return (
      <div>
        {
          this.state.size_entered ?
            <StackComp
              stack={this.state.stack}
              stack_push={this.stack_push}
              stack_pop={this.stack_pop} /> :
            <SizeComp
              update_size={this.update_size} />
        }
      </div>
    )
  }
}

export default StackOp;


