import {  CLASS_LIST} from '../consts.js';


export default function Classes({selectedClass,classClick, checkRequirements}){
    return (
        <section className="App-section">
        {Object.entries(CLASS_LIST).map(([className, requirements]) => {
          const meetsRequirements = checkRequirements(requirements);

          return (
            <div key={className} style={meetsRequirements ? { backgroundColor: 'green' } : {}} onClick={() => classClick(className, requirements)}>
              <span>{className}</span>
            </div>
          );
        })}


        {selectedClass && (
            <section className="App-section">
                <h2>{selectedClass.name} Requirements:</h2>
                {Object.entries(selectedClass.requirements).map(([attrName, minValue]) => (
                    <div key={attrName}>
                    <span>{attrName}: {minValue}</span>
                    </div>
                ))}
            </section>
        )}
      </section>
    )   
}

