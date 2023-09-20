const config = {
  walletConnectV2: {
    projectId: process.env.REACT_APP_WALLETCONNECT_PROJECTID ?? "",
    chainIds: [1],
  },
  coinbase: {
    chainId: 1,
    jsonRPCUrl: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_API_KEY}`,
  },
};

export default config;
