import { Stock } from './stock.model';

export const MOCKDATA: Stock[] = [
  { name: 'General Motors', symbol: 'GM', closingprice: 878.42 },
  new Stock('Goldman Sachs', 'CS', 56.15),
  new Stock('Square', 'SQ', 89.13),
  new Stock('Berkshire Hathaway', 'BRK', 345879.81)
];
