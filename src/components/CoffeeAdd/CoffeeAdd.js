import {
  Grid,
  Column,
  Form,
  FormGroup,
  Stack,
  TextInput,
  FluidForm,
  NumberInput,
  RadioButtonGroup,
  RadioButton,
  Button,
  Heading,
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
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Stack gap={7}>
              <Heading>Coffee parameters</Heading>
              <Grid>
                <Column lg={16} md={8} sm={4}>
                  <Stack gap={7}>
                    <Grid>
                      <Column lg={8} md={4} sm={4}>
                        <FluidForm>
                          <TextInput
                            type="roaster"
                            labelText="Roaster"
                            id="text-roaster"
                          />
                        </FluidForm>
                      </Column>
                      <Column lg={8} md={4} sm={4}>
                        <FluidForm>
                          <TextInput
                            type="bean"
                            labelText="Bean"
                            id="text-bean"
                          />
                        </FluidForm>
                      </Column>
                    </Grid>
                    <Grid>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          id="time"
                          min={0}
                          max={50}
                          value={25}
                          step={0.1}
                          label="Extraction time"
                          helperText="Seconds [s]"
                          invalidText="Number is not valid"
                        />
                      </Column>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          id="mill"
                          min={0}
                          max={50}
                          value={7.4}
                          step={0.1}
                          label="Mill setting"
                          invalidText="Number is not valid"
                        />
                      </Column>
                    </Grid>
                    <Grid>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          id="output"
                          min={0}
                          max={50}
                          value={45}
                          step={0.1}
                          label="Output"
                          helperText="output [g]"
                          invalidText="Number is not valid"
                        />
                      </Column>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          id="time"
                          min={0}
                          max={120}
                          value={93}
                          step={1}
                          label="Temperature"
                          helperText="Degree [°C]"
                          invalidText="Number is not valid"
                        />
                      </Column>
                    </Grid>
                  </Stack>
                </Column>
              </Grid>
              <Grid>
                <Column lg={8} md={4} sm={2}>
                  <RadioButtonGroup
                    legendText="Strainer size"
                    name="strainer"
                    defaultSelected="18g"
                  >
                    <RadioButton labelText="18g" value="18" id="radio-18g" />
                    <RadioButton labelText="12g" value="12" id="radio-12g" />
                  </RadioButtonGroup>
                </Column>
                <Column lg={8} md={4} sm={2}>
                  <Button type="submit" className="coffee-add-save">
                    Save
                  </Button>
                </Column>
              </Grid>
            </Stack>
          </FormGroup>
        </Form>
      </Column>
    </Grid>
  );
}
