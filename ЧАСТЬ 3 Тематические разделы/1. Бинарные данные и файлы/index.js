function concat(arrays) {
  if (!Array.isArray(arrays)) {
    throw new Error('Input must be an array of Uint8Array');
  }

  // находим общую длину переданных массивов
  let totalLength = arrays.reduce((acc, value) => acc + value.length, 0);

  let result = new Uint8Array(totalLength);

  if (!arrays.length) return result;

  // копируем каждый из массивов в result
  // следующий массив копируется сразу после предыдущего
  let offset = 0;
  for(let array of arrays) {
    result.set(array, offset);
    offset += array.length;
  }

  return result;
}
