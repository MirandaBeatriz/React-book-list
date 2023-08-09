
import { useState } from 'react'
import CampoTexto from '../CampoTexto'
//import CampoFile from '../CampoFile'
import DropDown from '../DropDown'
import Botao from '../Botao'
import './Formulario.css'

const Formulario = (props) => {
    const [nome,setNome] = useState('')
    const [autor,setAutor] = useState('')
    const [imagem,setImagem] = useState('')
    const [categoria,setCategoria] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoLivroCadastrao({
            nome,
            autor,
            imagem,
            categoria,
        })

        setNome('')
        setAutor('')
        setImagem('')
        setCategoria('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados referente aos livros</h2>
                
                <CampoTexto 
                    obrigatorio = {true}  
                    label="Título" 
                    placeholder="Digite o título" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio = {true}  
                    label="Autor" 
                    placeholder="Digite o nome do autor" 
                    valor={autor}
                    aoAlterado={valor => setAutor(valor)}
                />
                <DropDown   
                    obrigatorio = {true}  
                    label = "Categorias" 
                    itens = {props.categorias} 
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