export default async function submitForm(
  refs,
  setIsLoading,
  setSavingStatus,
  setSavingMessage
) {
  setSavingMessage("Saving recipe...");
  setSavingStatus("active");
  setIsLoading(true);

  const data = {
    roaster: refs.roaster.current.value,
    bean: refs.bean.current.value,
    input: refs.input.current.value,
    output: refs.output.current.value,
    mill: refs.mill.current.value,
  };

  setSavingStatus("finished");
  setSavingMessage("Successfully saved recipe!");
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
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

  // if (response.ok) {
  //   setSavingStatus("finished");
  //   setSavingMessage("Successfully saved recipe!");
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // } else {
  //   setSavingStatus("error");
  //   setSavingMessage("Failed to save recipe!");
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }
}
