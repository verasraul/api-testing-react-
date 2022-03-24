


export default function StockList(props){

  const listItems = props.stock.map((stock, index) => {

    return (
      <li key={ index } >
      <p>Company: { stock.companyName}</p>
      <p>Stock Change(%): { stock.change}</p>
      <p>Stock Percentage (-/+): { stock.changePercent }</p>
      <p>Last Price($): { stock.latestPrice }</p>
      </li>
    )
    })

    return (
      <div> 
        <div>
          <ul>
        {listItems}
          </ul>
        </div>
      </div>
    )
  }