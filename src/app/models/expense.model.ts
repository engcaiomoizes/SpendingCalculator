export interface Expense {
    description: string;
    amount: number;
    type: 'Receita' | 'Despesa';
    date: string;
}