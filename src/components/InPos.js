import React from 'react'
import { motion } from 'framer-motion'

let infref = React.createRef()
const InPos = () => {
  var topp = -1
  var stackarr = []

  const push = (e) => {
    topp++;
    stackarr[topp] = e;
  }

  const pop = () => {
    if (topp === -1)
      return 0;
    else {
      var popped_ele = stackarr[topp];
      topp--;
      return popped_ele;
    }
  }

  const operator = (op) => {
    if (op === '+' || op === '-' ||
      op === '^' || op === '*' ||
      op === '/' || op === '(' ||
      op === ')') {
      return true;
    }
    else
      return false;
  }

  // Function to return the precedency of operator
  const precedency = (pre) => {
    if (pre === '@' || pre === '(' || pre === ')') {
      return 1;
    }
    else if (pre === '+' || pre === '-') {
      return 2;
    }
    else if (pre === '/' || pre === '*') {
      return 3;
    }
    else if (pre === '^') {
      return 4;
    }
    else
      return 0;
  }

  // Function to convert Infix to Postfix
  const InfixtoPostfix = () => {

    // Postfix array created
    var postfix = [];
    var temp = 0;
    push('@');
    var infixval = infref.current.value

    // Iterate on infix string
    for (var i = 0; i < infixval.length; i++) {
      var el = infixval[i];

      // Checking whether operator or not
      if (operator(el)) {
        if (el === ')') {
          while (stackarr[topp] !== "(") {
            postfix[temp++] = pop();
          }
          pop();
        }

        // Checking whether el is (  or not
        else if (el === '(') {
          push(el);
        }

        // Comparing precedency of el and
        // stackarr[topp]
        else if (precedency(el) > precedency(stackarr[topp])) {
          push(el);
        }
        else {
          while (precedency(el) <=
            precedency(stackarr[topp]) && topp > -1) {
            postfix[temp++] = pop();
          }
          push(el);
        }
      }
      else {
        postfix[temp++] = el;
      }
    }

    // Adding character until stackarr[topp] is @
    while (stackarr[topp] !== '@') {
      postfix[temp++] = pop();
    }

    // String to store postfix expression
    var st = "";
    for (i = 0; i < postfix.length; i++)
      st += postfix[i];

    // To print postfix expression in HTML
    // console.log(st)
    document.getElementById('postx').innerText = st
    document.getElementById('inp').value = ''
  }

  return (
    <div className="flex flex-col content-evenly justify-center items-center font-Manrope bg-indigo-100  shadow-lg shadow-indigo-400 py-16 px-16 rounded-3xl">

      <div>
        <label className='flex -mt-8 -mb-3 text-[25px] text-indigo-900 font-extrabold'>Infix</label>
      </div>

      <div>
        <motion.input
          whileFocus={{
            scale: 1.05,
            transition: { ease:'easeInOut', duration: 0.3 },
          }}
          className="w-full my-4 rounded-xl border-indigo-400 border-opacity-50 focus:border-indigo-300 focus:ring focus:ring-indigo-300 focus:ring-opacity-50 shadow-lg bg-indigo-50 shadow-indigo-200 border-transparent font-extrabold text-center text-indigo-900" type="text" ref={infref} id='inp'></motion.input>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <motion.button
          whileHover={{
            scale: 1.05,
            transition: { ease:'easeInOut', duration: 0.3 }
          }}
          className="shadow-lg shadow-indigo-300 bg-indigo-500 rounded-3xl hover:bg-indigo-600 p-0 mx-16 font-extrabold w-32 h-12 text-xl antialiased hover:text-indigo-50 tracking-wider" onClick={InfixtoPostfix}>Submit</motion.button>
      </div>
      <div className='flex flex-col justify-center shadow-lg shadow-indigo-300 items-center w-[220px] bg-indigo-500 rounded-3xl mt-8 -mb-6'>
        <label className='flex my-5 text-[24px] text-indigo-100 font-extrabold'>Postfix</label>
        <div className='flex flex-col justify-center shadow shadow-indigo-500 items-center bg-indigo-100 w-[150px] h-12 mb-8 rounded-3xl'>
          <motion.div 
          className="flex my-5 text-[18px] text-indigo-900 font-extrabold" id='postx'>
          </motion.div>
        </div>

      </div>


    </div>
  )
}

export default InPos;
