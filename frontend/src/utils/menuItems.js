import { dashBoard, transaction, trend, expenses } from '../utils/icons'
export const menuItems = [
    {
        id: 1,
        title: 'DashBoard',
        icon: dashBoard(),
        link: '/dashboard',
    },
    {
        id: 2,
        title: 'View Transactions',
        icon: transaction(),
        link: '/dashboard',
    },
    {
        id: 3,
        title: 'Incomes',
        icon: trend(),
        link: '/dashboard',
    },
    {
        id: 4,
        title: 'Expenses',
        icon: expenses(),
        link: '/dashboard',
    }
];
