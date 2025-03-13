function App() {
  let users = [
    { name: "John", surname: "Due", age: 21 },
    { name: "Jane", surname: "Doe", age: 22 },
    { name: "Bob", surname: "Smith", age: 23 },
    { name: "Alice", surname: "Johnson", age: 24 },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {users.map((user) => {
        return <div>
          <h1>Salom</h1>
        </div>;
      })}
    </div>
  );
}

export default App;
