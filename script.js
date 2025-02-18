// Part 2: Variable Declarations and Data Types
const userName = "Ywj Siab Vaj"; // String
let userAge = 22; // Number
const isStudent = true; // Boolean

console.log("Data Types:");
console.log(typeof userName); // Expected output: string
console.log(typeof userAge); // Expected output: number
console.log(typeof isStudent); // Expected output: boolean

// Part 3: Operators
const num1 = 15;
const num2 = 5;

// Arithmetic Operations
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

// Logical Operation Example
const isAdult = userAge >= 18 && !isStudent;

// Conditional (ternary) operator
const category = userAge >= 18 ? "Adult" : "Minor";

console.log("Arithmetic Operations:");
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

console.log("Logical & Conditional Operations:");
console.log("Is Adult:", isAdult);
console.log("Category:", category);

// Part 4: Type Conversion

// Implicit type conversion
const implicitConversion = "The result is " + num1;
console.log("Implicit Conversion:", implicitConversion);

// Explicit type conversion
const explicitNumber = Number("42");
const explicitString = String(userAge);
const explicitBoolean = Boolean(1);

console.log("Explicit Conversions:");
console.log("Number:", explicitNumber);
console.log("String:", explicitString);
console.log("Boolean:", explicitBoolean);

// Sprint A2

// Part 2: Integrate Arrays and Objects
const projects = [
    {
      id: 1,
      title: "Tri and Succeed Sports",
      description: "Worked on website layout and text styling. Adjusted fonts, images, and positioning.",
      technologiesUsed: ["HTML", "CSS"],
    },
    {
      id: 2,
      title: "Trusted Friends DayCare",
      description: "Styled the website for different screen sizes (responsive design).",
      technologiesUsed: ["HTML", "CSS", "Responsive Design"],
    },
    {
      id: 3,
      title: "Slate & Pencil Tutoring",
      description: "Utilized grid layouts for better positioning and website organization.",
      technologiesUsed: ["HTML", "CSS", "Grid Layout"],
    },
  ];
  
  // Log the projects array to console
  console.log("Projects:");
  projects.forEach((project) => {
    console.log(`ID: ${project.id}`);
    console.log(`Title: ${project.title}`);
    console.log(`Description: ${project.description}`);
    console.log(`Technologies Used: ${project.technologiesUsed.join(", ")}`);
    console.log("--------------------");
  });
  
  // Part 3: Testing and Validation
  console.log("JavaScript functionality is running as expected. Check the console for output.");