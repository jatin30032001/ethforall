import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const mantleChain = {
  id: 5001,
  name: "Mantle Testnet",
  network: "mantle",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle Testnet",
    symbol: "BIT",
  },
  rpcUrls: {
    default: "https://rpc.testnet.mantle.xyz/",
  },
  blockExplorers: {
    default: {
      name: "Mantle Testnet",
      url: "https://explorer.testnet.mantle.xyz/",
    },
  },
  testnet: true,
};
const { chains, provider, webSocketProvider } = configureChains(
  [mantleChain, polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id === mantleChain.id) return { http: chain.rpcUrls.default };
        if (chain.id === 80001)
          return { http: "https://rpc-mumbai.maticvigil.com" };
        return null;
      },
    }),
  ]
);


const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

let client;
if (typeof window !== "undefined") {
  client = createClient({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
  });
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
