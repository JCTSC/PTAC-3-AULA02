import Link from "next/link"
import Image from "next/image";
import styles from "./header.module.css";

export default function Header(){
    return (
        <header className={styles.header}>
            <h1>Header</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Registrar</li>
                    <li>Localização</li>
                </ul>
            </nav>
        </header>
    )

}