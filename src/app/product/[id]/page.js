import Image from "next/image";
export default async function Product({params}){
    const response = await fetch("https://fakestoreapi.com/products/" +params.id);
    const data = await response.json()
    return(

        <div>
            <p>{data.title}</p>
            <p>{data.price}</p>
            <Image src={data.image} alt={data.title} width={100} height={100} />
            <p>{data.description}</p>
            <p>{data.category}</p>
            <p>{data.rating.rate}</p>
            <p>{data.rating.count}</p>
            
            <h1>{data.title}</h1>
        </div>
    )
}