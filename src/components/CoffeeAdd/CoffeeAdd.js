import styles from "./CoffeeAdd.module.css";

export default function CoffeeAdd() {
  return (
    <div className={styles.container}>
      <form action="/api/coffee-add" method="post">
        <input
          className={styles.coffeeName}
          type="text"
          placeholder="Coffee name"
        />
        <label for="input">Input:</label>
        <input type="text" id="input" name="input" value="John" />
        <label for="output">Output:</label>
        <input type="text" id="output" name="output" value="Doe" />
        <input type="submit" value="Add recipe" />
      </form>
    </div>
  );
}
