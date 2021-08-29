// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 ht<tps://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const [hasError, setHasError] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const inputRef = React.useRef(null);

  function handleChange(e){
    e.preventDefault();
    const value = inputRef.current.value;
    const isValid = value === value.toLowerCase();
    setHasError(!isValid);
    if (isValid) {
      setUserName(value);
    }
    console.log(value, isValid);
  }

  function handleSubmit(e){
    e.preventDefault();
    // console.log(e.target);
    console.log(e.target.elements);
    console.log(e.target.elements.inputUserName);
    console.log(e.target.elements.inputUserName.value);
    // console.log(e.target.elements[0]);
    // console.log(e.target.elements[0].value);
    console.log(inputRef.current.value);
    onSubmitUsername(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputUserName">Username:</label>
        <input id="inputUserName" type="text" ref={inputRef} onChange={handleChange} value={userName} />
      </div>
      {hasError && (
        <span role="alert" style={{color: 'red', display: 'block'}}>
          Username must be lower case!
        </span>
      )}
      <button disabled={Boolean(hasError)} type="submit">
        Submit
      </button>
      {/* {hasError ? (
        <>
          <button type="submit" disabled>Submit</button>
          <span>Username must be lower case!</span>
        </>
      ) : (
        <button type="submit">Submit</button>
      )} */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
