import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Provider } from "./context/context"
import { SpeechProvider } from "@speechly/react-client"

import App from "./App"

ReactDOM.render(
  <SpeechProvider appId="7a1fe466-3e89-46fc-ad80-2cd883575932" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
)
