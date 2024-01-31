import './App.css';
import Attributes from './component/Attributes.js';
import Classes from './component/Classes.js';
import useAttributes from './context/useAttributes.js';
import useClasses from './context/useClasses.js';

function App() {
  const {attributes, increment, decrement, calculateModifier} = useAttributes();
  const {selectedClass, checkRequirements, handleClassClick} = useClasses({attributes});

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>

      <Attributes attributes={attributes} increment={increment} decrement={decrement} calculateModifier={calculateModifier}/>
      <Classes selectedClass={selectedClass} classClick={handleClassClick} checkRequirements={checkRequirements}/>
    </div>
  );
}

export default App;
