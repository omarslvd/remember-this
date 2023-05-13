export const evalTemplate = function (s: string, params: any): any {
  // eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
  return Function(...Object.keys(params), "return `" + s + "`")(...Object.values(params));
};

// export { evalTemplate };
