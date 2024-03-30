import style from './UpdateData.module.css'
import { IoMdClose } from "react-icons/io";


import { RequestContext } from '../../context/Requests'
import { useContext, useState } from 'react'

export function UpdateData({close, data}) {

    const {putProduct} = useContext(RequestContext);

    const [rescueDataInput, setRescueDataInput] = useState(data);

    const handleClose = () => {
        close(false)
    }

    const rescueData = (e) => {
        setRescueDataInput({...rescueDataInput, [e.target.name] : e.target.value});
    }

    const rescueDataNumber = (e) => {
        setRescueDataInput({...rescueDataInput, [e.target.name] : e.target.value});
    }

    const submitData = (e) => {
        e.preventDefault();
        const numberTarget = parseFloat(rescueDataInput.price);
        const numberAltered = numberTarget.toFixed(2);
        putProduct({...rescueDataInput, price : numberAltered})
    }

  return (
    <div className={style.content}>
        
        <IoMdClose className={style.closeSvg} onClick={handleClose} />
        <h3>Alterar dados existentes</h3>
        
        <form onSubmit={submitData} className={style.form}>
            <div>
                <label htmlFor="">Nome do produto</label>
                <input 
                type="text" 
                name="name" 
                id="name" 
                value={rescueDataInput.name}
                onChange={rescueData}
            />
            </div>
            <div>
                <label htmlFor="">Aroma</label>
                <input 
                type="text" 
                name="feature" 
                id="feature"  
                value={rescueDataInput.feature}
                onChange={rescueData}
            />
            </div>
            <div>
                <label htmlFor="">Empresa</label>
                <input 
                type="text" 
                name="brand" 
                id="brand"  
                value={rescueDataInput.brand}
                onChange={rescueData}
            />
            </div>
            <div>
                <label htmlFor="">Preço</label>
                <input 
                type="number" 
                name="price" 
                id="price"  
                value={rescueDataInput.price}
                onChange={rescueDataNumber}
            />
            </div>

            <div  className={style.buttons}>
            
                <button>Atualizar</button>
            </div>
        </form>
    </div>
  )
}
