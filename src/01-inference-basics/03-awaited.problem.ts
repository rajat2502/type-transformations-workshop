import { Equal, Expect } from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type GetUser = typeof getUser;
type ReturnValue = Awaited<ReturnType<GetUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>,
];
