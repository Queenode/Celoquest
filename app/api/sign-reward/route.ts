import { NextResponse } from 'next/server';
import { createWalletClient, http, hashTypedData } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { celo } from 'viem/chains';

// EIP-712 Domain and Types based on GameCore.sol
const domain = {
  name: 'QuestEthGame',
  version: '1',
  chainId: 42220, // Celo Mainnet
  verifyingContract: '0x4119c4b90bbd7b9f598c53a44294fa05fe9f26fd', // GameCore address
} as const;

const types = {
  Progress: [
    { name: 'user', type: 'address' },
    { name: 'questType', type: 'uint8' },
    { name: 'questId', type: 'uint256' },
    { name: 'quizScore', type: 'uint256' },
    { name: 'timeTaken', type: 'uint256' },
    { name: 'xp', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'expiry', type: 'uint256' },
  ],
} as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { user, questType, questId, quizScore, timeTaken, xp } = body;

    const privateKey = process.env.PRIVATE_KEY;
    if (!privateKey) {
      return NextResponse.json({ error: 'Reward signer not configured' }, { status: 500 });
    }

    const account = privateKeyToAccount(privateKey.startsWith('0x') ? (privateKey as `0x${string}`) : `0x${privateKey}`);
    
    // Generate unique nonce and expiry
    const nonce = BigInt(Math.floor(Date.now() * Math.random()));
    const expiry = BigInt(Math.floor(Date.now() / 1000) + 3600); // 1 hour

    const message = {
      user: user as `0x${string}`,
      questType: Number(questType),
      questId: BigInt(questId),
      quizScore: BigInt(quizScore),
      timeTaken: BigInt(timeTaken),
      xp: BigInt(xp),
      nonce,
      expiry,
    };

    const client = createWalletClient({
      account,
      chain: celo,
      transport: http(),
    });

    const signature = await client.signTypedData({
      domain,
      types,
      primaryType: 'Progress',
      message,
    });

    return NextResponse.json({
      signature,
      nonce: nonce.toString(),
      expiry: expiry.toString(),
    });
  } catch (error: any) {
    console.error('Signing error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
