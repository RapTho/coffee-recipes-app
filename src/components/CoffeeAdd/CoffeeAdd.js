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
        <div className={styles.row}>
          <div>
            <label for="input">Input:</label>
            <input type="number" id="input" name="input" placeholder="12" />
            <span>[g]</span>
          </div>
          <div>
            <label for="output">Output:</label>
            <input type="text" id="output" name="output" placeholder="36" />
            <span>[g]</span>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label for="time">Time:</label>
            <input type="number" id="time" name="time" placeholder="25" />
            <span>[s]</span>
          </div>
          <div>
            <label for="temp">Temp:</label>
            <input type="text" id="temp" name="temp" placeholder="88" />
            <span>[°C]</span>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label for="time">Mill:</label>
            <input type="number" id="time" name="time" placeholder="3.4" />
            <span>[s]</span>
          </div>
        </div>
        <input className={styles.save} type="submit" value="Add recipe" />
      </form>
    </div>
  );
}
