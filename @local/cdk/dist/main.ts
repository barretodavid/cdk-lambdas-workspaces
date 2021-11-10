import output from "./output.json";

const stackInfo = output["CdkStack"];
export const url = Object.values(stackInfo)[0];
