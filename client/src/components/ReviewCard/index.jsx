import styles from "./review.module.scss"

const ReviewCard = ({image,name,text}) => {
    return (
        <article className={styles.review_card}>
            <div className={styles.image_container}>
                <img src={image} alt="" />
            </div>
            <div className={styles.text}>
                <span>{name}</span>
                <p>{text}</p>
                <a href="/#">Armutta incele</a>
            </div>
        </article>
    )
}

export default ReviewCard;