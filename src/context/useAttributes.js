import { useState } from 'react';
import { ATTRIBUTE_LIST_WITH_NUMBER } from '../consts.js';

function useAttributes() {
    const [attributes, setAttributes] = useState(ATTRIBUTE_LIST_WITH_NUMBER)

    const increment = (attributeName) => {
      setAttributes(prevAttributes => prevAttributes.map(attr => 
        attr.name === attributeName ? {...attr, value: attr.value + 1} : attr
      ));
    }
  
    const decrement = (attributeName) => {
      setAttributes(prevAttributes => prevAttributes.map(attr => 
        attr.name === attributeName ? {...attr, value: attr.value - 1} : attr
      ));
    }

    const calculateModifier = (value) => {
        return Math.floor((value- 10)/ 2);
    }

    return {attributes, increment, decrement, calculateModifier}

    
}

export default useAttributes