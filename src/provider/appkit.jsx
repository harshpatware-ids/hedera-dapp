"use client";
import React from "react";

// Import BOTH the EVM and Native networks directly from Reown
import {
  hedera, // EVM Mainnet (eip155)
  hederaTestnet, // EVM Testnet (eip155)
  hederaPreviewnet, // EVM Previewnet (eip155)
} from "@reown/appkit/networks";
import { createAppKit } from "@reown/appkit/react";

const projectId = "38b3780af30e1d350272ca657008e15b";

const metadata = {
  name: "hedera-dapp",
  description: "A demo Hedera dApp",
  url: typeof window !== "undefined" ? window.location.origin : "",
  icons: ["https://hashpack.app/img/logo.svg"],
};

// --- 1. Define all networks ---
// We can now include both EVM and Native chains.
const allNetworks = [hedera, hederaTestnet, hederaPreviewnet];

// --- 2. Init Reown (AppKit) ---
createAppKit({
  networks: allNetworks,

  projectId,
  metadata,
  features: {
    auth: true,
    email: true,
    socials: ["google", "apple", "discord", "twitter", "github"],
    explorer: true,
    transactions: true,
    swaps: true,
    onramp: true,
    profile: true,
    testnets: true,
    accountCenter: true,
  },
  enableWalletConnect: true,
  allWallets: "SHOW",
  themeMode: "light",
  themeVariables: {
    "--w3m-font-family": "sans-serif",
    "--w3m-accent": "#FB923C",
  },
});

export function AppKit({ children }) {
  return <>{children}</>;
}
