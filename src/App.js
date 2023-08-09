import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Categoria from './components/Categoria';
import Footer from './components/Footer';

function App() {

const categorias = [
  {
    nome:'Terror',
    key: 0,
    corPrimaria: '#330000',
    corSecundaria: '#855050'
  },
  {
    nome: 'Fantasia',
    key: 3,
    corPrimaria: '#250733',
    corSecundaria: '#442858'
  },
  {
    nome: 'Ficção Científica',
    key: 1,
    corPrimaria: '#000833',
    corSecundaria: '#38406c'
  },
  {
    nome: 'Romance',
    key: 2,
    corPrimaria: '#330014',
    corSecundaria: '#523550'
  },
]
  
  const [livros, setLivros] = useState([])
  
  const NovoLivroAdd = (livro) => {
    debugger
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
          livros={ livros.filter(livro => livro.categoria === categoria.nome) }
        />
        )}
        <Footer/>
    </div>
  );
}

export default App;
