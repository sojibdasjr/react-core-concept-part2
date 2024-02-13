import "./App.css";
import Count from "./Count";
import Team from "./Team";

function App() {
  // Evend Handeler Normal Function way 1
  function handleClick() {
    alert("Button Click");
  }

  // Event Handelar Way 2
  const handleClick2 = () => {
    alert("Button Click 2");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h3>React Core Concept 2</h3>
      <Team></Team>
      <Count></Count>
      <button onClick={handleClick}>Click Button 1</button>
      <button onClick={handleClick2}>Click Button 2</button>
      <button
        onClick={() => {
          alert("button Click 3");
        }}
      >
        Click Button 3
      </button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
