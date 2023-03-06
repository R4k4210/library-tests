import React from "react";
import { useWeb3 } from "react-dapp-web3";

function App() {
  const { walletAddress, connect, chainId } = useWeb3();

  return (
    <div>
      <p>Wallet Address: {walletAddress}</p>
      <p>Chain ID: {chainId}</p>
      <button onClick={connect}>Connect</button>
    </div>
  );
}

export default App;
