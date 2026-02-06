import React from "react";
import { connectHedera } from "./components/hedera/hederaConnector";
import tokenCreate from "./components/hedera/tokenCreate";

export default function App() {
  const createToken = async () => {
    try {
      const connector = await connectHedera();
      const tokenId = await tokenCreate(connector);
      alert(`Token created: ${tokenId}`);
    } catch (e) {
      console.error(e);
      alert(e.message);
    }
  };

  return (
    <div>
      <h2>Hedera Token Creator</h2>
      <button onClick={createToken}>
        Connect HashPack & Create Token
      </button>
    </div>
  );
}
