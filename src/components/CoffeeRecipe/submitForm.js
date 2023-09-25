import { ACTIONS } from "./actions";

const DELAY = 2500;

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
  id,
  router
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
      break;
    default:
      setSavingStatus("error");
      setSavingMessage(`Failed to ${action} recipe!`);
      setTimeout(() => {
        setIsLoading(false);
        router.push("/");
      }, DELAY);
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
      router.push("/");
      setIsLoading(false);
    }, DELAY);
  } else {
    setSavingStatus("error");
    setSavingMessage(`Failed to ${action} recipe!`);
    setTimeout(() => {
      router.push("/");
      setIsLoading(false);
    }, DELAY);
  }
}
