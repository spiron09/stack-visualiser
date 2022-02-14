import React from 'react';
import { AlertContainer, alert } from 'react-custom-alert';
import { motion } from 'framer-motion';
class SizeComp extends React.Component {
    constructor({ props }) {
        super(props);
        this.sizeref = React.createRef()
    }
    cancelCourse = () => {
        document.getElementById("ele_inp").value = "";
    }

    render() {
        return (
            <motion.div 
            // whileHover={{
            //     scale: 1.01,
            //     transition: { duration: 0.4 },
            //   }}
            //   whileTap={{
            //     scale: 1,
            //     transition: { duration: 0.4 }
            //   }}
            className="flex flex-col content-evenly justify-center items-center font-Manrope bg-indigo-100  shadow-xl shadow-indigo-400 py-16 px-16 rounded-3xl">
                <div className='flex -mt-8 -mb-3 text-[35px] text-indigo-900 font-extrabold'>
                    <label>Enter Size</label>
                </div>
                <div className="flex m-6">
                    <motion.input 
                    whileFocus = {{
                        scale: 1.05,
                        transition: { ease:'easeInOut', duration: 0.3 },
                    }}
                    className=" shadow-lg shadow-indigo-300 w-full rounded-xl border-indigo-400 border-opacity-50 focus:border-indigo-300 focus:ring focus:ring-indigo-300 focus:ring-opacity-50  bg-indigo-50  border-transparent font-extrabold text-center text-indigo-500" type="number" ref={this.sizeref} />
                </div>
                <div className="flex -mb-6">
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            transition: { ease:'easeInOut', duration: 0.3 },
                        }}
                        whileTap={{ scale: 1 }}
                        className="shadow-lg shadow-indigo-300 bg-indigo-500 rounded-3xl hover:bg-indigo-600 p-0 mx-16 font-extrabold w-32 h-12 text-xl antialiased hover:text-indigo-50 tracking-wider" 
                        onClick={() => { this.props.update_size(this.sizeref.current.value) }}>Submit</motion.button>
                </div>
            </motion.div>
        );
    }
}

export default SizeComp;