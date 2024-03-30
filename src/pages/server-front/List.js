import React, { useContext, useEffect, useState } from 'react'
import style from './List.module.css'

import { RequestContext } from '../../context/Requests'
import { Options } from './Options';

export function List() {

  const {productsAll, productsAllData} = useContext(RequestContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [showOptions, setShowOption] = useState(false);
  const [data, setdata] = useState({});
  
  useEffect(() => {
    productsAll();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
}
  return (
    <div className={style.content}>
        {showOptions === true && <Options close={setShowOption} data={data}/>}
        
        <input type="text" placeholder='Buscar perfume' onChange={handleSearchChange}/>
        <table className={style.table_list}>
            <thead>
                <tr className={style.header}>
                    <td>ID</td>
                    <td>NOME</td>
                    <td>MARCA</td>
                    <td>PREÇO</td>
                </tr>
            </thead>
            <tbody  className={style.body}>
                {productsAllData && 
                    productsAllData.filter(item => 
                        item.id.toString().includes(searchTerm.toLowerCase()) ||
                        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.price.toString().includes(searchTerm.toLowerCase())
                    ).map((item, index) => (
                      <tr key={index} onClick={() =>{ 
                        setShowOption(true)
                        setdata(item)
                      }
                    }>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.brand}</td>
                        <td>{item.price.toFixed(2)}</td>
                      </tr>  
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
