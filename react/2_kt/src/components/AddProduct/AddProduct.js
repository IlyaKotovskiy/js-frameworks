import styles from './addProduct.module.css';

export function AddProduct({ addProduct }){
    const handleCLick = () => {
        const modal = prompt().split(' ');

        addProduct(modal)
    }

    return(
        <button
            onClick={handleCLick}
            className={styles.button}
        >Добавить новый товар</button>
    )
}