'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./main.module.css";
import Spinner from "./Spinner";
import ErrorGetData from "./ErrorGetData";

export default function Main(){
    const [listProducts, setListProducts] = useState([]);
    const [listComplete, setListComplete] = useState([]);
    const [search, setSearch] = useState("");
    const [errorFetch, setErrorFetch] = useState(false);

    useEffect( () => {
        const getProduct = async () => {
    try{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setListProducts(data);
            setListComplete(data);
        }catch{
          setErrorFetch(true);
        }
      }
        getProduct();
    }, [])

    const orderAZ = () => {
        const newList = [...listProducts].sort((a,b) => a.title.localeCompare(b.title));
        setListProducts(newList);
    }
    const orderZA = () => {
        const newList = [...listProducts].sort((a,b) => b.title.localeCompare(a.title));
        setListProducts(newList);
    }
    const orderPriceMaior = () => {
        const newList = [...listProducts].sort((a,b) => b.price - a.price);
        setListProducts(newList);
    }
    const orderPriceMenor = () => {
        const newList = [...listProducts].sort((a,b) => a.price - b.price);
        setListProducts(newList);
    }

    const searchText = (text) => {
        setSearch(text);

        if ( text.trim() == "" ) {
            setListProducts(listComplete);
            return
        }
        const newList = listProducts.filter((products) => 
            products.title.toUpperCase().trim().includes(search.toUpperCase().trim()) )
        setListProducts(newList);
    }

if(errorFetch == true) {
  return <ErrorGetData />
}
    if(listComplete[0] == null) {
        return (
            <>
            <Spinner />        
            </>
        )

        return(<main className={styles.main}>
            {listProducts.map((produtos) =>
             <div className={styles.card} key={produtos.id}>  
                <p>{produtos.title}</p>
                  <p>{produtos.price}</p>
                <Image style={{margin: "auto"}} src={produtos.image} 
                width={275} height={275} alt="produtos image"/>
                <p> {produtos.rating.rate} </p>
                <p> {produtos.rating.count} </p>
                <p> {produtos.category} </p>
                <p> {produtos.description }</p>
             </div>
          )}; 
          </main>)

  }
}