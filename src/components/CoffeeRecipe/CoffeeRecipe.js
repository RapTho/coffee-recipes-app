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
import { useState } from "react";
import { useRouter } from "next/router";
import submitForm from "./submitForm";
import { ACTIONS } from "./actions";

export default function CoffeeRecipe({ readOnly, data = {}, id = undefined }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [savingStatus, setSavingStatus] = useState("finished");
  const [savingMessage, setSavingMessage] = useState("Saving recipe...");
  const [roaster, setRoaster] = useState(data.roaster || "");
  const [bean, setBean] = useState(data.bean || "");
  const [input, setInput] = useState(data.input || 0);
  const [output, setOutput] = useState(data.output || 0);
  const [mill, setMill] = useState(data.mill || 0);

  let states = {
    roaster,
    bean,
    input,
    output,
    mill,
  };
  async function handleSubmit(event) {
    event.preventDefault();
    await submitForm(
      states,
      setIsLoading,
      setSavingStatus,
      setSavingMessage,
      ACTIONS.CREATE,
      id,
      router
    );
  }

  async function handleUpdate() {
    await submitForm(
      states,
      setIsLoading,
      setSavingStatus,
      setSavingMessage,
      ACTIONS.UPDATE,
      id,
      router
    );
  }

  async function handleDelete() {
    await submitForm(
      states,
      setIsLoading,
      setSavingStatus,
      setSavingMessage,
      ACTIONS.DELETE,
      id,
      router
    );
  }

  let savingAction;
  if (!isLoading && !readOnly && typeof id != "undefined") {
    savingAction = (
      <>
        <Column lg={4} md={2} sm={2}>
          <Button className="coffee-save-button" onClick={handleUpdate}>
            Update
          </Button>
        </Column>
        <Column lg={4} md={2} sm={2}>
          <Button
            kind="danger"
            className="coffee-save-button"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Column>
      </>
    );
  } else if (!isLoading && !readOnly) {
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
                          size="lg"
                          type="roaster"
                          labelText="Roaster"
                          id="text-roaster"
                          disabled={readOnly}
                          value={roaster}
                          onChange={(e) => setRoaster(e.target.value)}
                        />
                      </Column>
                      <Column lg={8} md={4} sm={4}>
                        <TextInput
                          size="lg"
                          type="bean"
                          labelText="Bean"
                          id="text-bean"
                          disabled={readOnly}
                          value={bean}
                          onChange={(e) => setBean(e.target.value)}
                        />
                      </Column>
                    </Grid>
                    <Grid>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          id="input"
                          min={0}
                          max={40}
                          step={0.1}
                          label="Input"
                          helperText="grams [g]"
                          invalidText="Number is not valid"
                          disabled={readOnly}
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                        />
                      </Column>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          id="output"
                          min={0}
                          max={60}
                          step={0.1}
                          label="Output"
                          helperText="grams [g]"
                          invalidText="Number is not valid"
                          disabled={readOnly}
                          value={output}
                          onChange={(e) => setOutput(e.target.value)}
                        />
                      </Column>
                    </Grid>
                    <Grid>
                      <Column lg={8} md={4} sm={4}>
                        <NumberInput
                          id="mill"
                          min={0}
                          max={50}
                          step={0.1}
                          label="Mill setting"
                          helperText="steps"
                          invalidText="Number is not valid"
                          disabled={readOnly}
                          value={mill}
                          onChange={(e) => setMill(e.target.value)}
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
