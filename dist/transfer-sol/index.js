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
exports.transferSol = void 0;
const web3_js_1 = require("@solana/web3.js");
const airdrop_1 = require("../airdrop");
const show_balance_1 = require("../show-balance");
const transferSol = (from, to, amount) => __awaiter(void 0, void 0, void 0, function* () {
    const connection = new web3_js_1.Connection("http://localhost:8899", "confirmed");
    const transaction = new web3_js_1.Transaction();
    const instruction = web3_js_1.SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: amount * web3_js_1.LAMPORTS_PER_SOL
    });
    transaction.add(instruction);
    transaction.add(instruction);
    yield (0, web3_js_1.sendAndConfirmTransaction)(connection, transaction, [
        from
    ]);
    console.log("Done");
});
exports.transferSol = transferSol;
const secret = Uint8Array.from([191, 65, 89, 31, 207, 153, 48, 137, 208, 169, 57, 64, 42, 199, 51, 65, 146, 57, 106, 245, 66, 74, 155, 6, 117, 130, 106, 194, 42, 127, 216, 172, 184, 138, 70, 253, 192, 99, 168, 210, 147, 213, 201, 185, 114, 97, 97, 25, 168, 31, 231, 163, 82, 216, 126, 31, 194, 112, 69, 163, 171, 182, 67, 185]);
const fromkeyPair = web3_js_1.Keypair.fromSecretKey(secret);
const toPublicKey = new web3_js_1.PublicKey("8q8zLWfpNKtmCCPFVXJc3R2wpEqgXSNFeWr94zBxSU4P");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, airdrop_1.airdrop)(fromkeyPair.publicKey, 50);
    const initBalance = yield (0, show_balance_1.showBalance)(fromkeyPair.publicKey);
    console.log(`Initial balance of from wallet is ${initBalance}`);
    const initBalanceTo = yield (0, show_balance_1.showBalance)(toPublicKey);
    console.log(`Initial balance of from wallet is ${initBalanceTo}`);
    yield (0, exports.transferSol)(fromkeyPair, toPublicKey, 50);
    const initBalance2 = yield (0, show_balance_1.showBalance)(fromkeyPair.publicKey);
    console.log(`Initial balance of from wallet is ${initBalance2}`);
    const initBalanceTo2 = yield (0, show_balance_1.showBalance)(toPublicKey);
    console.log(`Initial balance of from wallet is ${initBalanceTo2}`);
}))();
//# sourceMappingURL=index.js.map