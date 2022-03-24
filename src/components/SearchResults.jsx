import { useEffect, useState } from "react";
import SearchStocks from "./SearchStocks";
import StockList from "./StockList";
import { Search } from "../services/Constants";




export default function SearchResults(props){
    // inittialize the image list to the full list passed in props
    const [stockSearch, setStockSearch] = useState([])
    
    const fetchData = async (company) => {
        try {
          const response = await Search(company);
          setStockSearch(response);
          console.log('setStockSearch=', setStockSearch);
        } catch (error) {
          console.log(error);
        }
      }
    
    //handle the filter, and upstate when the filter value changes
    //store the filter state and filter the list of gifs to display
    const handleStockChange = (event) => {
        event.preventDefault();
        

        //  grab value from event
        const stockName = event.target.value;
        <StockList ticker={stockName} />
        // setStockSearch((_prevState) =>{
        //     remove gifs that don't contain the filter value
        //     const filteredStockList = props.gifs.filter((image) => {
        //     return image.toLowerCase().includes(stockName.toLowerCase());
        //     });
        // return filteredStockList
        // return s tockName
        // }
        fetchData(stockName);
        // console.log('THIS IS fetchData= ' + fetchData('dog'));
    }
    // console.log(handleStockChange)


    useEffect( () => {
        fetchData();
        console.log("do something", stockSearch)
    }, [])


    
    return (
        <div><h1>This is the SearchStock Section</h1>
        <SearchStocks onClick={handleStockChange} onChange={(e) => handleStockChange(e)} />
        <br></br>
        <StockList stock={stockSearch} />
        </div>

   )
    //All of the data is hoisted to the top of the tree in the container
    // and it is passed to the child components 
}