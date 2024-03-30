import React, { useContext, useEffect } from 'react'
import { RequestContext } from '../../context/Requests'



export default function ContentRequest() {

    const {productsAll, productsAllData} = useContext(RequestContext);

    useEffect(() => {
      productsAll();
    }, []);


  return (
    <div>
      <ul>
        
      </ul>
    </div>
  )
}
// {productsAllData && 
//   productsAllData.map(item => 
//     <li>{item.name}</li> 
//     )
// }