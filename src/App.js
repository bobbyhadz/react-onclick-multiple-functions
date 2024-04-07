import './App.css';

export default function App() {
  const sum = (a, b) => {
    return a + b;
  };

  const multiply = (a, b) => {
    return a * b;
  };

  return (
    <div>
      <button
        onClick={event => {
          console.log('function 1:', sum(5, 5));
          console.log('function 2:', multiply(5, 5));
        }}
      >
        Click
      </button>
    </div>
  );
}
