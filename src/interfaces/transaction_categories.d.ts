export interface TransactionCategories {
  income: TransactionItem[]
  expenses: TransactionItem[]
}

export interface TransactionItem {
  id: number
  name: string
  category: string
}