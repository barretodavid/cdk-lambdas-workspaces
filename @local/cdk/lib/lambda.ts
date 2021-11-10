import { Construct } from "@aws-cdk/core";
import { Function, Runtime, Code } from "@aws-cdk/aws-lambda";
import * as path from "path";

export class Lambda extends Construct {
  ref: Function;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.ref = new Function(this, id, {
      runtime: Runtime.NODEJS_14_X,
      handler: "index.handler",
      code: Code.fromAsset(
        path.resolve(__dirname, `../../lambdas/dist/${id}/`)
      ),
    });
  }
}
