import { useState, useEffect } from 'react';
import { Constants } from '../services/Constants';


export default function RandomStock(){
    const [stocks, setStocks] = useState([]);
    const fetchData = async () => {
        try {
          const response = await Constants();
          setStocks(response.companyName);
          // console.log(setStocks);
        } catch (error) {
          console.log(error);
        }
      }
    console.log(fetchData);
    useEffect(() => {
      fetchData();
    }, [])

    // const handleButton = () => {
    //   if (stocks){
    //     fetchData();
    //   return (
    //   <img src= { stocks }/>
    //   )
    //   }
    // }

    return(
          <div>
          <div> { stocks } </div>
          <br></br>
          <button onClick= {fetchData}>
            Generate Stock
          </button>
        </div>
    )
}










