export default function promiseMiddleware() {
  return next => action => {
    const { promise, types, ...rest } = action;
    if (!promise) {
      return next(action);
    }

    next({ ...rest, type: types.request });

    return promise.then(res => {
      if (res.status === 200) {
        return res
          .json()
          .then(result => next({ ...rest, result, type: types.success }))
          .catch(error => next({ ...rest, error, type: types.failed }));
      }
      return res
        .json()
        .then(error => next({ ...rest, error, type: types.failed }));
    });
  };
}
