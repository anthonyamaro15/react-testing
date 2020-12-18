import React, { useState } from 'react';


const Form = () => {
   const [value, setValue] = useState();
   const updateValue = e => {
      
   }
   return (
      <div>
         <form>
            <input value="hi" placeholder="name" onChange={updateValue} />
            <button>submit</button>
         </form>
      </div>
   )
}

export default Form;