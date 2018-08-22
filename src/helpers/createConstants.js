const createConstant = constant => ({
  request: `${constant}_REQUEST`,
  success: `${constant}_SUCCESS`,
  failed: `${constant}_FAILED`,
  clear: `${constant}_CLEAR`,
});

export default createConstant;
