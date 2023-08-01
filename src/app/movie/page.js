import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";
const Movie = async () => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "967347ae15msh67d18f76af58303p173f0ajsn82a0b7b70dae",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  // console.log(data);
  const main_data = data.titles;
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1 >Series and Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((item) => {
              return <MovieCard key={item.id} {...item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
