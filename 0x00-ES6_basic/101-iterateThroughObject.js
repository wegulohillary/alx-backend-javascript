export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  const iterator = reportWithIterator.next();
  
  while (!iterator.done) {
    result += iterator.value + ' | ';
    iterator = reportWithIterator.next();
  }
  
  // Remove the trailing ' | ' from the result
  result = result.slice(0, -3);
  
  return result;
}
