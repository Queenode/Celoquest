const { createWalletClient, http, parseAbi, createPublicClient } = require('viem');
const { privateKeyToAccount } = require('viem/accounts');
const { celo } = require('viem/chains');
const fs = require('fs');

const GAME_CORE_ADDRESS = '0x4119c4b90bbd7b9f598c53a44294fa05fe9f26fd';

const publicClient = createPublicClient({
  chain: celo,
  transport: http('https://forno.celo.org')
});

const abi = parseAbi([
  'function claimProgress(uint8 questType, uint256 questId, uint256 quizScore, uint256 timeTaken, uint256 xp, uint256 nonce, uint256 expiry, bytes signature) external'
]);

async function testTx() {
  const fleet = JSON.parse(fs.readFileSync('./bot/bot-fleet.json', 'utf8'));
  const botData = fleet[3]; // Bot_4
  const account = privateKeyToAccount(botData.privateKey);
  
  const botWallet = createWalletClient({
    account,
    chain: celo,
    transport: http('https://forno.celo.org')
  });

  try {
    const hash = await botWallet.writeContract({
      address: GAME_CORE_ADDRESS,
      abi,
      functionName: 'claimProgress',
      args: [
        1, 
        3n, 
        100n, 
        263n, 
        100n, 
        162079072n, 
        1779647093n, 
        '0xe73207887348017b8462794f736f3df69ffe373255c95b3e942e5ecbe1e6fedb0db633a5b604f63d249e61f99753bab5e8825ca9eaefb4bbcb708beed3df79ab1b'
      ],
      gas: 500000n // Hardcode gas limit to bypass estimation revert
    });
    console.log('Transaction Hash:', hash);
  } catch (err) {
    console.error('Failed:', err.message);
  }
}

testTx();
