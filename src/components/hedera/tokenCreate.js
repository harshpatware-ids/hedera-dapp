import {
  TokenCreateTransaction,
  Hbar,
  Client,
  AccountId,
  PrivateKey,
} from "@hashgraph/sdk";

const tokenCreateFcn = async (walletProvider, accountId) => {
  try {
    console.log("🚀 Creating HTS token on Hedera Testnet...");

    if (!walletProvider || !accountId) {
      throw new Error("Missing wallet provider or account ID");
    }

    // Create client (wallet as treasury)
    const client = Client.forTestnet().setOperator(
      AccountId.fromString(accountId),
      PrivateKey.generateED25519()
    );

    // Build token creation transaction
    const tokenCreateTx = await new TokenCreateTransaction()
      .setTokenName("MyToken")
      .setTokenSymbol("MTK")
      .setDecimals(2)
      .setInitialSupply(1000)
      .setTreasuryAccountId(accountId)
      .setMaxTransactionFee(new Hbar(2))
      .freezeWith(client);
    const Buffer = await import("buffer").then((mod) => mod.Buffer);
    // Convert to bytes and then hex for EVM provider
    const txBytes = Buffer.from(await tokenCreateTx.toBytes());
    const txHex = "0x" + txBytes.toString("hex"); // ✅ proper format

    console.log("🧾 Prepared transaction for EVM wallet signing");

    // Send through provider (AppKit/Reown compatible)
    const response = await walletProvider.request({
      method: "eth_sendRawTransaction",
      params: [txHex],
    });

    console.log("✅ Token creation transaction submitted:", response);
    return response;
  } catch (error) {
    console.error("❌ Error creating token:", error);
    throw error;
  }
};
export default tokenCreateFcn;
