# Deployment Guide for Celo Network

This guide will help you deploy the CeloQuest smart contracts to the Celo network.

## Prerequisites

1. **Foundry Installation**: Make sure Foundry is installed
   ```bash
   curl -L https://foundry.paradigm.xyz | bash
   foundryup
   ```

2. **Celo Network Setup**:
   - **Mainnet**: Chain ID `42220`
   - **Alfajores (Testnet)**: Chain ID `44787`
   - Get testnet CELO from: https://faucet.celo.org

3. **Required Accounts**:
   - **Deployer Account**: Account with CELO (Celo native token) to pay for gas
   - **Reward Signer Account**: Separate account that will sign progress vouchers (EIP-712)

## Step 1: Install Dependencies

```bash
cd smartcontract
forge install OpenZeppelin/openzeppelin-contracts
```

## Step 2: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and fill in the required values:
   ```bash
   # Your deployer private key (without 0x prefix)
   PRIVATE_KEY=your_private_key_here
   
   # Address that will sign progress vouchers
   REWARD_SIGNER=0xYourRewardSignerAddress
   
   # RPC URLs (use testnet for testing)
   CELO_RPC_URL=https://forno.celo.org
   CELO_ALFAJORES_RPC_URL=https://alfajores-forno.celo-testnet.org
   
   # Optional: API key for contract verification (Celoscan)
   CELOSCAN_API_KEY=your_api_key_here
   ```

## Step 3: Build Contracts

```bash
forge build
```

## Step 4: Deploy to Celo Alfajores Testnet (Recommended First)

```bash
# Deploy to Celo Alfajores
forge script script/Deploy.s.sol:Deploy \
  --rpc-url alfajores \
  --broadcast \
  --verify \
  -vvvv
```

## Step 5: Deploy to Celo Mainnet

**⚠️ WARNING: Only deploy to mainnet after thorough testing on testnet!**

```bash
# Deploy to Celo Mainnet
forge script script/Deploy.s.sol:Deploy \
  --rpc-url celo \
  --broadcast \
  --verify \
  -vvvv
```

## Step 6: Verify Deployment

After deployment, the script will output all contract addresses. Verify them on Celoscan:
- **Mainnet**: https://celoscan.io
- **Alfajores**: https://alfajores.celoscan.io

## Deployment Order

The deployment script automatically handles the correct order:

1. **XPToken** - ERC20 token for XP rewards
2. **ChapterNFT** - ERC721 NFTs for chapter completion
3. **Leaderboard** - Tracks player scores and rankings
4. **GameCore** - Main game contract that coordinates everything

After deployment, the script automatically:
- Grants `MINTER_ROLE` to GameCore for XPToken
- Grants `MINTER_ROLE` to GameCore for ChapterNFT
- Grants `GAME_ROLE` to GameCore for Leaderboard
- Links Leaderboard to GameCore

## Post-Deployment Configuration

### Update Frontend Configuration

After deployment, update your frontend configuration with the deployed contract addresses in `constants/contracts.ts`.

### Update NFT Base URI

If you need to change the NFT metadata URI after deployment:

```bash
cast send <ChapterNFT_ADDRESS> "setBaseURI(string)" "https://your-new-base-uri.com/nft/" \
  --rpc-url celo \
  --private-key $PRIVATE_KEY
```

### Update Reward Signer

If you need to change the reward signer address:

```bash
cast send <GameCore_ADDRESS> "setRewardSigner(address)" <NEW_SIGNER_ADDRESS> \
  --rpc-url celo \
  --private-key $PRIVATE_KEY
```

## Security Considerations

1. **Private Key Security**: 
   - Never commit your `.env` file to version control
   - Use a hardware wallet or secure key management for production
   - Consider using a multisig wallet for admin functions

2. **Reward Signer**:
   - Use a separate account from the deployer
   - Keep the private key secure on your backend server
   - Implement proper nonce management and expiry checks

3. **Access Control**:
   - The deployer account gets `ADMIN_ROLE` on all contracts
   - Consider transferring admin roles to a multisig wallet

## Troubleshooting

### Insufficient Gas
If deployment fails due to gas:
- Ensure your deployer account has enough CELO
- Check gas prices: https://celoscan.io/gastracker

### Contract Verification Failed
If verification fails:
- Ensure `CELOSCAN_API_KEY` is set correctly
- Try manual verification on Celoscan

### RPC Connection Issues
If RPC connection fails:
- Check your RPC URL is correct
- Try alternative RPC endpoints (e.g., Ankr, QuickNode)

## Deployed Contracts (Celo Mainnet)

| Contract | Address |
| :--- | :--- |
| **XPToken** | `0x59e188c22faa5b9fc004a97cf7bde85ca8a0ac4a` |
| **ChapterNFT** | `0xa51d3fb3858ef1741ffa7a85d5cce0b7da28da59` |
| **Leaderboard** | `0x9c0c8a0a72717d9588f5457dc697d95f4c2a7b7e` |
| **GameCore** | `0x7286f0ae716e89e0c701b95a3da3a5730c2ee681` |

## Support

For issues or questions:
- Celo Docs: https://docs.celo.org
- Foundry Book: https://book.getfoundry.sh
