import entryList from './list.json';

export type Platform = {
  /**
   * The name of the exchange.
   */
  name: string
  /**
   * The website URL of the exchange.
   */
  website: string
  /**
   * A description of the exchange.
   */
  description: string
  /**
   * Tags categorizing the exchange.
   */
  tags: (
    | "perpetual exchange"
    | "lending"
    | "dao"
    | "forex"
    | "commodities"
    | "swaps"
    | "atomic swaps"
    | "cross-chain swaps"
    | "open source"
    | "binary options"
    | "aggregator"
    | "ecosystem"
    | "oracle"
    | "derivatives"
    | "bridge"
    | "automated market maker"
    | "order book"
    | "address screening"
    | "osmosis ecosystem"
    | "testnet-only"
    | "synthetic assets"
    | "synthetix ecosystem"
    | "leveraged yield farming"
    | "yield farming"
    | "uma ecosystem"
    | "flash loans"
  )[]
  /**
   * List of supported coins.
   */
  coins?: string[]
  /**
   * List of supported blockchain chains.
   */
  chains: (
    | "Aptos"
    | "Arbitrum Nova"
    | "Arbitrum One"
    | "Aurora"
    | "Avalanche"
    | "BNB"
    | "Base"
    | "Binance Smart Chain"
    | "Bitcoin Cash"
    | "Bitcoin"
    | "Boba"
    | "Cardano"
    | "Celo"
    | "Cronos"
    | "Ethereum"
    | "Fantom"
    | "FunctionX"
    | "Gelato"
    | "Gnosis"
    | "Harmony"
    | "Kava"
    | "Mantle"
    | "Metis"
    | "Monero"
    | "Moonbeam"
    | "NEAR"
    | "Optimism"
    | "Osmosis"
    | "POAP"
    | "Polygon Mumbai"
    | "Polygon zkEVM"
    | "Polygon"
    | "Sei"
    | "Solana"
    | "Stella"
    | "Sui"
    | "The Graph"
    | "xDai"
    | "zkSync Era"
  )[]
  /**
   * URL to the documentation.
   */
  docs?: string
  /**
   * URL to the Twitter profile.
   */
  twitter?: string
  /**
   * URL to the Discord server.
   */
  discord?: string
  /**
   * URL to the GitHub repository.
   */
  github?: string
  /**
   * Telegram link.
   */
  telegram?: string
  /**
   * Medium URL.
   */
  medium?: string
  /**
   * Mirror.xyz of the platform.
   */
  mirror?: string
  /**
   * Mirror.xyz of the platform.
   */
  roadmap?: string
  /**
   * URL to the source code.
   */
  sourceUrl?: string
  /**
   * Maximum leverage provided by the exchange.
   */
  maxLeverage?: number
  /**
   * Maximum leverage provided by the exchange.
   */
  leverageInfo?: string
  /**
   * Indicates whether the exchange is open source.
   */
  opensource?: boolean
};

export type List = Platform[]

export const list = entryList as List;
