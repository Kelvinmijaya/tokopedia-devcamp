const awaitHandling = promise => {
  return promise.then(data => [null, data]).catch(err => [err]);
};

export default awaitHandling;
