export function serializeElement(el) {
  debugger;
  return {
    tagName: el.tagName.toLowerCase(),
    properties: {}
  }
}

export function createElementFromSerializedData(data) {
  debugger;
  let el = document.createElement(data.tagName);
  
  return el;
}
