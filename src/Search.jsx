import React, { useState } from 'react'
import Sresult from './Sresult';


const Search =() =>{


    const [img,setImg] =useState("");
    const input = (event) =>
    {


        const data =event.target.value;

        setImg(data);
          

    };


    return(


        <>
        <div className="searchbar">
            <input type="text" placeholder="search image u need it" value={img} onChange={input} />
        </div>
        {img===""? null :  <Sresult  name={img}/>}

        </>

    );

}

export default Search;