import styles from "./CoffeeAdd.module.css";
import Input from "../Input/Input";

export default function CoffeeAdd() {
  return (
    <div className={styles.container}>
      <form className={styles.form} action="/api/coffee-add" method="post">
        <input
          className={styles.coffeeName}
          type="text"
          placeholder="Coffee name"
        />
        <Input
          className={styles.input}
          label="Input:"
          type="text"
          name="input"
          placeholder="12"
          unit="g"
        />
        <Input
          className={styles.output}
          label="Output:"
          type="text"
          name="output"
          placeholder="36"
          unit="g"
        />
        <Input
          className={styles.time}
          label="Time:"
          type="text"
          name="time"
          placeholder="25"
          unit="s"
        />
        <Input
          className={styles.temp}
          label="Temp:"
          type="text"
          name="temp"
          placeholder="88"
          unit="°C"
        />
        <Input
          className={styles.coffeeName}
          label="Mill:"
          type="text"
          name="mill"
          placeholder="4.6"
          unit="."
        />
        <input className={styles.save} type="submit" value="Add recipe" />
      </form>
    </div>
  );
}
