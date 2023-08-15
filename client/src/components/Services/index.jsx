import styles from "./services.module.scss"

const Services = () => {
    return (
        <div className={styles.services}>
            <h2>Verilen <span>Hizmetler</span></h2>
            <div className={styles.card_container}>
                <div className={styles.card_item}>1</div>
                <div className={styles.card_item}>2</div>
                <div className={styles.card_item}>3</div>
                <div className={styles.card_item}>4</div>
                <div className={styles.card_item}>5</div>
                <div className={styles.card_item}>6</div>
                <div className={styles.card_item}>7</div>
            </div>
        </div>
    )
}

export default Services;