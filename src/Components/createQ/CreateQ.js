import React, { useState } from "react";
import './CreateQ.css'

export default function LoginForm() {
  let [Quation, setQuation] = useState("");
  let [type, setType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Loging in with ${username} and ${password}`);
  }

  function updateQuation(event) {
    setQuation(event.target.value);
  }

  function updateType(event) {
    setType(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Quation" onChange={updateQuation} />
      <input type="text" placeholder="Type" onChange={updateType} />
      <input type="submit" value="create" />
    </form>
  );
}