import keyValue from "./keyValue";

const Keys = ({ handleInput }) => (
  <div id="keys">
        {keyValue.map((key) => (
          key.value === 'AC' || key.value === 'DEL' ? (
            <button 
              id={key.id} 
              className={key.operator ? 'operator' : 'number'}
              onClick={() => handleInput(key.value, key.operator)} 
              key={key.id}
            >
              {key.value}
            </button>
          ) : (
            <button
              id={key.id}
              className={key.operator ? 'operator' : 'number'}
              onClick={() => handleInput(key.value, key.operator)}
              key={key.id}
            >
              {key.value}
            </button> 
        )
    ))}
  </div>
);

export default Keys