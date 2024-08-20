import { useEffect, useState } from "react";
import "./app.css";
import emailjs from "@emailjs/browser";

emailjs.init("E8Vcm4O5D9ty3wJzv");

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(()=>{
    emailjs.init("E8Vcm4O5D9ty3wJzv");
  },[])

  async function enviar(e) {
    e.preventDefault();
    if (nome === "" || email === "" || msg === "") {
      alert("prenchar todos os itens");
      return;
    }
    const para = {
      from_name: nome,
      message: msg,
      email: email,
    };

    await emailjs
      .send("service_ia9zmrb", "template_x9n4brz", para)
      .then(() => {
        alert("menssagem envviada");
        setEmail("");
        setMsg("");
        setNome("");
      })
      .catch((err) => {
        alert("erro ao enviar msg" + err);
      });
  }

  return (
    <div className="App">
      <form onSubmit={enviar}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></input>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Menssagem:</label>
        <textarea
          placeholder="Digite sua mensagem"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
}

export default App;
