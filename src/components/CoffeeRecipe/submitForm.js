import { ACTIONS } from "./actions";

function getData(refs) {
  return {
    roaster: refs.roaster.current.value,
    bean: refs.bean.current.value,
    input: refs.input.current.value,
    output: refs.output.current.value,
    mill: refs.mill.current.value,
  };
}

export default async function submitForm(
  refs,
  setIsLoading,
  setSavingStatus,
  setSavingMessage,
  action,
  id
) {
  const savingMessage = `${action[0].toUpperCase()}${action.slice(
    1,
    -1
  )}ing recipe...`;
  setSavingMessage(savingMessage);
  setSavingStatus("active");
  setIsLoading(true);

  let endpoint = "";
  let JSONdata = "";
  switch (action) {
    case ACTIONS.CREATE:
      endpoint = "/api/v1/add";
      JSONdata = JSON.stringify(getData(refs));
      break;
    case ACTIONS.UPDATE:
      endpoint = "/api/v1/update";
      JSONdata = JSON.stringify({ id, data: getData(refs) });
      break;
    case ACTIONS.DELETE:
      endpoint = "/api/v1/delete";
      JSONdata = JSON.stringify({ id });
    default:
      setSavingStatus("error");
      setSavingMessage(`Failed to ${action} recipe!`);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
  }

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
    setSavingMessage(`Successfully ${action}d recipe!`);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  } else {
    setSavingStatus("error");
    setSavingMessage(`Failed to ${action} recipe!`);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }
}
