import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { useState } from 'react';
import { gameCoreABI } from '@/lib/abis';
import { CONTRACT_ADDRESSES, QuestType } from '@/constants/contracts';

interface ClaimProgressParams {
  questType: QuestType;
  questId: number;
  quizScore: number;
  timeTaken: number;
  xp: number;
}

export function useQuestCompletion() {
  const { address } = useAccount();
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ hash });

  const claimProgress = async (params: ClaimProgressParams) => {
    if (!address) {
      setMessage('Please connect your wallet to claim progress');
      return;
    }

    try {
      setIsSubmitting(true);
      setMessage('Submitting quest progress...');
      
      // For now, we'll use dummy values for the signature-related params
      // In a production app, these would come from your backend
      const nonce = Date.now(); // Simple nonce based on timestamp
      const expiry = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now
      const signature = '0x'; // Empty signature for now
      
      await writeContract({
        address: CONTRACT_ADDRESSES.CELO.GAME_CORE,
        abi: gameCoreABI,
        functionName: 'claimProgress',
        args: [
          params.questType,
          BigInt(params.questId),
          BigInt(params.quizScore),
          BigInt(params.timeTaken),
          BigInt(params.xp),
          BigInt(nonce),
          BigInt(expiry),
          signature as `0x${string}`
        ],
      });
      
      setMessage('Quest progress submitted! Waiting for confirmation...');
    } catch (err: any) {
      console.error('Error claiming progress:', err);
      setMessage(err?.message || 'Failed to claim quest progress');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    claimProgress,
    isSubmitting: isSubmitting || isPending,
    isConfirming,
    isConfirmed,
    hash,
    error,
    message,
    setMessage,
  };
}

export function useQuestStats(questType: QuestType, questId: number) {
  const { address } = useAccount();
  
  // You can add more quest-related contract reads here
  // For example: useQuestProgress, useIsQuestCompleted, etc.
  
  return {
    address,
    questType,
    questId,
  };
}