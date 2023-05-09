import Link from "next/link";
import styles from '@/styles/Home.module.css'

const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <Link href="https://www.linkedin.com/in/jhroveda/" >
                Developed by Jose Henrique Roveda &nbsp;&nbsp;&nbsp;
            </Link>
            <Link href="https://raw.githubusercontent.com/josehenriqueroveda/agromilho/main/LICENSE" >
                 GNU License
            </Link>
        </footer>
    );
}

export default Footer;