import axios from "axios";

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export function FakeStoreCategory(){
    const [product,setProducts]=useState([]);
    const params=useParams();

    useEffect(function(){
        axios({
            method:"get",
            url:`https://fakestoreapi.com/products/category/${params.catName}`
        })
        .then((response)=>
            setProducts(response.data)
        )
    })

    return(
        <div className="container-fluid">
                <div className="d-flex flex-wrap">
          {
                product.map((x)=>
                    <div key={x.id} className="card m-2 p-2" style={{width:"200px"}}> 
                        <img className="card-img-top" src={x.image} width="100" height="150"  />
                        <div className="card-header" style={{height:"100px"}}>
                            <p> {x.title} </p>
                        </div>
                     </div>
                     
                )
            }
          </div>
        </div>
    )
}