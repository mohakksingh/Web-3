import { Connection, PublicKey, LAMPORTS_PER_SOL, AccountInfo } from "@solana/web3.js"
import { airdrop } from "../airdrop";
export const showBalance = async(publicKey: PublicKey): Promise<number | null> =>{

    const conn = new Connection("http://127.0.0.1:8899", "confirmed");

    const response = await conn.getAccountInfo(publicKey);

    if (response === null) {
        return null;
    }
    return response.lamports/LAMPORTS_PER_SOL;

}
// (async()=>{
//     const publicKey="8q8zLWfpNKtmCCPFVXJc3R2wpEqgXSNFeWr94zBxSU4H"
//     const balance =await showBalance(new PublicKey(publicKey))
//     console.log(`The balance for they key is ${publicKey} is ${balance}`)
//     await airdrop(publicKey,5)
//     const updatedBalance =await showBalance(new PublicKey(publicKey))
//     console.log(`Updated balance is ${updatedBalance}`)
// })()


