import { Suspense } from "react";
import { ServerComponent } from "./ServerComponent";

export default async function App() {
  return <>
    <Suspense fallback={<div>loading...</div>}>
      <ServerComponent />
    </Suspense>
  </>;
}