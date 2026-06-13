const { createPublicClient, http, formatEther } = require('viem');
const { celo } = require('viem/chains');
const fs = require('fs');

const publicClient = createPublicClient({
  chain: celo,
  transport: http('https://forno.celo.org')
});

async function checkBalances() {
  const master = '0x99D8fed31b609c1B24cb38094b45E97384Ed9D55';
  const masterBal = await publicClient.getBalance({ address: master });
  console.log(`Master Wallet Balance: ${formatEther(masterBal)} CELO`);

  const fleet = JSON.parse(fs.readFileSync('./bot/bot-fleet.json', 'utf8'));
  for (const bot of fleet) {
    const bal = await publicClient.getBalance({ address: bot.address });
    console.log(`${bot.name} Balance: ${formatEther(bal)} CELO`);
  }
}

checkBalances().catch(console.error);
