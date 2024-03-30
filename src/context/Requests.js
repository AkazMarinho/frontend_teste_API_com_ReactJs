import axios from 'axios';
import React, { createContext, useState } from 'react'
import env from 'react-dotenv'

export const RequestContext = createContext({})

const url = env.API_URL;

export function RequestsProvider ({children}) {

  const [productsAllData, setProductsAllData] = useState();
  
  const productsAll = async () => {
    try {
        const response = await axios.get(`${url}`);
        console.log(response);
        setProductsAllData(response.data)
    } catch (error) {
        console.log(error);
        console.log(error.response.data);
    }
  }

  const productById = async (id) => {
      try {
        const response = await axios.get(`${url}/2`)
        console.log(response);
      } catch (error) {
        console.log(error);
      }
  }

  const [postNullMessage, setPostNullMessage] = useState(false);

  const postProduct = async (object) => {
    try {

      console.log(object.feature);
      const response = await axios.post(`${url}`,{
        name: object.name,
        brand: object.brand,
        feature: object.feature,
        price: object.price
      });

      console.log(response.status);
      
      window.location.reload();
    } catch (error) {
      console.log(error.response.status);
      setPostNullMessage(true)
    }
  }

  const putProduct = async (object) => {
    console.log(object);
    try {
      const response = await axios.put(`${url}`,{
        id: object.id,
        name: object.name,
        brand: object.brand,
        feature: object.feature,
        price: object.price
      });

      window.location.reload();


      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteProducts = async (id) =>{
    try {
      const response = await axios.delete(`${url}/${id}`)
      console.log(response.status);
      window.location.reload();
    } catch (error) {
      console.log();
    }
  }

  return (
    <RequestContext.Provider 
        value={{
          productsAll, 
          productsAllData,
          deleteProducts,
          postProduct,
          postNullMessage,
          setPostNullMessage,
          putProduct
        }}
    >
        {children}
    </RequestContext.Provider>
  )
}
