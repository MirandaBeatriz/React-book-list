import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';

function App() {
  
  const [livros, setLivros] = useState([])
  const NovoLivroAdd = (livro) => {
    setLivros([...livros,livro])
    console.log(...livros,livro)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoLivroCadastrao = { livro => NovoLivroAdd(livro) }
      />
    </div>
  );
}

export default App;
