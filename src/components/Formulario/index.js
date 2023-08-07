import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {

    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados referente aos livros</h2>
                <CampoTexto label="Título" placeholder="Digite o título" />
                <CampoTexto label="Autor" placeholder="Digite o nome do autor" />
                <CampoTexto label="Categoria" placeholder="Digite a categoria" />
            </form>
        </section>
    )
}

export default Formulario