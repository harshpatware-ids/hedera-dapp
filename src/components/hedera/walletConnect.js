"use client";
import React, { useState } from "react";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

export default function WalletConnectButton() {
  const { open } = useAppKit();
  const { isConnected, address } = useAppKitAccount();
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (!isConnected) {
      open(); // opens Reown connect modal
    } else {
      console.log("Wallet already connected:", address);
    }
  };

  // Use document.execCommand for more reliable copying in sandboxed environments
  const handleCopy = () => {
    if (address) {
      // Create a temporary textarea element
      const textArea = document.createElement("textarea");
      textArea.value = address;

      // Hide the textarea from view
      textArea.style.position = "fixed";
      textArea.style.top = "-9999px";
      textArea.style.left = "-9999px";
      
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand('copy');
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }
      } catch (err) {
        console.error("Failed to copy address: ", err);
      }

      document.body.removeChild(textArea);
    }
  };

  return (
    // Using Tailwind classes as provided
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
    >
      {isConnected ? (
        <>
          <span>{`${address.slice(0, 6)}...${address.slice(-4)}`}</span>
          <span
            onClick={(e) => {
              e.stopPropagation(); // prevent triggering connect again
              handleCopy();
            }}
            className="p-1 rounded hover:bg-purple-500 cursor-pointer"
            title="Copy address"
          >
            📋
          </span>
          {copied && <span className="text-xs ml-1">Copied!</span>}
        </>
      ) : (
        "Connect Wallet"
      )}
    </button>
  );
}
