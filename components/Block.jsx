import styles from '../styles/Block.module.css'

export default function Block( {title, content} ) {
    return (
        <div className={styles.block}>
        <h1> {title}</h1>
        <p> {content}</p>
        </div>
    );
}