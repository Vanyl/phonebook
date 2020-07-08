export function removeEmptyFields(data) {
    const dataCopy = {...data};
    Object.keys(dataCopy).forEach(key => {
      if (dataCopy[key] === '' || dataCopy[key] == null) {
        delete dataCopy[key];
      }
    });
    return dataCopy;
  }