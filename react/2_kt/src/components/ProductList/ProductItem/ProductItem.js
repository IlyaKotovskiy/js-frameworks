import styles from './productItem.module.css';

export function ProductItem({ id, name, price, count, increment, decrement, deleteProduct }){

    return(
        <>
            { count !== 0 && <div onDoubleClick={() => deleteProduct(id)} className={styles.card}>
                <h2>{name}</h2>
                <p>Цена: {price}</p>
                <div className={styles.counterWrap}>
                    <button
                        onDoubleClick={event => event.stopPropagation()}
                        onClick={() => decrement(id)}
                        className={styles.button}
                    >-</button>
                    <span>{count}</span>
                    <button
                        onDoubleClick={event => event.stopPropagation()}
                        onClick={() => increment(id)}
                        className={styles.button}
                        disabled={count === 25}
                    >+</button>
                </div>
            </div> }
        </>
    )
}