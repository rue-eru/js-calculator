const keyValue = [
  { 
    id: "clear", 
    value: "AC",
    operator: true
  },
  { 
    id: "delete", 
    value: "DEL",
    operator: true
  },
  { 
    id: "percent", 
    value: "%",
    operator: true
  }, { 
    id: "add", 
    value: "+",
    operator: true
  }, { 
    id: "one", 
    value: 1,
    operator: false
  }, { 
    id: "two", 
    value: 2,
    operator: false
  }, { 
    id: "three", 
    value: 3,
    operator: false
  }, { 
    id: "subtract", 
    value: "-",
    operator: true
  }, { 
    id: "four", 
    value: 4,
    operator: false
  }, { 
    id: "five", 
    value: 5,
    operator: false
  }, { 
    id: "six", 
    value: 6,
    operator: false
  }, { 
    id: "multiply", 
    value: "x",
    operator: true
  }, { 
    id: "seven", 
    value: 7,
    operator: false
  }, { 
    id: "eight", 
    value: 8,
    operator: false
  }, { 
    id: "nine", 
    value: 9,
    operator: false
  }, { 
    id: "divide", 
    value: "/",
    operator: true
  }, { id: "zero", 
    value: 0,
    operator: false
  }, { id: "zero-double", 
    value: "00",
    operator: false
  }, { 
    id: "decimal", 
    value: ".",
    operator: false
    // This was the problem!
    // do not treat decimal as an operator but as a number!
  },  { 
    id: "equals", 
    value: "=",
    operator: true
  }
];

export default keyValue