import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/src/components/builder";

export default async function Page() {
  const content = await builder
    .get("homepage", {
      userAttributes: {
        locale: "en-US",
      },
    })
    .toPromise();

  return <RenderBuilderContent content={content} model="homepage" />;
}
