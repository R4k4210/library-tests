import { IWithWeb3, withWeb3 } from "react-dapp-web3";

interface IHOCTest extends IWithWeb3 {
  title: string;
}

const HOCTest = ({ title, web3Data }: IHOCTest) => {
  const { walletAddress, chainId, connect, disconnect } = web3Data;

  return (
    <div>
      <h2>{title}</h2>
      <p>Wallet Address: {walletAddress}</p>
      <p>Chain ID: {chainId}</p>
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
};

export default withWeb3(HOCTest);
