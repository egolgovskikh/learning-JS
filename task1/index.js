let money = prompt("Ваш бюджет на месяц?", '');
let date = prompt("Введите дату в формате YYYY-MM-DD", '');
let obligatoryExpensesPerMonth = prompt("Введите обязательную статью расходов в этом месяце", '');
let howMuchWillCost = prompt("Во сколько обойдется?", '');

let appData = {
    budget: money,
    timeData: date,
    expenses: {
        [obligatoryExpensesPerMonth] : howMuchWillCost
    },
    optionalExpenses: '',
    income: [],
    savings: "false"
};

const budgetPerDay = appData.budget / 30;

alert(budgetPerDay);
console.log(appData);