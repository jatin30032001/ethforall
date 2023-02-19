import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@rainbow-me/rainbowkit/styles.css";

import { AuthProvider, CHAIN } from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, goerli, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import {
  createReactClient,
  LivepeerConfig,
  studioProvider,
} from "@livepeer/react";
import { BrowserRouter } from "react-router-dom";
import { ContractProvider } from "./context/ContractProvider";
import { UserProvider } from "./context/UserProvider";

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
  [goerli, polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id === mantleChain.id) return { http: chain.rpcUrls.default };
        if (chain.id === 80001)
          return { http: "https://rpc-mumbai.maticvigil.com" };
        if (chain.id === 5) return { http: process.env.REACT_APP_ALCHEMY };
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

const auprovider = new AuthProvider(process.env.REACT_APP_ARCANA_APP_ID, {
  network: "testnet", //defaults to 'testnet'
  position: "left", //defaults to right
  theme: "light", //defaults to dark
  alwaysVisible: true, //defaults to true which is Full UI mode
  chainConfig: {
    chainId: CHAIN.POLYGON_MAINNET, //defaults to CHAIN.ETHEREUM_MAINNET
    rpcUrl: "https://polygon-rpc.com", //defaults to 'https://rpc.ankr.com/eth'
  },
});

try {
  auprovider.init();
} catch (e) {
  console.log(e);
}

const livepeerClient = createReactClient({
  provider: studioProvider({ apiKey: process.env.REACT_APP_LIVEPEER }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WagmiConfig client={client}>
    <RainbowKitProvider chains={chains}>
      <LivepeerConfig client={livepeerClient}>
        <ProvideAuth provider={auprovider}>
          <ContractProvider>
            <UserProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </UserProvider>
          </ContractProvider>
        </ProvideAuth>
      </LivepeerConfig>
    </RainbowKitProvider>
  </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
