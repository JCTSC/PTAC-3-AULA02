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
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>