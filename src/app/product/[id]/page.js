export default  async function Product({params}){
    const response = await fetch("https://fakestorapi.com/products/") + (params.id);
    const data = await response.json()
return(
    <p> {data.title}</p>
    );
}
