import Link from "next/link"
import Image from "next/image";
import styles from './header.module.css'

export default function Footer(){
return(
    <footer className={styles.footer}>

<Link href="https://ead.ifms.edu.br/">
        <Image
         width={100}
         height={100}
         src={"https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg"}
         />
</Link>

         <h1>Footer</h1>
    </footer>
);

};