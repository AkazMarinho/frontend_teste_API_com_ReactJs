import style from './Options.module.css'
import { IoMdClose } from "react-icons/io";

import { RequestContext } from '../../context/Requests';
import { useContext, useState } from 'react';
import perfum from '../../img/perfum.png'
import { UpdateData } from './UpdateData';


export function Options({close, data}) {

    const {deleteProducts} = useContext(RequestContext)

    const [showDelete, setShowDelete] = useState(false);
    const [updateMenu, setUpdateMenu] = useState(false);

    const onClose = () => {
        close(false)
    }

    const handleClose = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const deleteMethod = () => {
        setShowDelete(true)
        setUpdateMenu(false)
    }

    const UpdateMethod = () => {
        setShowDelete(false)
        setUpdateMenu(true)
    }

  return (
    <div className={style.external} onClick={handleClose}>
        <div className={style.content} >

            
        {updateMenu === false ?
            
            <>
                {showDelete === true && 
                    <div className={style.confirmDelete} >
                    <h3>Confirmar exclusão</h3>
                    <div>
                        <button onClick={() => {
                                deleteProducts(data.id)
                                close(false)
                        }}>Sim</button>
                        <button onClick={() => setShowDelete(false)}>Não</button>
                        </div>
                    </div>
                }

                <IoMdClose className={style.closeSvg} onClick={handleClose} />
                
                <h3>Detalhes</h3>
                <div className={style.data}>

                    <div  className={style.product}>
                        <img src={perfum} alt="PNG de um desenho de perfume" />
                        <div>
                            <span className={style.formater}>{data.name}</span>
                            <span className={style.formater}>{data.feature}</span> 
                            <span className={style.formater}>código: <span>{data.id}</span></span>  
                            <span className={style.formater}>R$ {data.price.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className={style.buttons}>
                        <button onClick={deleteMethod}>Excluir</button>
                        <button onClick={UpdateMethod}>Alterar dados</button>
                    </div>
                </div>
            </>
        
        : (
            <UpdateData data={data} close={setUpdateMenu} />
          )
        }
        </div>
    </div>
  )
}
