


export default function SearchStocks(props){ 



return (
    <div className="search-section">
        <div>
            <label htmlFor="search-gif">Search by Company Name: </label>
            <br></br>
            <br></br>
            <input type="text" value={props.value} onChange={props.onChange} id="search-pane-input" placeholder="Search for Company"/>
            {/* <br></br>
            <button onClick={props.onClick} class="search-bt" id="search-pane-button">Search</button> */}
        </div>

    </div>

);
}

 



