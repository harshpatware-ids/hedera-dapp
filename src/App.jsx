import React from "react";
import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import tokenCreateFcn from "./components/hedera/tokenCreate.js";
import WalletConnectButton from "./components/hedera/walletConnect.js";
import "./styles/App.css";
export default function App() {
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");

  const tokenCreate = async () => {
    if (!isConnected) {
      alert("⚠️ Connect your wallet first!");
      return;
    }

    try {
      const result = await tokenCreateFcn(walletProvider, address);
      alert(`✅ Token created successfully!\nTx ID: ${result?.transactionId || result}`);
    } catch (err) {
      console.error("❌ Error creating token:", err);
      alert("❌ Failed to create token — check console for details.");
    }
  };

  return (
    <div className="App">
			<h1 className="header">Let's build a dapp on Hedera!</h1>
    <div className="flex flex-col items-center mt-10 space-y-6">
      <h1 className="text-2xl text-white font-bold">🚀 Hedera Token Creator</h1>
      <div className="wallet-connect">
        <WalletConnectButton />
      </div>
      <button
        onClick={tokenCreate}
        className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow"
      >
        Create Token
      </button>
    </div>
    <div className="logo">
				<div className="symbol">
					<svg
						id="Layer_1"
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 40 40"
					>
						<path d="M20 0a20 20 0 1 0 20 20A20 20 0 0 0 20 0" className="circle"></path>
						<path
							d="M28.13 28.65h-2.54v-5.4H14.41v5.4h-2.54V11.14h2.54v5.27h11.18v-5.27h2.54zm-13.6-7.42h11.18v-2.79H14.53z"
							className="h"
						></path>
					</svg>
				</div>
				<span>Hedera</span>
			</div>
		</div>
  );
}
