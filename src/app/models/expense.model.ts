export interface Expense {
    id: string;
    description: string;
    amount: number;
    type: 'Receita' | 'Despesa';
    date: Date;
}