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
import { useState, useRef } from "react";
import submitForm from "./submitForm";

export default function CoffeeRecipe({ readOnly, data = {} }) {
  const [isLoading, setIsLoading] = useState(false);
  const [savingStatus, setSavingStatus] = useState("finished");
  const [savingMessage, setSavingMessage] = useState("Saving recipe...");

  console.log(data);
  const refs = {};
  refs.roaster = useRef(data.roaster || null);
  refs.bean = useRef(data.bean || null);
  refs.input = useRef(data.input || null);
  refs.output = useRef(data.output || null);
  refs.mill = useRef(data.mill || null);
  refs.time = useRef(data.time || null);
  refs.temperature = useRef(data.temperature || null);
  refs["18g"] = useRef(data["18g"] || true); // default to 18g
  refs["12g"] = useRef(data["12g"] || false);

  async function handleSubmit(event) {
    event.preventDefault();
    submitForm(refs, setIsLoading, setSavingStatus, setSavingMessage);
  }

  let savingAction;
  if (!isLoading && !readOnly) {
    savingAction = (
      <Grid>
        <Column lg={16} md={8} sm={4}>
          <Button type="submit" className="coffee-add-save">
            Save
          </Button>
        </Column>
      </Grid>
    );
  } else if (readOnly) {
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
                          ref={refs.roaster}
                          size="lg"
                          type="roaster"
                          labelText="Roaster"
                          id="text-roaster"
                          disabled={readOnly}
                          value={readOnly ? refs.roaster.current : undefined}
                        />
                      </Column>
                      <Column lg={8} md={4} sm={4}>
                        <TextInput
                          ref={refs.bean}
                          size="lg"
                          type="bean"
                          labelText="Bean"
                          id="text-bean"
                          disabled={readOnly}
                          value={readOnly ? refs.bean.current : undefined}
                        />
                      </Column>
                    </Grid>
                    <Grid>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          ref={refs.input}
                          id="input"
                          min={0}
                          max={40}
                          step={0.1}
                          label="Input"
                          helperText="grams [g]"
                          invalidText="Number is not valid"
                          disabled={readOnly}
                          value={readOnly ? refs.input.current : undefined}
                        />
                      </Column>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          ref={refs.output}
                          id="output"
                          min={0}
                          max={60}
                          step={0.1}
                          label="Output"
                          helperText="grams [g]"
                          invalidText="Number is not valid"
                          disabled={readOnly}
                          value={readOnly ? refs.output.current : undefined}
                        />
                      </Column>
                    </Grid>
                    <Grid>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          ref={refs.mill}
                          id="mill"
                          min={0}
                          max={50}
                          step={0.1}
                          label="Mill setting"
                          helperText="steps"
                          invalidText="Number is not valid"
                          disabled={readOnly}
                          value={readOnly ? refs.mill.current : undefined}
                        />
                      </Column>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          ref={refs.time}
                          id="time"
                          min={0}
                          max={50}
                          step={0.1}
                          label="Extraction time"
                          helperText="seconds [s]"
                          invalidText="Number is not valid"
                          disabled={readOnly}
                          value={readOnly ? refs.time.current : undefined}
                        />
                      </Column>
                    </Grid>
                    <Grid>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          refs={refs.temperature}
                          id="temperature"
                          min={0}
                          max={120}
                          step={1}
                          label="Temperature"
                          helperText="Degree [°C]"
                          invalidText="Number is not valid"
                          disabled={readOnly}
                          value={
                            readOnly ? refs.temperature.current : undefined
                          }
                        />
                      </Column>
                      <Column lg={8} md={4} sm={2}>
                        <RadioButtonGroup
                          legendText="Strainer size"
                          name="strainer"
                          defaultSelected="radio-18g"
                        >
                          <RadioButton
                            ref={refs["18g"]}
                            labelText="18g"
                            id="radio-18g"
                            value="radio-18g"
                            className="coffee-add-radio"
                            disabled={readOnly}
                            checked={
                              readOnly ? refs["18g"].current.value : undefined
                            }
                          />
                          <RadioButton
                            refs={refs["12g"]}
                            labelText="12g"
                            id="radio-12g"
                            value="radio-12g"
                            className="coffee-add-radio"
                            disabled={readOnly}
                            checked={
                              readOnly ? refs["12g"].current.value : undefined
                            }
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
