import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Categoria from './components/Categoria';

function App() {

const categorias = [
  {
    nome:'Terror',
    key: 0,
    corPrimaria: '#57c278',
    corSecundaria: '#d9f7e9'
  },
  {
    nome: 'Fantasia',
    key: 3,
    corPrimaria: '#E06B69',
    corSecundaria: '#FDE7E8'
  },
  {
    nome: 'Ficção Científica',
    key: 1,
    corPrimaria: '#82cffa',
    corSecundaria: '#e8f8ff'
  },
  {
    nome: 'Romance',
    key: 2,
    corPrimaria: '#d195ff',
    corSecundaria: '#f4e8f7'
  },
]
  
  const [livros, setLivros] = useState([])
  
  const NovoLivroAdd = (livro) => {
    setLivros([...livros,livro])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        categorias={categorias.map(categoria => categoria.nome)}
        aoLivroCadastrao = { livro => NovoLivroAdd(livro) }
      />
      
      {categorias.map(categoria => 
        <Categoria 
          key={categoria.key}
          nome={ categoria.nome }
          corPrimaria={categoria.corPrimaria}
          corSecundaria={categoria.corSecundaria}
          livros={livros}
        />
        )}
    </div>
  );
}

export default App;
