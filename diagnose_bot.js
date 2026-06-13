const { createPublicClient, http, parseAbi, createWalletClient } = require('viem');
const { privateKeyToAccount } = require('viem/accounts');
const { celo } = require('viem/chains');
require('dotenv').config({ path: './.env.local' });

const MASTER_PRIVATE_KEY = process.env.PRIVATE_KEY;
const masterAccount = privateKeyToAccount(MASTER_PRIVATE_KEY.startsWith('0x') ? MASTER_PRIVATE_KEY : `0x${MASTER_PRIVATE_KEY}`);
const GAME_CORE_ADDRESS = '0x4119c4b90bbd7b9f598c53a44294fa05fe9f26fd';

const publicClient = createPublicClient({
  chain: celo,
  transport: http('https://forno.celo.org')
});

const abi = parseAbi([
  'function claimProgress(uint8 questType, uint256 questId, uint256 quizScore, uint256 timeTaken, uint256 xp, uint256 nonce, uint256 expiry, bytes signature) external',
  'function rewardSigner() view returns (address)',
  'function xpToken() view returns (address)',
  'function chapterNft() view returns (address)'
]);

async function diagnose() {
  try {
    const rewardSigner = await publicClient.readContract({
      address: GAME_CORE_ADDRESS,
      abi,
      functionName: 'rewardSigner'
    });
    console.log('Reward Signer on-chain:', rewardSigner);
    console.log('Master Account:', masterAccount.address);

    const xpToken = await publicClient.readContract({
      address: GAME_CORE_ADDRESS,
      abi,
      functionName: 'xpToken'
    });
    console.log('XP Token:', xpToken);

    // Simulate the exact failing transaction from the logs
    // sender: 0x48973C062411fE4281416B4CBFb3c31d9eC8490C
    // args: (1, 3, 100, 263, 100, 162079072, 1779647093, 0xe73207887348017b8462794f736f3df69ffe373255c95b3e942e5ecbe1e6fedb0db633a5b604f63d249e61f99753bab5e8825ca9eaefb4bbcb708beed3df79ab1b)
    
    await publicClient.simulateContract({
      address: GAME_CORE_ADDRESS,
      abi,
      functionName: 'claimProgress',
      account: '0x48973C062411fE4281416B4CBFb3c31d9eC8490C',
      args: [
        1, 
        3n, 
        100n, 
        263n, 
        100n, 
        162079072n, 
        1779647093n, 
        '0xe73207887348017b8462794f736f3df69ffe373255c95b3e942e5ecbe1e6fedb0db633a5b604f63d249e61f99753bab5e8825ca9eaefb4bbcb708beed3df79ab1b'
      ]
    });
    
    console.log('Simulation succeeded!');
  } catch (err) {
    console.error('Simulation reverted with error:', err.message);
  }
}

diagnose();
