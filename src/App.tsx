import { useWeb3 } from "react-dapp-web3";
import HOCTest from "./HOCTest";

function App() {
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
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
      <button onClick={sign}>Sign</button>

      <br />
      <br />

      <HOCTest title="Test del HOC" />
    </div>
  );
}

export default App;
