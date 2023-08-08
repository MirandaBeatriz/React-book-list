import './CampoFile.css'

const CampoFile = (props) =>{
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campoFile">
            <label>{props.label}</label>
            <input 
                type="file" 
                accept="application/jpg" 
                value={props.valor}
                onChange={aoDigitado}
                placeholder={props.placeholder}
                required={props.obrigatorio} 
            >
            </input>
        </div>
    )
}

export default CampoFile