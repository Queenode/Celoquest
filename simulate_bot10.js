const { createPublicClient, http, parseAbi } = require('viem');
const { celo } = require('viem/chains');

const GAME_CORE_ADDRESS = '0x4119c4b90bbd7b9f598c53a44294fa05fe9f26fd';

const publicClient = createPublicClient({
  chain: celo,
  transport: http('https://forno.celo.org')
});

const abi = parseAbi([
  'function claimProgress(uint8 questType, uint256 questId, uint256 quizScore, uint256 timeTaken, uint256 xp, uint256 nonce, uint256 expiry, bytes signature) external'
]);

async function simulate() {
  try {
    await publicClient.simulateContract({
      address: GAME_CORE_ADDRESS,
      abi,
      functionName: 'claimProgress',
      account: '0x841234e019229A09615b17B9754B9d70E11E09c5', // Bot_10
      args: [
        1, 
        8n, 
        100n, 
        176n, 
        100n, 
        915306966n, 
        1779708781n, 
        '0x72e01a721189a6725126947bdf920807b8ea9ff6f01c9eaa73ab1c68e082dd680b49eb68287dd488cbe76e60b985c3b2e8a9261ef716f09c850ac5033fd26dbf1c'
      ]
    });
    console.log('Simulation succeeded!');
  } catch (err) {
    console.error('Simulation reverted with error:', err.message);
  }
}

simulate();
