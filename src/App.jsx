import Header from "./components/Header";
import PersonList from "./components/PersonList";
import AddForm from "./components/AddForm";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "เอก", gender: "male" },
    { id: 2, name: "วี", gender: "male" },
    { id: 3, name: "บี", gender: "female" },
    { id: 4, name: "พลอย", gender: "female" },
  ]);

  const [theme, setTheme] = useState(localStorage.getItem("mode") || "light")

  function deleteUser(id) {
    const result = data.filter((user) => user.id !== id); // array ใหม่
    setData(result);
  }

  useEffect(() => {
    localStorage.setItem("mode", theme)
  }, [theme]);

  return (
    <div className={theme}>
      <div className="App">
        <Header titles="My App" theme={theme} setTheme={setTheme} />
        <main>
          <AddForm data={data} setData={setData} />
          <PersonList data={data} deleteUser={deleteUser} />
        </main>
      </div>
    </div>
  );
}

export default App;
