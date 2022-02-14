
import React from 'react';
import './App.css';
import InPos from './components/InPos';
import StackOp from './components/StackOp';
import { motion } from 'framer-motion';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      check_op: 0,
    }
  }

  handleS_op = () => {
    this.setState({
      check_op: 1
    })
    // console.log(this.state.check_op)
  }

  handleIP_op = () => {
    this.setState({
      check_op: 2
    })
    // console.log(this.state.check_op)
  }

  render() {
    return (
      <div className="flex justify-center items-center w-full min-w-full h-full min-h-screen bg-indigo-300 text-indigo-50 font-Manrope">
        {this.state.check_op === 0 ?
          <motion.div
            // animate={{ scale: [0.9, 1, 1] }}
            // whileHover={{
            //   scale: 1.01,
            //   transition: { duration: 0.4 },
            // }}
            // whileTap={{
            //   scale: 1,
            //   transition: { duration: 0.4 }
            // }}
            className="flex justify-start justify-items-center bg-indigo-100  shadow-lg shadow-indigo-400 py-16 px-16 rounded-3xl">
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: {ease:'easeInOut', duration: 0.3 },
              }}
              whileTap={{ scale: 1 }}
              className="shadow-lg 
              shadow-indigo-300 
              bg-indigo-500 rounded-3xl 
              hover:bg-indigo-600 
              p-0 mx-16 
              font-extrabold 
              w-48 
              h-16 
              text-xl  
              antialiased 
              hover:text-indigo-50 
              tracking-wider"
              onClick={() => this.handleS_op()}>
              Stack Operations
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                transition: {ease:'easeInOut', duration: 0.3 },
              }}
              whileTap={{ scale: 1 }}
              className="shadow-lg
              shadow-indigo-300 
              bg-indigo-500 
              rounded-3xl 
              hover:bg-indigo-600 
              p-4 
              mx-16
              font-extrabold 
              w-48 
              h-16 
              text-xl  
              antialiased 
              hover:text-indigo-50 
              tracking-wider"
              onClick={() => this.handleIP_op()}>
              Infix-Postix
            </motion.button>
          </motion.div> :
          this.state.check_op === 1 ?
            <StackOp></StackOp> :
            <InPos></InPos>
        }
      </div>
    )
  }
}

export default App;


