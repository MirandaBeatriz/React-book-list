import Livro from '../Livro'
import './Categoria.css'

const Categoria = (props) =>{
    const css = { backgroundColor: props.corSecundaria }
    
    return (
        <section className='Categoria' style={css}>
            <h3 style={{borderColor:  props.corPrimaria}}>{props.nome}</h3>

            {props.livros.map(livro => 
                <Livro 
                    nome={livro.nome} 
                    autor={livro.autor}
                    imagem={livro.imagem}
                />)
            }
        </section>
    )
}

export default Categoria