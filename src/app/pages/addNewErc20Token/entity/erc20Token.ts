export class AddNewErc20Token {
  contractAddress: String;
  walletAddress: String;
  currency: Currencies;
}

interface Currencies {
  currencyName: String;
  currencyAbbreviation: String;
}
