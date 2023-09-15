import {
  Grid,
  Column,
  Form,
  FormGroup,
  Stack,
  TextInput,
  NumberInput,
  RadioButtonGroup,
  RadioButton,
  Button,
  Heading,
  InlineLoading,
} from "@carbon/react";
import { useState } from "react";
import { useRecipe } from "@/contexts/recipeContext";

export default function CoffeeRecipe() {
  const recipe = useRecipe();
  console.log(recipe);
  const [isLoading, setIsLoading] = useState(false);
  const [savingStatus, setSavingStatus] = useState("finished");
  const [savingMessage, setSavingMessage] = useState("Saving recipe...");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSavingMessage("Saving recipe...");
    setSavingStatus("active");
    setIsLoading(true);

    const data = {
      roaster: event.target[1].value,
      bean: event.target[2].value,
      input: event.target[3].value,
      output: event.target[6].value,
      mill: event.target[9].value,
      time: event.target[12].value,
      temperature: event.target[15].value,
      "18g": event.target[19].checked,
      "12g": event.target[20].checked,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "/api/v1/add";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.ok) {
      setSavingStatus("finished");
      setSavingMessage("Successfully saved recipe!");
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } else {
      setSavingStatus("error");
      setSavingMessage("Failed to save recipe!");
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  let savingAction;
  if (!isLoading && !recipe.readOnly) {
    savingAction = (
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <Button type="submit" className="coffee-add-save">
            Save
          </Button>
        </Column>
      </Grid>
    );
  } else if (recipe.readOnly) {
    savingAction = null;
  } else {
    savingAction = (
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <InlineLoading
            status={savingStatus}
            iconDescription="saving"
            description={savingMessage}
          />
        </Column>
      </Grid>
    );
  }

  return (
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <Form onSubmit={handleSubmit}>
          <FormGroup legendText="">
            <Stack gap={7}>
              <Heading>Coffee parameters</Heading>
              <Grid>
                <Column lg={16} md={8} sm={4}>
                  <Stack gap={7}>
                    <Grid>
                      <Column lg={8} md={4} sm={4}>
                        <TextInput
                          size="lg"
                          type="roaster"
                          labelText="Roaster"
                          id="text-roaster"
                          disabled={recipe.readOnly}
                        />
                      </Column>
                      <Column lg={8} md={4} sm={4}>
                        <TextInput
                          size="lg"
                          type="bean"
                          labelText="Bean"
                          id="text-bean"
                          disabled={recipe.readOnly}
                        />
                      </Column>
                    </Grid>
                    <Grid>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          id="input"
                          min={0}
                          max={40}
                          value={18}
                          step={0.1}
                          label="Input"
                          helperText="grams [g]"
                          invalidText="Number is not valid"
                          disabled={recipe.readOnly}
                        />
                      </Column>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          id="output"
                          min={0}
                          max={60}
                          value={45}
                          step={0.1}
                          label="Output"
                          helperText="grams [g]"
                          invalidText="Number is not valid"
                          disabled={recipe.readOnly}
                        />
                      </Column>
                    </Grid>
                    <Grid>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          id="mill"
                          min={0}
                          max={50}
                          value={7.4}
                          step={0.1}
                          label="Mill setting"
                          helperText="steps"
                          invalidText="Number is not valid"
                          disabled={recipe.readOnly}
                        />
                      </Column>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          id="time"
                          min={0}
                          max={50}
                          value={25}
                          step={0.1}
                          label="Extraction time"
                          helperText="seconds [s]"
                          invalidText="Number is not valid"
                          disabled={recipe.readOnly}
                        />
                      </Column>
                    </Grid>
                    <Grid>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          id="temperature"
                          min={0}
                          max={120}
                          value={93}
                          step={1}
                          label="Temperature"
                          helperText="Degree [°C]"
                          invalidText="Number is not valid"
                          disabled={recipe.readOnly}
                        />
                      </Column>
                      <Column lg={8} md={4} sm={2}>
                        <RadioButtonGroup
                          legendText="Strainer size"
                          name="strainer"
                          defaultSelected="radio-18g"
                        >
                          <RadioButton
                            labelText="18g"
                            value="18"
                            id="radio-18g"
                            className="coffee-add-radio"
                            disabled={recipe.readOnly}
                          />
                          <RadioButton
                            labelText="12g"
                            value="12"
                            id="radio-12g"
                            className="coffee-add-radio"
                            disabled={recipe.readOnly}
                          />
                        </RadioButtonGroup>
                      </Column>
                    </Grid>
                    {savingAction}
                  </Stack>
                </Column>
              </Grid>
            </Stack>
          </FormGroup>
        </Form>
      </Column>
    </Grid>
  );
}
