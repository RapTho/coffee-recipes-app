import {
  Grid,
  Column,
  Form,
  FormGroup,
  Stack,
  TextInput,
  NumberInput,
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

  const refs = {};
  refs.roaster = useRef(data.roaster || null);
  refs.bean = useRef(data.bean || null);
  refs.input = useRef(data.input || null);
  refs.output = useRef(data.output || null);
  refs.mill = useRef(data.mill || null);

  async function handleSubmit(event) {
    event.preventDefault();
    submitForm(refs, setIsLoading, setSavingStatus, setSavingMessage);
  }

  let savingAction;
  if (!isLoading && !readOnly) {
    savingAction = (
      <Column lg={8} md={4} sm={4}>
        <Button type="submit" className="coffee-save-button">
          Save
        </Button>
      </Column>
    );
  } else if (readOnly) {
    savingAction = null;
  } else {
    savingAction = (
      <Column lg={8} md={4} sm={4}>
        <InlineLoading
          status={savingStatus}
          iconDescription="saving"
          description={savingMessage}
          className="coffee-save-message"
        />
      </Column>
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
                      {savingAction}
                    </Grid>
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
