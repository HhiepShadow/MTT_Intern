// Index Signatures:
interface TransactionObj {
    [index: string]: any;
    Pizza: number;
    Books: number;
    Job: number;
};

const transaction: TransactionObj = {
    Pizza: 10,
    Books: 5,
    Job: 7
};

console.log(transaction['Name']); // No error and return undefined

// keyof Keyword:
// To get all keys of object:
type KeyOfType = keyof TransactionObj; // type KeyOfType = "Pizza" | "Books" | "Job";
const keyOfType: KeyOfType = "Pizza";
