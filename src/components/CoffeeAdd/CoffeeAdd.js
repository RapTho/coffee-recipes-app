import {
  FormGroup,
  Stack,
  TextInput,
  FluidForm,
  NumberInput,
  RadioButtonGroup,
  RadioButton,
  Button,
  Grid,
  Column,
} from "@carbon/react";

const handleSubmit = async (event) => {
  event.preventDefault();

  console.log(event);

  // const data = {
  //   name: event.target[0].value,
  //   input: event.target[1].value,
  //   output: event.target[2].value,
  //   time: event.target[3].value,
  //   temp: event.target[4].value,
  //   mill: event.target[5].value,
  // };

  // const JSONdata = JSON.stringify(data);

  // const endpoint = "/api/v1/add";

  // const options = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSONdata,
  // };

  // const response = await fetch(endpoint, options);

  // const result = await response.json();
  // console.log(result);
};

export default function CoffeeAdd() {
  return (
    <FormGroup legendText="Coffee parameters">
      <Grid>
        <Column lg={8} sm={16}>
          <Stack gap={7}>
            <FluidForm>
              <TextInput type="roaster" labelText="Roaster" id="text-roaster" />
            </FluidForm>
            <NumberInput
              id="input"
              min={0}
              max={30}
              value={18}
              label="Input"
              helperText="input [g]"
              invalidText="Number is not valid"
            />
            <NumberInput
              id="time"
              min={0}
              max={50}
              value={25}
              label="Extraction time"
              helperText="Seconds [s]"
              invalidText="Number is not valid"
            />
            <NumberInput
              id="mill"
              min={0}
              max={50}
              value={7.4}
              label="Mill setting"
              invalidText="Number is not valid"
            />
          </Stack>
          <Button>Save</Button>
        </Column>
        <Column lg={8} sm={16}>
          <Stack gap={7}>
            <FluidForm>
              <TextInput type="bean" labelText="Bean" id="text-bean" />
            </FluidForm>
            <NumberInput
              id="output"
              min={0}
              max={50}
              value={45}
              label="Output"
              helperText="output [g]"
              invalidText="Number is not valid"
            />
            <NumberInput
              id="time"
              min={0}
              max={120}
              value={93}
              label="Temperature"
              helperText="Degree [°C]"
              invalidText="Number is not valid"
            />

            <RadioButtonGroup
              legendText="Strainer size"
              name="strainer"
              defaultSelected="18g"
            >
              <RadioButton labelText="18g" value="18" id="radio-18g" />
              <RadioButton labelText="12g" value="12" id="radio-12g" />
            </RadioButtonGroup>
          </Stack>
        </Column>
      </Grid>
    </FormGroup>
  );
}
