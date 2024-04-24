import {
    Connection,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    sendAndConfirmTransaction,
    SystemProgram,
    Transaction
} from "@solana/web3.js";
import {airdrop} from "../airdrop";
import {showBalance} from "../show-balance";

export const transferSol=async (from:Keypair,to:PublicKey,amount:number)=>{
    const connection = new Connection("http://localhost:8899","confirmed")
    const transaction=new Transaction()

    const instruction= SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey:to,
        lamports:amount*LAMPORTS_PER_SOL
    })

    transaction.add(instruction)
    // transaction.add(instruction)
    await sendAndConfirmTransaction(connection,transaction,[
        from
    ])
    console.log("Done")
}

const secret=Uint8Array.from([191,65,89,31,207,153,48,137,208,169,57,64,42,199,51,65,146,57,106,245,66,74,155,6,117,130,106,194,42,127,216,172,184,138,70,253,192,99,168,210,147,213,201,185,114,97,97,25,168,31,231,163,82,216,126,31,194,112,69,163,171,182,67,185])
const fromkeyPair=Keypair.fromSecretKey(secret)
const toPublicKey=new PublicKey("8q8zLWfpNKtmCCPFVXJc3R2wpEqgXSNFeWr94zBxSU4P");

(async ()=>{
    await airdrop(fromkeyPair.publicKey,4)
    const initBalance=await showBalance(fromkeyPair.publicKey)
    console.log(`Initial balance of from wallet is ${initBalance}`)
    const initBalanceTo=await showBalance(toPublicKey)
    console.log(`Initial balance of from wallet is ${initBalanceTo }`)

    await transferSol(fromkeyPair,toPublicKey,4)

    const initBalance2=await showBalance(fromkeyPair.publicKey)
    console.log(`Initial balance of from wallet is ${initBalance2}`)
    const initBalanceTo2=await showBalance(toPublicKey)
    console.log(`Initial balance of from wallet is ${initBalanceTo2 }`)

})()