"use client"
import { ComponentProps } from "react";
import { BuilderComponent, Builder, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import "../builder-registry.ts";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

export function RenderBuilderContent(props: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();///(Builder.isPreviewing || Builder.isEditing)
  // If "content" has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  // If the "content" is falsy and the page is
  if (props.content || isPreviewing) {
    return (
      <>
        <BuilderComponent{...props} />
      </>
    );
  }
  // If the "content" is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />;
}