import Image from "next/image";
import styles from "../componentes/header.modules.css";


export default async function Home() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products")
    const data = await response.json();
  return (
    <main className={styles.main}>
      {data.map((produtos) =>
       <div className={styles.card} key={produtos.id}>  
          <p>{produtos.title}</p>
            <p>{produtos.price}</p>
          <Image src="https://static.wikia.nocookie.net/liga-da-zueira-oficial/images/6/6a/Sans.png/revision/latest?cb=20211014193743&path-prefix=pt-br" width={100} height={100} alt="produtos image"/>
       </div>
    )}; 
    </main>
  );
}