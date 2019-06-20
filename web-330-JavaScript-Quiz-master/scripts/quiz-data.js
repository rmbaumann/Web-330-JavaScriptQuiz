/*
============================================
; Title: Web 330 Group Project
; Author: Lance Desrouleaux, Troy Martin, Adam Donner, Reva Baumann
; Date: 06/17/2019
; Modified By:
; 06/17/2019 Troy Martin Created initial file
; Description: JavaScript array of question data
;===========================================
*/

// declare the data to build the questions
let QuestionData = [
  {
    id: 1,
    question: "Which of these is the correct syntax?",
    example: null,
    answers: [
      {
        id: 1,
        isCode: true,
        answer:
`function clearAll() {
  document.getElementsByClassName("independence")[0].style.visibility = 'hidden';
};`},
      {id: 2,
        isCode: true,
      answer:
`function clearAll() {
  getElementsByClassName("independence")[0].style.visibility = 'hidden';
};`},
      {id: 3,
        isCode: true,
      answer:
`function clearAll() {
  document.getByClassName("independence")[0].style.visibility = 'hidden';
`},
      {id: 4,
        isCode: true,
        answer:
`function clearAll() {
  document.("independence")[0].style.visibility = 'hidden';
}`}
    ],
    correct: 1
  },
  {
    id: 2,
    question: "Which of these is the correct syntax?",
    example: null,
    answers: [
      {id: 1,
        isCode: true,
      answer:`$(btn).on("click", function(){})`},
      {id: 2,
        isCode: true,
      answer:`$(#btn).on(click, function(){})`},
      {id: 3,
        isCode: true,
      answer:`$("#btn").on("click", function(){})`},
      {id: 4,
        isCode: true,
      answer:`(#btn").on("click", function(){})`}
    ],
    correct: 3
  },
  {
    id: 3,
    question: "Which of these is the correct syntax?",
    example: null,
    answers: [
      {id: 1,
        isCode: true,
      answer:`&lt;button type="button" onclick= "document.getElementById('.furniture').innerHTML = new Date()"&gt;`},
      {id: 2,
        isCode: true,
      answer:`&lt;button type="button" onclick= "getElementById(‘#furniture').innerHTML = new Date()"&gt;`},
      {id: 3,
        isCode: true,
      answer:`&lt;button type="button" onclick= "getElementById('furniture').innerHTML = new Date()"&gt;`},
      {id: 4,
        isCode: true,
      answer:`&lt;button type="button" onclick= "document.getElementById('furniture').innerHTML = new Date()"&gt;`}
    ],
    correct: 4
  },
  {
    id: 4,
    question: "What is the term used for the space between the curly braces of a function?",
    example: null,
    answers: [
      {id: 1,
        isCode: false,
        answer: "The function parameters."},
      {id: 2,
        isCode: false,
        answer: "The function arguments."},
      {id: 3,
        isCode: false,
        answer: "The function body."},
      {id: 4,
        isCode: false,
        answer: "The function whitespace."}
    ],
    correct: 3
  },
  {
    id: 5,
    question: "What is the name of the function on the console object used to output values to the screen?",
    example: null,
    answers: [
      {id: 1,
        isCode: false,
        answer: "console.draw"},
      {id: 2,
        isCode: false,
        answer: "console.log"},
      {id: 3,
        isCode: false,
        answer: "console.output"},
      {id: 4,
        isCode: false,
        answer: "console.writeLine"}
    ],
    correct: 2
  },
  {
    id: 6,
    question: "Which is an example of a constructor prototype?",
    example: null,
    answers: [
      {id: 1,
        isCode: true,
        answer:
`Song.constructor.toString = function(){
  return \`\${this.title} performed by \${this.artist}\`;
}`},
      {id: 2,
        isCode: true,
      answer:
`Song.toString = function(){
  return \`\${this.title} performed by \${this.artist}\`;
}`},
      {id: 3,
        isCode: true,
      answer:
`this.toString = function(){
  return \`\${this.title} performed by \${this.artist}\`;
}`},
      {id: 4,
        isCode: true,
        answer:
`Song.prototype.toString = function(){
  return \`\${this.title} performed by \${this.artist}\`;
}`}
    ],
    correct: 4
  },
  {
    id: 7,
    question: "Inside what HTML element, do we put JavaScript?",
    example: null,
    answers: [
      {id: 1,
        isCode: true,
      answer:
`&lt;script&gt;`},
      {id: 2,
        isCode: true,
      answer:
`&lt;javascript&gt;`},
      {id: 3,
        isCode: true,
      answer:
`&lt;js&gt;`},
      {id: 4,
        isCode: true,
        answer:
`&lt;scriptjs&gt;`}
    ],
    correct: 1
  },
  {
    id: 8,
    question: "How do you write a message in an alert box?",
    example: null,
    answers: [
      {id: 1,
        isCode: true,
      answer:
`alert("message")`},
      {id: 2,
        isCode: true,
      answer:
`msgBox("message")`},
      {id: 3,
        isCode: true,
      answer:
`msg("message")`},
      {id: 4,
        isCode: true,
        answer:
`alertBox("message")`}
    ],
    correct: 1
  },
  {
    id: 9,
    question: "How do you create a function in JavaScript?",
    example: null,
    answers: [
      {id: 1,
        isCode: true,
      answer:
`function myFunction()`},
      {id: 2,
        isCode: true,
      answer:
`msgBox("message")`},
      {id: 3,
        isCode: true,
      answer:
`function:myFunction()`},
      {id: 4,
        isCode: true,
        answer:
`function = myFunction()`}
    ],
    correct: 1
  },
  {
    id: 10,
    question: "Is this a proper for statement?",
    example:
`for (var counter = 0; counter < 10; counter++) {
  var chance = randomNumber();
  counter = 6;
}`,
    answers: [
      {id: 1,
        isCode: false,
      answer: `true`},
      {id: 2,
        isCode: false,
      answer: `false`}
    ],
    correct: 2
  },
  {
    id: 11,
    question: "An array is an order collection of values.  What are those values called?",
    example: null,
    answers: [
      {id: 1,
        isCode: false,
      answer: `Index`},
      {id: 2,
        isCode: false,
      answer: `Element`},
      {id: 3,
        isCode: false,
      answer: `Object`},
      {id: 4,
        isCode: false,
      answer: `Property`}
    ],
    correct: 2
  },
  {
    id: 12,
    question: `The value of an evaluated expression in a switch statement can be a string?`,
    example: null,
    answers: [
      {id: 1,
        isCode: false,
      answer: `true`},
      {id: 2,
        isCode: false,
      answer: `false`}
    ],
    correct: 1
  }
];
