import { useEffect, useState } from "react";
import liff from "@line/liff";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({ weight: null });

  useEffect(() => {
    liff
      .init({
        liffId: import.meta.env.VITE_LIFF_ID,
      })
      .then(() => {
        setMessage("LIFF init succeeded.");
      })
      .catch((e) => {
        setMessage("LIFF init failed.");
        setError(`${e}`);
      });
  });

  const handleChange = (input) => (e) => {
    setForm({ ...form, [input]: e.target.value });
  };

  const handleSubmit = () => {
    alert(form.weight);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          今日の体重:
          <input
            type="number"
            name="weight"
            onChange={handleChange("weight")}
          />
        </label>
        <input type="submit" value="送信する" />
      </form>
    </div>
  );
}

export default App;
