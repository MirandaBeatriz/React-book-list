
import { useState } from 'react'
import CampoTexto from '../CampoTexto'
import DropDown from '../DropDown'
import Botao from '../Botao'
import './Formulario.css'

const Formulario = (props) => {
    const Categorias = [
        'Terror',
        'Ficção Científica',
        'Romance',
        'Fantasia'
    ] 
    
    const [nome,setNome] = useState('')
    const [autor,setAutor] = useState('')
    const [categoria,setCategoria] = useState('')

    
    const aoSalvar = (evento) => {
        evento.preventDefault()

        props.aoLivroCadastrao({
            nome,
            autor,
            categoria
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados referente aos livros</h2>
                <CampoTexto 
                    obrigatirio = {true}  
                    label="Título" 
                    placeholder="Digite o título" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatirio = {true}  
                    label="Autor" 
                    placeholder="Digite o nome do autor" 
                    valor={autor}
                    aoAlterado={valor => setAutor(valor)}
                />
                <DropDown   
                    obrigatirio = {true}  
                    label = "Categorias" 
                    itens = {Categorias} 
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario