import {
  percentAmount,
  generateSigner,
  signerIdentity,
  createSignerFromKeypair,
} from "@metaplex-foundation/umi";
import {
  TokenStandard,
  createAndMint,
} from "@metaplex-foundation/mpl-token-metadata";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";
import "@solana/web3.js";

const umi = createUmi("QuickNode_RPC_URL"); //Replace with your QuickNode RPC Endpoint

import bs58 from "bs58";

//STEP 2 - Generate a New Solana Wallet
const umiAdminKeypair = umi.eddsa.createKeypairFromSecretKey(
  bs58.decode("PRIVATE_KEY")
);

const userWalletSigner = createSignerFromKeypair(umi, umiAdminKeypair);

console.log(userWalletSigner.publicKey.toString());

const mint = generateSigner(umi);
umi.use(signerIdentity(userWalletSigner));
umi.use(mplCandyMachine());

const metadata = {
  name: "New GOTM (GOTM)",
  symbol: "N-GOTM",
  description: "This is enhance token for GOTM ecosystem",
  uri: "https://bafkreidhp3d4mwu64unchkyn5issro3baluhei5fmtmzaql2lxvczb4ua4.ipfs.nftstorage.link/",
};

createAndMint(umi, {
  mint,
  authority: umi.identity,
  name: metadata.name,
  symbol: metadata.symbol,
  uri: metadata.uri,
  sellerFeeBasisPoints: percentAmount(0),
  decimals: 9,
  amount: 1000000000_000000000,
  tokenOwner: userWalletSigner.publicKey,
  tokenStandard: TokenStandard.Fungible,
})
  .sendAndConfirm(umi)
  .then(() => {
    console.log("Successfully minted 1 million tokens (", mint.publicKey, ")");
  });
