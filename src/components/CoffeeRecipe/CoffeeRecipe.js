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
import { useRouter } from "next/router";
import submitForm from "./submitForm";
import { ACTIONS } from "./actions";

export default function CoffeeRecipe({ readOnly, data = {}, id = undefined }) {
  const [isLoading, setIsLoading] = useState(false);
  const [savingStatus, setSavingStatus] = useState("finished");
  const [savingMessage, setSavingMessage] = useState("Saving recipe...");
  const router = useRouter();

  const refs = {};
  refs.roaster = useRef(data.roaster || null);
  refs.bean = useRef(data.bean || null);
  refs.input = useRef(data.input || null);
  refs.output = useRef(data.output || null);
  refs.mill = useRef(data.mill || null);

  function handleRoasterChange(event) {
    refs.roaster.current = event.target.value;
  }
  function handleBeanChange(event) {
    refs.bean.current = event.target.value;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    submitForm(
      refs,
      setIsLoading,
      setSavingStatus,
      setSavingMessage,
      ACTIONS.CREATE,
      id,
      router
    );
  }

  async function handleUpdate() {
    submitForm(
      refs,
      setIsLoading,
      setSavingStatus,
      setSavingMessage,
      ACTIONS.UPDATE,
      id,
      router
    );
  }

  async function handleDelete() {
    submitForm(
      refs,
      setIsLoading,
      setSavingStatus,
      setSavingMessage,
      ACTIONS.DELETE,
      id,
      router
    );
  }

  function defineValue(value) {
    if (readOnly) {
      return value;
    }
    if (!readOnly && typeof id != "undefined") {
      return value;
    }
    return undefined;
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
                          ref={refs.roaster}
                          size="lg"
                          type="roaster"
                          labelText="Roaster"
                          id="text-roaster"
                          disabled={readOnly}
                          value={refs.roaster.current}
                          // onChange={handleRoasterChange}
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
                          value={refs.bean.current}
                          // onChange={handleBeanChange}
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
                          value={defineValue(refs.input.current)}
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
                          value={defineValue(refs.output.current)}
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
                          value={defineValue(refs.mill.current)}
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
