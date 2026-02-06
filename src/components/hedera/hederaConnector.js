import {
  DAppConnector,
  HederaJsonRpcMethod,
  HederaSessionEvent,
  HederaChainId,
} from "@hashgraph/hedera-wallet-connect";

 
const NETWORK_CONFIG = {
  testnet: {
    network: "testnet",
    jsonRpcUrl: `https://testnet.hedera.validationcloud.io/v1/u6nlkP-txp_7uBck4G5Ujhp-mmEWNEtHn0izrFbFyl0`,
    mirrorNodeUrl: "https://testnet.mirrornode.hedera.com",
    chainId: "0x128",
  },
};

const walletConnectProjectId = "38b3780af30e1d350272ca657008e15b";
const currentNetworkConfig = NETWORK_CONFIG.testnet;
const hederaNetwork = currentNetworkConfig.network;
const metadata = {
  name: "testdemo",
  description: "Simple Hedera WalletConnect Integration",
  url: window.location.origin,
  icons: [window.location.origin + "/logo192.png"],
};

// Initialize WalletConnect using the explicit array of methods
const dappConnector = new DAppConnector(
  metadata,
  hederaNetwork,
  walletConnectProjectId,
  Object.values(HederaJsonRpcMethod),
  [HederaSessionEvent.ChainChanged, HederaSessionEvent.AccountsChanged],
  [HederaChainId.Testnet]
);

let initialized = false;

export async function connectHedera() {
  if (!initialized) {
    await dappConnector.init(); 
    initialized = true;
  }

  if (!dappConnector.signers || dappConnector.signers.length === 0) {
    await dappConnector.openModal();
  }

  if (!dappConnector.session?.namespaces?.hedera) {
    throw new Error(
      "No Hedera namespace. Use HashPack in Hedera mode (0.0.xxxxx)."
    );
  }

  return dappConnector;
}
