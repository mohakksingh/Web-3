import {PublicKey,Connection,LAMPORTS_PER_SOL} from "@solana/web3.js"
export const airdrop=async (address:string,amount:number)=>{

    const publicKey=new PublicKey(address)
    const conn=new Connection("http://localhost:8899","confirmed")
    const signature = await conn.requestAirdrop(publicKey,amount* LAMPORTS_PER_SOL)
    await conn.confirmTransaction(signature)

}

airdrop("8q8zLWfpNKtmCCPFVXJc3R2wpEqgXSNFeWr94zBxSU4H", 4)




