import {
  TokenCreateTransaction,
  TokenType,
  TokenSupplyType,
} from "@hashgraph/sdk";

export default async function tokenCreate(connector) {
  const signer = connector.signers?.[0];
  if (!signer) {
    throw new Error("No Hedera signer available");
  }

  const accountId = signer.getAccountId();
console.log(accountId)
  // Build transaction (DO NOT freeze manually)
  const tx = new TokenCreateTransaction()
    .setTokenName("MyToken")
    .setTokenSymbol("MTK")
    .setTokenType(TokenType.FungibleCommon)
    .setDecimals(2)
    .setInitialSupply(1000)
    .setTreasuryAccountId(accountId)
    .setSupplyType(TokenSupplyType.Infinite);

  // 🔥 THIS IS THE ONLY VALID EXECUTION CALL
  const response = await signer.executeTransaction(tx);

  if (!response?.receipt?.tokenId) {
    throw new Error("Token creation failed");
  }

  return response.receipt.tokenId.toString();
}
