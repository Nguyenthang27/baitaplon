import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import reportWebVitals from './reportWebVitals';
import Header from './Component/Header'; // Import Header component
import Form from './Component/Form'; // Import Form componentimport './Style.css'
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function App() {
  return (
      <div className="App">
          <Header />
          <Form />
      </div>
  );
}


ReactDOM.render(<App />, document.getElementById('root'));

export default App;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// App.js

