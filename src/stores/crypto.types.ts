
export type TCryptoDefaultStates= {
  cryptoList: Map<string,TCryptoData>
  currenciesList: string[]
  currencyActive: string
  cryptoFavorites: Map<string,TCryptoData>
}
export type TCryptoList = {
  [key: string]: TCryptoData
}

export type TEntryCryptoData = {
  id: string,
  image: string,
  current_price: number
  market_cap: number,
  total_volume: number,
  price_change_24h: number,
  sparkline_in_7d: {
    price: number[],
  }
}

export type TCryptoData = {
  id: string
  name: string
  symbol: string
  image?: string
  sparkline_in_7d?: number[]
  pricesByCurrencies: {
    [key: string]: {
      current_price: number
      market_cap: number,
      total_volume: number,
      price_change_24h: number,
    }
  }
}