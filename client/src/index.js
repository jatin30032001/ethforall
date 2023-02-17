import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@rainbow-me/rainbowkit/styles.css";
import { AuthProvider, CHAIN} from "@arcana/auth";
import { ProvideAuth } from "@arcana/auth-react";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { BrowserRouter } from "react-router-dom";

import {
  createReactClient,
  LivepeerConfig,
  studioProvider,
} from "@livepeer/react";




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

const auprovider = new AuthProvider(process.env.REACT_APP_ARCANA_APP_ID,{ network: 'testnet', //defaults to 'testnet'
position: 'left', //defaults to right
theme: 'light', //defaults to dark
alwaysVisible: true, //defaults to true which is Full UI mode
chainConfig: {
  chainId: CHAIN.POLYGON_MAINNET, //defaults to CHAIN.ETHEREUM_MAINNET
  rpcUrl: 'https://polygon-rpc.com', //defaults to 'https://rpc.ankr.com/eth'
},})

try {
auprovider.init()
} catch (e) {
  // Handle exception case
}





// Assuming Auth SDK is integrated and initialized
try {
  provider = auprovider.provider
  const connected = auprovider.isLoggedIn()
  console.log({ connected })
  setHooks()
} catch (e) {
  // Handle exception case
}

// setHooks: Manage chain or account switch in Arcana wallet
function setHooks() {
  provider.on('connect', async (params) => {
    console.log({ type: 'connect', params: params })
    const isLoggedIn = await auprovider.isLoggedIn()
    console.log({ isLoggedIn })
  })
  provider.on('accountsChanged', (params) => {
    //Handle
    console.log({ type: 'accountsChanged', params: params })
  })
  provider.on('chainChanged', async (params) => {
    console.log({ type: 'chainChanged', params: params })
  })
}

async function signTransaction() {

  const { sig } = await provider.request({
    method: 'eth_signTransaction',
    params: [
      {
        from:'0x9dE5B1C0e3809e15d9D0a77b4C908acf3393dc17', // sender account address
        gasPrice: 0,
        to: '0xE28F01Cf69f27Ee17e552bFDFB7ff301ca07e780', // receiver account address
        value: '0x0de0b6b3a7640000',
      },
    ],
  })
  console.log({ sig })
}


try {
 signTransaction()
  } catch (e) {
    // Handle exception case
  }

// const value = auprovider.getUser();
// console.log("Hello")
// console.log(value);







const livepeerClient = createReactClient({
  provider: studioProvider({ apiKey: process.env.REACT_APP_LIVEPEER }),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <ProvideAuth provider={auprovider}>
      <LivepeerConfig client={livepeerClient}>
      <BrowserRouter>
      <App />
        </BrowserRouter>
        </LivepeerConfig>
    </ProvideAuth>
      </RainbowKitProvider>
    </WagmiConfig>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
