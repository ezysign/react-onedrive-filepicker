export const appendScript = (scriptToAppend: string) => {
  const script = document.createElement("script");
  script.src = scriptToAppend;
  script.async = true;
  document.body.appendChild(script);
};

export const removeScript = (scriptToremove: string) => {
  let allsuspects = document.getElementsByTagName("script");
  for (let i = allsuspects.length; i >= 0; i--) {
    if (
      allsuspects[i] &&
      allsuspects[i].getAttribute("src") !== null &&
      allsuspects[i].getAttribute("src")?.indexOf(`${scriptToremove}`) !== -1
    ) {
      allsuspects[i].parentNode?.removeChild(allsuspects[i]);
    }
  }
};
