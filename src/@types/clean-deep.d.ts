type CleanDeepOptions = {
  emptyArrays: boolean;
  emptyObjects: boolean;
  emptyStrings: boolean;
  nullValues: boolean;
  undefinedValues: boolean;
};

declare module "clean-deep" {
  function cleanDeep<T>(obj: T, options?: CleanDeepOptions): T;
  export = cleanDeep;
}
