import styles from "./CoffeeList.module.css";

export default function CoffeeList({ data }) {
  return (
    <div className={styles.container}>
      <h1>Liste</h1>
      {data.map((doc) => {
        return <p key={doc._id}>{doc.name}</p>;
      })}
    </div>
  );
}
