import styles from "./comments.module.scss"
import data from "../../constants/review.jsx"
import ReviewCard from "../ReviewCard/index.jsx"
const Comments = () => {

    return (
        <section className={styles.comments}>
            <h2>Müşteri <span>Yorumları</span></h2>
            <article className={styles.card_wrapper}>
                {data.map((item, key) =>
                    <ReviewCard
                        key={key}
                        image={item.image}
                        name={item.name}
                        text={item.text}
                    />
                )
                }
            </article>

        </section>
    )
}

export default Comments;