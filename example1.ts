import { Response, Request } from "express";
async function sqlCreateUser(toggle: boolean): Promise<string | Error> {
  return toggle ? "hi" : new Error();
}

interface myCompilationInterface {
  foo: string;
}

const myTypeGuard = (
  thing: myCompilationInterface | undefined
): thing is myCompilationInterface => {
  return (thing as myCompilationInterface).foo !== undefined;
};

async function main(req: Request, res: Response) {
  // Create the user in the DB
  const myThing: myCompilationInterface | undefined = { foo: "" };
  const userResult = myTypeGuard(myThing);
  console.log(myThing);

  //Check if we get a wrong answer
  if (typeof userResult !== "string") {
    return res.status(500).send(userResult);
  }
}

const myName = "tony";

myName.length();
