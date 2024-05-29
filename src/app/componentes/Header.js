import Link from "next/link"
import styles from "../componentes/header.modules.css";
import Image from "next/image";

export default function Header(){
return(
    <header className={styles.header}>
         <h1>Header</h1>
        <nav>
            <ul>
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/registro">
                    <li>Registrar</li>
                </Link>
                <Link href="/localizacao">
                    <li>Localização</li>
                </Link>
            </ul>
        </nav>
    </header>
)

}