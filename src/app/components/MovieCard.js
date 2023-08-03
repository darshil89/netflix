import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
const MovieCard = (item) => {
  const { id, title, type, synopsis } = item.jawSummary;
  //   console.log(item.jawSummary.backgroungImage);
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={item.jawSummary.backgroundImage.url}
            alt={title}
            width={260}
            height={200}
          />
        </div>
        <div className={styles.card_data}>
          <h3 className={styles.card_title}>{title.substring(0, 18)}</h3>
          <p>{synopsis.substring(0, 100)} ...</p>
          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
