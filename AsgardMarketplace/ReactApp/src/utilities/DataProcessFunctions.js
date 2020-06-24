// Trims objects' all string properties
export const trimStringsInObject = (object) => {
  let trimmedObject = {...object}
  
  Object.keys(object).forEach(propKey => {
    const propValue = object[propKey];
    if (typeof propValue === "string" || propValue instanceof String){
      return object[propKey] = propValue.trim()
    }
  });

  return trimmedObject;
}

export const isPrimitiveType = (value) => 
  Object(value) !== value;

export const isNotEmptyObject = (object) => (
    !!object
    && object.constructor === Object 
    && Object.keys(object).length !== 0
  )
