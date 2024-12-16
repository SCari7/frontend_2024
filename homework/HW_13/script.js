// const bankAccount = {
//     accountNumber: "123456789",
//     accountHolderName: "Alice",
//     balance: 0,

//     // Метод для пополнения счёта
//     deposit: function (sum) {
//         sum > 0
//             ? (this.balance += sum, console.log(`На счет добавлено ${sum}. Текущий баланс: ${this.balance}`))
//             : console.log("Сумма для пополнения должна быть больше 0.");
//     },

//     // Метод для снятия средств
//     withdraw: function (sum) {
//         sum > this.balance
//             ? console.log("Недостаточно средств для снятия.")
//             : sum > 0
//             ? (this.balance -= sum, console.log(`Со счета снято ${sum}. Текущий баланс: ${this.balance}`))
//             : console.log("Сумма для снятия должна быть больше 0.");
//     },

//     // Метод для проверки баланса
//     checkBalance: function () {
//         console.log(`Текущий баланс: ${this.balance}`);
//     },
// };

const bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0,

    deposit: function (sum) {
        sum > 0
            ? (this.balance += sum, this.updateBalance())
            : alert("Amount must be greater than 0.");
    },

    withdraw: function (sum) {
        sum > this.balance
            ? alert("Insufficient funds.")
            : sum > 0
            ? (this.balance -= sum, this.updateBalance())
            : alert("Amount must be greater than 0.");
    },

    updateBalance: function () {
        document.getElementById("balance").innerText = this.balance;
    },
};

document.getElementById("depositButton").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount)) {
        bankAccount.deposit(amount);
    } else {
        alert("Please enter a valid amount.");
    }
});

document.getElementById("withdrawButton").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    if (!isNaN(amount)) {
        bankAccount.withdraw(amount);
    } else {
        alert("Please enter a valid amount.");
    }
});
