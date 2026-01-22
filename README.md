# Calculator Project

A simple web-based calculator built with HTML, CSS, and JavaScript.

## Features

- **Basic Operations**: Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulo (%)
- **Clear Function**: AC button to clear all input
- **Delete Function**: DEL button to remove the last character
- **Evaluation**: = button to calculate the result
- **Operator Prevention**: Prevents consecutive operators from being entered

## File Structure

```
Calculator/
├── index.html      # HTML structure for the calculator
├── script.js       # JavaScript logic and event handling
├── styles.css      # CSS styling and layout
└── README.md       # This file
```

## How It Works

1. **Input Capture**: Buttons are selected using `querySelectorAll('button')`
2. **String Building**: User input is accumulated in the `string` variable
3. **Operations**:
   - **=**: Evaluates the expression using `eval(string)`
   - **AC**: Clears the input
   - **DEL**: Removes the last character using `substring()`
4. **Validation**: Prevents entering two operators consecutively
5. **Display**: Updates the input box in real-time

## Key Variables

- `input`: References the input display element
- `buttons`: Collection of all button elements
- `string`: Stores the current expression being built
- `operators`: Array of valid operator symbols

## Functions

- **Event Listener**: Attached to each button to handle clicks
- **eval()**: Calculates the mathematical expression
- **substring()**: Used for the DEL function

## Future Improvements

- Add decimal point support
- Implement keyboard support
- Add operation history
- Improve error handling
- Add more mathematical functions (square root, power, etc.)
