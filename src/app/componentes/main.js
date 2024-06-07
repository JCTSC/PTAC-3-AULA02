import Image from "next/image";
import styles from "../componentes/main.module.css";
import autoprefixer from "autoprefixer";
import { useEffect } from "react";


export default async function Main() {
    const response = await fetch("https://fakestoreapi.com/products")

      const {listaProduct, setLisProduct} = useState([]);
    
      useEffect ( ()=> {

        const getProduct = async () >={
          const response = await fetch("https://fakestoreapi.com/products");
          const data = await response.json();

          setLisProduct(data);
        }
        getProduct();,
      }, []);


const orderZa = () =>{
  let newLis 
}



    const data = await response.json();
  return (
    <main className={styles.main}>
      {data.map((produtos) =>
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
    </main>
  );
}

