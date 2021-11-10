import { LambdaIntegration, RestApi } from "@aws-cdk/aws-apigateway";
import { Stack, Construct, StackProps } from "@aws-cdk/core";
import { Lambda } from "./lambda";

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const lambdaA = new Lambda(this, "lambda-a");
    const lambdaB = new Lambda(this, "lambda-b");

    const api = new RestApi(this, "example-api", {
      defaultCorsPreflightOptions: {
        allowOrigins: ["*"],
      },
    });

    api.root
      .addResource("lambda-a")
      .addMethod("GET", new LambdaIntegration(lambdaA.ref));
    api.root
      .addResource("lambda-b")
      .addMethod("GET", new LambdaIntegration(lambdaB.ref));
  }
}
