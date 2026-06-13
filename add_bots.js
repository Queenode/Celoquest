const fs = require('fs');
const { generatePrivateKey, privateKeyToAccount } = require('viem/accounts');

const fleetFile = './bot/bot-fleet.json';
let fleet = [];

if (fs.existsSync(fleetFile)) {
  fleet = JSON.parse(fs.readFileSync(fleetFile, 'utf8'));
}

const currentCount = fleet.length;
const targetCount = 20;

for (let i = currentCount + 1; i <= targetCount; i++) {
  const pk = generatePrivateKey();
  const account = privateKeyToAccount(pk);
  fleet.push({
    name: `Bot_${i}`,
    address: account.address,
    privateKey: pk
  });
  console.log(`Generated Bot_${i}: ${account.address}`);
}

fs.writeFileSync(fleetFile, JSON.stringify(fleet, null, 2));
console.log(`\nFleet expanded to ${fleet.length} bots!`);
