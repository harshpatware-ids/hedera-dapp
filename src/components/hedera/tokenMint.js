import axios from "axios";
import { TokenMintTransaction } from "@hashgraph/sdk";

/**
 * Mints 100 more tokens to the treasury
 * @param {object} signer - The AppKit signer object
 * @param {string} tokenId - The ID of the token to mint
 * @returns {Array} [newTotalSupply, transactionId]
 */
async function tokenMintFcn(signer, tokenId) {
  console.log(`\n=======================================`);
  console.log(`- Minting 100 tokens for ${tokenId}...`);

  const amountToMint = 100;

  // 1. Create the token mint transaction
  const tokenMintTx = new TokenMintTransaction()
    .setTokenId(tokenId)
    .setAmount(amountToMint)
    .freezeWithSigner(signer); // Freeze the transaction with the signer

  // 2. Execute the transaction with the signer
  const tokenMintSubmit = await tokenMintTx.executeWithSigner(signer);

  // 3. Get the receipt (and wait for it to be processed by the mirror node)
  const provider = signer.getProvider();
  await provider.getTransactionReceipt(tokenMintSubmit.transactionId);

  console.log(`- Minted 100 tokens.`);
  console.log(`- Transaction ID: ${tokenMintSubmit.transactionId.toString()}`);

  // 4. Query the mirror node for the new total supply
  // It can take a few seconds for the mirror node to update.
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait 3 seconds
  
  const url = `https://testnet.mirrornode.hedera.com/api/v1/tokens/${tokenId}`;
  const { data } = await axios.get(url);
  
  const newTotalSupply = data.total_supply;
  console.log(`- New total supply: ${newTotalSupply}`);

  return [newTotalSupply, tokenMintSubmit.transactionId.toString()];
}

export default tokenMintFcn;