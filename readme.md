# Fastest way to Create Fugible SPL token on Solana

## Developer packages

Token Metadata

- :umi: TypeScript NPM package: [v0.9.1](https://github.com/metaplex-foundation/umi/blob/main/docs/installation.md)
- :metaplex token metadata: NPM package: [v3.2.1](https://www.npmjs.com/package/@metaplex-foundation/mpl-token-metadata/v/3.2.1)

## 📄 Technical Summary

In order to create and upload SPL fungible token to solana network, you just need to upload metadata and interact solana network using javascript library.

> **Note:**
> You need to replace `QuickNode_RPC_URL` and `PRIVATE_KEY` in `mint.ts` with your ones.

```
npm install
ts-node mint.ts
```

## Authors

- [@toptal126](https://www.github.com/toptal126)
