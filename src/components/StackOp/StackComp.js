
import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';

class StackComp extends React.Component {
  constructor(props) {
    super(props);
    this.numref = React.createRef()
  }

  cancelCourse = () => {
    document.getElementById("ele_inp").value = "";
  }

  render() {
    return (
      <div className='flex flex-col justify-center p-auto'>
        <div className='flex flex-col mt-[100px] justify-center items-center mb-5 font-Manrope bg-indigo-100 shadow-lg shadow-indigo-400  py-10 rounded-3xl'>
          <motion.div
          animate ={{scale: [0,1.1,1]}}
          transition ={{duration: 2, ease: 'easeInOut'}}
          // transition={{duraion}: 1.2}
          className='ease-in-out duration-300 flex flex-col justify-center  items-center rounded-3xl bg-indigo-500 shadow-lg shadow-indigo-400 w-[190px] py-2'>
            {
              this.props.stack.map((item, index) => {
                return (
                  <motion.div  
                  className="flex flex-col-rev items-center justify-center  rounded-full shadow-lg shadow-indigo-600 my-2 mx-16 bg-indigo-100 w-[150px] text-center h-12" key={index.toString()}>
                    {
                      <motion.div
                      className='flex flex-col my-2.5 font-extrabold text-center text-indigo-500 text-[20px]'>
                        {item}
                      </motion.div>
                    }
                  </motion.div>
                )
              })
            }
          </motion.div>

        </div>
        <div className>
          <div className="flex mb-[100px] justify-center justify-items-center h-[8rem] w-[20rem] font-Manrope bg-indigo-100  shadow-lg shadow-indigo-400 py-10 rounded-3xl">
            <div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="shadow-xl shadow-indigo-300 bg-indigo-500 rounded-3xl hover:bg-indigo-600 pb-0.5 mx-2 font-extrabold w-20 h-12 text-xl antialiased hover:text-indigo-50 tracking-wider"
                onClick={() => { this.props.stack_push(this.numref.current.value); this.cancelCourse(); }}>
                Push</motion.button>
            </div>
            <div>
              <motion.input
                whileFocus={{
                  scale: 1.05,
                  transition: { ease:'easeInOut', duration: 0.3 },
                }}
                className="w-12 h-12 mx-1 shadow-xl shadow-indigo-300 rounded-full border-indigo-400 border-opacity-50 focus:border-indigo-300 focus:ring focus:ring-indigo-300 focus:ring-opacity-50 bg-indigo-50 border-transparent font-extrabold text-center text-indigo-500" type="text" ref={this.numref} id="ele_inp" />
            </div>
            <div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  transition: { ease:'easeInOut', duration: 0.3 },
                }}
                className="shadow-xl shadow-indigo-300 bg-indigo-500 rounded-3xl hover:bg-indigo-600 pb-0.5 mx-2 font-extrabold w-20 h-12 text-xl antialiased hover:text-indigo-50 tracking-wider"
                onClick={this.props.stack_pop}>Pop
              </motion.button>
            </div>
          </div>
        </div>

      </div>);
  }
}

export default StackComp;


