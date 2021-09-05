import React from 'react';


const Sresult =(props) =>{


    //search api present here from unsplash source
    const img=`https://source.unsplash.com/400x300/?${props.name}`;
return(

    <>


    <div className="imgc">


        <img src={img} alt="OPPPS...........sorry.....app not working img not presents here "/>

    </div>


    </>




)



}

export  default Sresult;