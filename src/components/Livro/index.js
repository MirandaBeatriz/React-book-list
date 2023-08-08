import './Livro.css'

const Livro = (props) => {

    return (
        <div className='Livro'>
            <div className='cabecalho'>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.autor}</h5>
            </div>
        </div>
    )
}

export default Livro
