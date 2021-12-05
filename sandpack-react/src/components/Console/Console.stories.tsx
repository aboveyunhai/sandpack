import { SandpackCodeEditor, SandpackPreview } from "..";
import { SandpackProvider, SandpackLayout, SandpackThemeProvider } from "../..";

import { SandpackConsole } from "./";

export default {
  title: "components/Console",
};

export const ReactDevTool: React.FC = () => (
  <SandpackProvider
    template="react"
    customSetup={{
      files: {
        "/App.js": `export default function App() {
  
    return <>
      <h1 onClick={()=>console.log({ foo: [] })}>Hello World</h1>
      <h1 onClick={()=>{
        console.log("foo", "baz")
        console.error("foo", "baz")
      }}>Hello World</h1>
</>
  }
  `,
      },
    }}
  >
    <SandpackLayout>
      <SandpackCodeEditor />
      <SandpackPreview />
    </SandpackLayout>

    <SandpackLayout style={{ marginTop: 12 }}>
      <SandpackConsole />
    </SandpackLayout>
  </SandpackProvider>
);
