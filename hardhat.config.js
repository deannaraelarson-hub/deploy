require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",

  networks: {
    // ===== Ethereum Mainnet =====
    ethereum: {
      url: process.env.ETH_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Binance Smart Chain =====
    bsc: {
      url: process.env.BSC_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Polygon =====
    polygon: {
      url: process.env.POLYGON_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Arbitrum =====
    arbitrum: {
      url: process.env.ARBITRUM_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Optimism =====
    optimism: {
      url: process.env.OPTIMISM_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Avalanche =====
    avalanche: {
      url: process.env.AVAX_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Fantom =====
    fantom: {
      url: process.env.FANTOM_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Base =====
    base: {
      url: process.env.BASE_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Linea =====
    linea: {
      url: process.env.LINEA_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Scroll =====
    scroll: {
      url: process.env.SCROLL_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== zkSync Era =====
    zksync: {
      url: process.env.ZKSYNC_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Cronos =====
    cronos: {
      url: process.env.CRONOS_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Celo =====
    celo: {
      url: process.env.CELO_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Moonbeam =====
    moonbeam: {
      url: process.env.MOONBEAM_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Moonriver =====
    moonriver: {
      url: process.env.MOONRIVER_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Kava =====
    kava: {
      url: process.env.KAVA_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Aurora (Near EVM) =====
    aurora: {
      url: process.env.AURORA_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Metis =====
    metis: {
      url: process.env.METIS_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Mantle =====
    mantle: {
      url: process.env.MANTLE_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Gnosis (xDai) =====
    gnosis: {
      url: process.env.GNOSIS_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== OKX Chain =====
    okx: {
      url: process.env.OKX_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Harmony =====
    harmony: {
      url: process.env.HARMONY_RPC,
      accounts: [process.env.PRIVATE_KEY]
    },

    // ===== Polygon zkEVM =====
    polygon_zkevm: {
      url: process.env.POLYGON_ZKEVM_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
