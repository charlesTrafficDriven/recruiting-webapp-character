import useSkills from '../context/useSkills.js';
import {  SKILL_LIST} from '../consts.js';
import '../css/Attributes.css';
// import Skills from './Skills.js';

export default function Attributes({attributes, increment, decrement, calculateModifier}){
    const {skillPoints, totalPoints, incrementSkill, decrementSkill} = useSkills({calculateModifier,attributes});

    return (
        <div className='Attributes'>
            <div>
                Attributes
                {attributes.map((attr) => (
                    <div key={attr.name}>
                        <span>{attr.name}: {attr.value}</span>
                        <button onClick={() => increment(attr.name)}>+</button>
                        <button onClick={() => decrement(attr.name)}>-</button>
                    </div>
                ))}
            </div>

            <div>
                Modifier
                {attributes.map((attr) => (
                    <div key={attr.name}>
                        <span>{attr.name}: {attr.value}</span>
                        <span>Modifier: {calculateModifier(attr.value)}</span>
                        <button onClick={() => increment(attr.name)}>+</button>
                        <button onClick={() => decrement(attr.name)}>-</button>
                    </div>
                ))}
            </div>

            <div>
                Skills
                {SKILL_LIST.map((skill) => {
                    const points = skillPoints[skill.name];
                    const modifier = calculateModifier(attributes.find(attr => attr.name === skill.attributeModifier).value || 0);
                    const total = points + modifier;

                    return (
                        <div key={skill.name}>
                            <span>{skill.name} - points: {points}</span>
                            <button onClick={() => incrementSkill(skill.name)} disabled={points >= totalPoints}>+</button>
                            <button onClick={() => decrementSkill(skill.name)} disabled={points <= 0}>-</button>
                            <span>modifier ({skill.attribute}): {modifier}</span>
                            <span>total: {total}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )   
}

