/**
 * A digital wallet application stores information about a user's account.
 * 
 * A wallet has:
 * - Owner name
 * - Wallet ID
 * - Balance
 * 
 * For example, Jude Bellingham creates a wallet with:
 * | Property        | Value           |
 * | --------------- | --------------- |
 * | Wallet ID       | WAL001          |
 * | Owner           | Harry Maguire   |
 * | Initial Balance | Rp500,000       |
 * 
 * The application allows the user to:
 * - Deposit money
 * - Withdraw money
 * - Check the current balance
 * However, the balance must not be changed directly from outside the class.
 * 
 * Student Tasks:
 * Create: class DigitalWallet
 * Use:
 * - private balance: number;
 * 
 * The class should provide public methods:
 * - deposit(amount)
 * - withdraw(amount)
 * - getBalance()
 * - showWalletInfo()
 * 
 * Business Rules
 * deposit():
 * - Amount must be greater than 0.
 * 
 * withdraw():
 * - Amount must be greater than 0.
 * - Amount cannot exceed the current balance.
 */
class DigitalWallet{
    walletId: string;
    owner: string;
    private balance: number; 

    constructor(walletId: string, owner: string, initialBalance: number){
        this.walletId = walletId;
        this.owner = owner;
        this.balance = initialBalance;
    }
    deposit(amount: number): void{
        if(amount > 0){
            this.balance += amount;
            console.log("Deposited: " + amount);
        }else{
            console.log("Invalid amount");
        }
    }
    withdraw(amount: number): void{
        if(amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn: " + amount);
        }else{
            console.log("Invalid amount");
        }
    }
    getBalance(): number{
        return this.balance;
    }
    showWalletInfo(): void{
        console.log("WalletId: " + this.walletId);
        console.log("Owner:  " + this.owner);
        console.log("Balance: " + this.balance);
    }
}
const wallet = new  DigitalWallet("WAL001", "Harry Maguire", 500000 )
wallet.showWalletInfo();
wallet.deposit(100000);
wallet.withdraw(50000);
console.log(wallet.getBalance());
