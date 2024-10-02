import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './assets/css/Curriculum.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Define a rota inicial */}
        <Route path="/" element={<Home />} />
        {/* Define a rota para o componente Skills */}
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="login-container">
      <Image />
      <h2>Jefferson Victor Afonso Marques</h2>
      <div className="input-group">
        <Linkedin />
      </div>
      <div className="input-group">
        <GitHub />
      </div>
      <div className="input-group">
        <Email />
      </div>
      <div className="input-group">
        <Link to="/skills" style={skillsButtonStyle}>
          Ver Skills
        </Link>
      </div>
    </div>
  );
};

const Image = () => {
  return (
    <img
      src="c:\Users\Jefferson\Downloads\WhatsApp Image 2024-10-01 at 21.21.17.jpeg"
      alt=""
      style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        marginBottom: '10px',
      }}
    />
  );
};

const Linkedin = () => {
  return (
    <a
      href="https://www.linkedin.com/in/jefferson-marques-b9bba2280/"
      className="linkendin"
      style={{
        display: 'inline-block',
        padding: '10px',
        width: '95%',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      Linkedin
    </a>
  );
};

const GitHub = () => {
  return (
    <a
      href="https://github.com/MarquesJefferson"
      className="linkendin"
      style={{
        display: 'inline-block',
        padding: '10px',
        width: '95%',
        backgroundColor: 'orange',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      GitHub
    </a>
  );
};

const Email = () => {
  return (
    <a
      href="mailt o:je.ffersom875@gmail.com?subject=Assunto%20do%20Email&body=Escreva%20sua%20mensagem%20aquinpm"
      className="linkendin"
      style={{
        display: 'inline-block',
        padding: '10px',
        width: '95%',
        backgroundColor: 'green',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
    >
      E-MAIL
    </a>
  );
};

const skillsButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '10px',
  width: '95%',
  backgroundColor: '#007bff',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  textAlign: 'center',
  cursor: 'pointer',
};

const backButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '12px 20px',
  width: 'auto',
  backgroundColor: '#ff1e56',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '25px',
  textAlign: 'center',
  cursor: 'pointer',
  fontWeight: 'bold',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
};

const skillsListStyle: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
  textAlign: 'left',
};

const skillItemStyle: React.CSSProperties = {
  backgroundColor: '#f0f0f0',
  padding: '10px',
  margin: '5px 0',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  fontWeight: '500',
};

const Skills: React.FC = () => {
  return (
    <div className="login-container">
      <Image />
      <h2>Jefferson Victor Afonso Marques</h2>
      <h3 style={{ marginBottom: '20px', fontSize: '24px' }}>My Skills</h3>
      <ul style={skillsListStyle}>
        <li style={skillItemStyle}>JavaScript</li>
        <li style={skillItemStyle}>React</li>
        <li style={skillItemStyle}>Node.js</li>
        <li style={skillItemStyle}>TypeScript</li>
        <li style={skillItemStyle}>PHP</li>
        <li style={skillItemStyle}>MySQL</li>
        {/* <li style={skillItemStyle}>Workbench</li> */}
      </ul>
      <div className="input-group" style={{ marginTop: '20px' }}>
        <Link to="/" style={backButtonStyle}>
          Voltar
        </Link>
      </div>
    </div>

  );
};

export default App;