import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  safeWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import * as chains from "viem/chains";
import scaffoldConfig from "~~/scaffold.config";

const { onlyLocalBurnerWallet, targetNetworks } = scaffoldConfig;

// Base wallets that don't require browser APIs
const baseWallets = [
  metaMaskWallet,
  walletConnectWallet,
  ledgerWallet,
  coinbaseWallet,
  rainbowWallet,
  safeWallet,
];

/**
 * Get wagmi connectors for the wagmi context
 * Conditionally includes burner wallet only on client side to avoid indexedDB during SSR
 */
export const getWagmiConnectors = () => {
  let wallets = baseWallets;

  // Only add burner wallet on client side to avoid indexedDB access during SSR
  // We check for window to ensure this only runs in browser environment
  if (typeof window !== "undefined") {
    try {
      // Dynamic require to avoid bundling burner-connector during SSR
      if (!targetNetworks.some(network => network.id !== (chains.hardhat as chains.Chain).id) || !onlyLocalBurnerWallet) {
        const { rainbowkitBurnerWallet } = require("burner-connector");
        wallets = [...baseWallets, rainbowkitBurnerWallet];
      }
    } catch (error) {
      console.warn("Failed to load burner wallet:", error);
    }
  }

  return connectorsForWallets(
    [
      {
        groupName: "Supported Wallets",
        wallets,
      },
    ],
    {
      appName: "scaffold-eth-2",
      projectId: scaffoldConfig.walletConnectProjectId,
    },
  );
};
