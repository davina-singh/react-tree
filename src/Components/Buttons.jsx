import "../App.css";

export default function Button() {
  function handleClick3() {
    console.log("You clicked the third button!");
  }

  function handleClick4(message) {
    console.log(message);
  }

  return (
    <>
      <button
        onClick={() => {
          alert("You clicked the first button!");
        }}
      >
        Click me for an alert
      </button>
      <button
        onClick={function () {
          console.log("You clicked the second button");
        }}
      >
        I do something in the console!
      </button>
      <button onClick={handleClick3}>I do something in the console too!</button>
      <button onClick={() => handleClick4("You clicked the 4th button!")}>
        I also do something in the console!
      </button>
    </>
  );
}
