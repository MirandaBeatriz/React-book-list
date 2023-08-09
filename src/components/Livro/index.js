import './Livro.css'

const Livro = ({nome,autor,imagem,backgroundColor}) => {
    
    return (
    
        <div className='Livro'>
            <div className='cabecalho' style={{backgroundColor: backgroundColor}}>
                <img src="https://nidcap.org/wp-content/uploads/2021/03/book.png" alt={nome}/>
            </div>
            <div className='rodape'>
                <h4 style={{color: backgroundColor}}>{nome}</h4>
                <h5>{autor}</h5>
            </div>
        </div>
    )
}

export default Livro
