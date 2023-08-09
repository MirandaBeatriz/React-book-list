import Livro from '../Livro'
import './Categoria.css'

const Categoria = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    
    return (
        props.livros.length > 0 ? (
            <section className='Categoria' style={css}>
                <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
                <div className='livros'>
                    {props.livros.map(livro =>
                        <Livro
                            key={livro.nome}
                            nome={livro.nome}
                            autor={livro.autor}
                            imagem={livro.imagem}
                            categoria={livro.categoria}
                            backgroundColor={props.corPrimaria}
                        />
                    )}
                </div>
            </section>
        ) : ('')
    )
}

export default Categoria
