import styles from "./CoffeeAdd.module.css";
import Input from "../Input/Input";

const handleSubmit = async (event) => {
  event.preventDefault();

  const data = {
    name: event.target[0].value,
    input: event.target[1].value,
    output: event.target[2].value,
    time: event.target[3].value,
    temp: event.target[4].value,
    mill: event.target[5].value,
  };

  const JSONdata = JSON.stringify(data);

  const endpoint = "/api/v1/coffee/add";

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  };

  const response = await fetch(endpoint, options);

  const result = await response.json();
  console.log(result);
};

export default function CoffeeAdd() {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
