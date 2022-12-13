import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { MovieContextProvider } from "./context/movieContext";
import App from "./App";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <BrowserRouter>
            {/* <MovieContextProvider> */}
                <App />
            {/* </MovieContextProvider> */}
        </BrowserRouter>
    </StrictMode>
)

