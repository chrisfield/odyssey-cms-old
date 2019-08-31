export const actionTypes = {
  SET_ENV: 'SET_ENV'  
};

export const setEnv = env => ({
  type: actionTypes.SET_ENV,
  env
});
