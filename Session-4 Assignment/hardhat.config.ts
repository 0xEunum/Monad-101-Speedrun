import hardhatToolboxViemPlugin from "@nomicfoundation/hardhat-toolbox-viem";
import {
  configVariable,
  defineConfig,
  HardhatUserConfig,
} from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";

const config: HardhatUserConfig = defineConfig({
  plugins: [hardhatToolboxViemPlugin],

  solidity: {
    version: "0.8.27", // Match your contract
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },

    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },

    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("https://1rpc.io/sepolia"),
      accounts: [configVariable("NAI_BOL_TAY")],
    },

    monadTestnet: {
      type: "http",
      chainType: "l1",
      url: configVariable("wss://monad-testnet.drpc.org"),
      accounts: [configVariable("NAI_BOL_TAY")],
    },
  },
});

export default config;
