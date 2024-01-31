import { useState } from 'react';
import { SKILL_LIST } from '../consts.js';

function useSkills({calculateModifier, attributes}){
    const [skillPoints, setSkillPoints] = useState(SKILL_LIST.reduce((acc, skill) => ({ ...acc, [skill.name]: 0 }), {}));

    const totalPoints = 10 + (4 * calculateModifier(attributes.find(attr => attr.name === 'Intelligence').value));

    const incrementSkill = (skillName) => {
      setSkillPoints(prevPoints => ({ ...prevPoints, [skillName]: prevPoints[skillName] + 1 }));
    }
  
    const decrementSkill = (skillName) => {
      setSkillPoints(prevPoints => ({ ...prevPoints, [skillName]: Math.max(prevPoints[skillName] - 1, 0) }));
    }

    return {skillPoints, totalPoints, incrementSkill, decrementSkill}

}

export default useSkills