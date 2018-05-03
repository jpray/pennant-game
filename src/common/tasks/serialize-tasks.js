export function serializeElement(el) {
  return {
    tagName: el.tagName.toLowerCase(),
    properties: {}
  }
}

export function createElementFromSerializedData(data) {
  let el = document.createElement(data.tagName);

  return el;
}
