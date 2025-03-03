{/*after finishing the main part recheck and change values passed*/}

const Screen = ({ value, result }) => {
    console.log("Screen - Value:", value, "Result:", result); // Debugging line
  
    return (
    <div id="display">
      <h4>{value || result}</h4>
    </div>
  );}

  export default Screen