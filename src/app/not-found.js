import Link from "next/link";

export default function NotFound(){
return(
    <div style={{textAlign: "center"}}>
        <h1>Você caiu fora dos confins do mundo</h1>
        <Link href="/"> Reencarnar </Link>

    </div>
);
};