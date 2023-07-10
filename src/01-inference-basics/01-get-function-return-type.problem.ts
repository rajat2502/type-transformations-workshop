import { Equal, Expect } from "../helpers/type-utils";

const myFunc = () => {
  return "hello";
};

/**
 * How do we extract MyFuncReturn from myFunc?
 */
type MyFunc = typeof myFunc; // () => string
type MyFuncReturn = ReturnType<MyFunc>; // string

type tests = [Expect<Equal<MyFuncReturn, string>>];
