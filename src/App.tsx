import { useWeb3, EWalletProviders } from "react-dapp-web3";

const App = () => {
  const { walletAddress, connect, chainId, disconnect, signMessage } =
    useWeb3();

  const sign = async () => {
    const message = await signMessage("hola");
    console.log("message", message);
  };

  return (
    <div>
      <h2>Test del hook</h2>
      <p>Wallet Address: {walletAddress}</p>
      <p>Chain ID: {chainId}</p>
      <button onClick={() => connect(EWalletProviders.METAMASK)}>
        Metamask
      </button>
      <br />
      <button onClick={() => connect(EWalletProviders.WALLET_CONNECT_V2)}>
        Wallet Connect
      </button>
      <br />
      <button onClick={() => connect(EWalletProviders.COINBASE)}>
        Coinbase
      </button>
      <br />
      <button onClick={disconnect}>Disconnect</button>
      <button onClick={sign}>Sign</button>
      <br />
      <br />
    </div>
  );
};

export default App;
