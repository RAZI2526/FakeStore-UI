import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import { FakeStoreHome } from "./FakeStoreHome";
import { useEffect, useState } from "react";
import { FakeStoreCategory } from "./FakeStoreCategory";



export function FakeStoreIndex(){
    const [category,setCategory]=useState([]);
    useEffect(function(){
        fetch("https://fakestoreapi.com/products/categories")
        .then((response)=>{
            response.json()
        .then((data)=>
            setCategory(data)
        )
        })
    },[])
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="bg-dark text-white p-2 d-flex justify-content-between">
            <div>
                Fake Store
            </div>
                <div >
                    <span className="me-3"> <Link to="home">Home</Link> </span>
                    <span className="me-3">Electronics</span>
                    <span className="me-3">Men's faishon</span>
                    <span className="me-3">Women's faishon</span>
                </div>
               
                <div>
                    <span className="bi bi-person-fill me-3"></span>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-cart4 me-3"></span>
                </div>
            </header>
                <section className="row">
                    <nav className="col-3">
                        <ol>
                       {
                            category.map((x)=>
                            <li key={x}>
                                <Link to={`/category/${x}`}> {x} </Link>
                            </li>
                            )
                       }
                       </ol>
                    </nav>
                    <main className="col-9">
                        <Routes>
                            <Route path="/" element={<FakeStoreHome/>}></Route>
                            <Route path="home" element={<FakeStoreHome/>}></Route>
                            <Route path="/category/:catName" element={<FakeStoreCategory/>}></Route>

                        </Routes>
                    </main>
                </section>
            </BrowserRouter>
        </div>
    )
}