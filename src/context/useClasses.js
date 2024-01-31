import { useState } from 'react';

function useClasses({attributes}){
    const [selectedClass, setSelectedClass] = useState(null)

    const checkRequirements = (requirments) => {
        return Object.entries(requirments).every(([attrName, minValue]) => {
            const attribute = attributes.find(attr => attr.name === attrName)
            return attribute && attribute.value >= minValue
        })
    }

    const handleClassClick = (className, requirements) => {
        setSelectedClass({name: className, requirements})
    }

    return {
        checkRequirements,
        handleClassClick,
        selectedClass, 
    }
}

export default useClasses