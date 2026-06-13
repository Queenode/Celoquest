const { createPublicClient, http, parseAbi } = require('viem');
const { celo } = require('viem/chains');

const GAME_CORE_ADDRESS = '0x4119c4b90bbd7b9f598c53a44294fa05fe9f26fd';

const publicClient = createPublicClient({
  chain: celo,
  transport: http('https://forno.celo.org')
});

const abi = parseAbi([
  'function chapterNft() view returns (address)',
  'function xpToken() view returns (address)',
  'function hasRole(bytes32 role, address account) view returns (bool)',
  'function MINTER_ROLE() view returns (bytes32)'
]);

async function checkRoles() {
  const chapterNftAddr = await publicClient.readContract({
    address: GAME_CORE_ADDRESS,
    abi,
    functionName: 'chapterNft'
  });
  
  const xpTokenAddr = await publicClient.readContract({
    address: GAME_CORE_ADDRESS,
    abi,
    functionName: 'xpToken'
  });

  const MINTER_ROLE = await publicClient.readContract({
    address: chapterNftAddr,
    abi,
    functionName: 'MINTER_ROLE'
  });

  const hasNftMinterRole = await publicClient.readContract({
    address: chapterNftAddr,
    abi,
    functionName: 'hasRole',
    args: [MINTER_ROLE, GAME_CORE_ADDRESS]
  });
  
  const hasXpMinterRole = await publicClient.readContract({
    address: xpTokenAddr,
    abi,
    functionName: 'hasRole',
    args: [MINTER_ROLE, GAME_CORE_ADDRESS]
  });

  console.log('GameCore has NFT Minter Role:', hasNftMinterRole);
  console.log('GameCore has XP Minter Role:', hasXpMinterRole);
}

checkRoles().catch(console.error);
