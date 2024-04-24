"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showBalance = void 0;
const web3_js_1 = require("@solana/web3.js");
const showBalance = (publicKey) => __awaiter(void 0, void 0, void 0, function* () {
    const conn = new web3_js_1.Connection("http://127.0.0.1:8899", "confirmed");
    const response = yield conn.getAccountInfo(publicKey);
    if (response === null) {
        return null;
    }
    return response.lamports / web3_js_1.LAMPORTS_PER_SOL;
});
exports.showBalance = showBalance;
// (async()=>{
//     const publicKey="8q8zLWfpNKtmCCPFVXJc3R2wpEqgXSNFeWr94zBxSU4H"
//     const balance =await showBalance(new PublicKey(publicKey))
//     console.log(`The balance for they key is ${publicKey} is ${balance}`)
//     await airdrop(publicKey,5)
//     const updatedBalance =await showBalance(new PublicKey(publicKey))
//     console.log(`Updated balance is ${updatedBalance}`)
// })()
//# sourceMappingURL=index.js.map