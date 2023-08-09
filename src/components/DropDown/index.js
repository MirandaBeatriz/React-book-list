import "./DropDown.css"

const DropDown = (props) => {
    return(
        <div className="DropDown">
            <label>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)} 
                required={props.required} valor={props.valor}>
                    <option value="">---</option>
                {props.itens.map(item =>{ 
                   return <option value = {item}> {item} </option>
                    }
                )}
            </select>
        </div>
    )
}

export default DropDown