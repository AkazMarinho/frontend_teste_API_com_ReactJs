
import { useContext, useEffect, useState } from 'react'
import style from './Register.module.css'
import { RequestContext } from '../../context/Requests'

export function Register() {
    

const {postProduct, postNullMessage, setPostNullMessage} = useContext(RequestContext);

    const [showEmptyData, setShowEmptyData] = useState(false);
    const [data, setData] = useState({});
    
    const submitData = (e) => {
        e.preventDefault();
        postProduct(data);
    }
    const rescuetData = (e) => {
        console.log(e.target.value)
        setData({...data, [e.target.name] : e.target.value})
    }

    const rescuetDataNumber = (e) => {
        const numberValue = e.target.value.replace(",", ".");
        if(!isNaN(numberValue)){
            const number = parseFloat(numberValue)
            setData({...data, [e.target.name] : number.toFixed(2)})
        }
    }
  return (
    <div  className={style.content}>
        {postNullMessage === true &&
            <div className={style.enptyData}>
                <h3>Não é possivel realizar o envio de dados nulos</h3>
                <button onClick={() => setPostNullMessage(false)}>OK</button>
            </div>
        }
        <h2>Registre um perfume</h2>

        <div className={style.internal} >
            <form className={style.form} onSubmit={submitData}>
                <div>
                    <label htmlFor="name">Nome de Produto</label>
                    <input 
                        name='name' 
                        type="text" 
                        placeholder='Insira o nome do produto'
                        onChange={rescuetData}
                    />
                        
                </div>

                <div>
                    <label htmlFor="">Caracteristicas</label>
                    <input 
                        name='feature' 
                        type="text" 
                        placeholder='Insira as características' 
                        onChange={rescuetData}
                    />
                </div>

                <div>
                    <label htmlFor="name">Empresa</label>
                    <input 
                        name='brand' 
                        type="text" 
                        placeholder='Insira a Marca do produto'  
                        onChange={rescuetData}
                    />
                </div>

                <div>
                    <label htmlFor="name">Preço</label>
                    <input 
                        name='price' 
                        type="text" 
                        placeholder='Insira o preço' 
                        onChange={rescuetDataNumber}
                    />
                </div>

                <button type='submit'>Enviar</button>

            </form>
        </div>
    </div>
  )
}
