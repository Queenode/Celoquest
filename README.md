# CeloQuest - Blockchain Quest Platform

CeloQuest is a decentralized application (dApp) built on the Celo blockchain that enables users to participate in quests, complete tasks, and earn rewards. The platform combines the power of Next.js, Wagmi, Viem, and smart contracts to create an engaging Web3 experience.

## 🌟 Features

- **Web3 Integration**: Seamless wallet connection with Wagmi and Viem
- **Smart Contract Interaction**: Interact with Celo smart contracts securely
- **Responsive UI**: Built with modern React and Tailwind CSS
- **Type Safety**: Full TypeScript support for better developer experience
- **DeFi Ready**: Integration with Celo and other EVM-compatible chains

## 🛠 Tech Stack

- **Frontend**: Next.js 14 with React 19
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for server state management
- **Blockchain**:
  - Wagmi v3 for wallet connections
  - Viem for Celo interaction
  - Smart contracts written in Solidity
- **Animation**: Framer Motion for smooth animations
- **Icons**: Lucide React for beautiful icons

## 📦 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git
- MetaMask or any Web3 wallet
- Basic understanding of Celo and smart contracts

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/celo-quest.git
   cd celo-quest
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add:
   ```
   NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_api_key
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_walletconnect_project_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 📱 Application Screens - Detailed Overview

### 1. Welcome Screen (`/`)
**What You'll See First**
When you first open the application, you'll be greeted by an immersive welcome screen designed to feel like a modern, prosperous world. The background features a textured surface with subtle animations that make it feel alive. Small, twinkling lights float gently across the screen, creating a magical atmosphere.

**Key Features**:
- **Interactive Background**: The texture moves slightly as you navigate, with soft glow effects that add depth
- **Main Menu**: Large, easy-to-read buttons guide you to different parts of the app
- **Sound Controls**: Easily adjust or mute background music and sound effects
- **Settings Access**: Quick access to customize your experience
- **Responsive Design**: Works perfectly on both mobile devices and computers
- **Visual Effects**: Buttons and important elements have a gentle glow, making them easy to find

### 2. Quest Selection (`/quests`)
**Your Adventure Hub**
This is where all available quests are displayed in an organized, card-based layout. Each card gives you a quick overview of what the quest involves.

**What You Can Do Here**:
- **Browse Quests**: Scroll through available adventures, each with its own unique theme and challenges
- **Filter Options**: Sort quests by difficulty, reward type, or time required
- **Search Function**: Quickly find specific quests using keywords
- **Progress Tracking**: See at a glance which quests you've started, completed, or have yet to begin
- **Visual Indicators**: Color-coded difficulty levels help you choose quests that match your experience
- **Reward Previews**: Each quest shows potential rewards before you begin

### 3. Quest Details (`/quest/[id]`)
**Everything You Need to Know**
When you select a quest, this screen provides all the information you need to get started and succeed.

**Detailed Information Includes**:
- **Full Description**: A complete overview of the quest's story and objectives
- **Step-by-Step Goals**: Clear breakdown of what you need to accomplish
- **Time Commitment**: Estimated time to complete the quest
- **Reward Breakdown**: Detailed list of what you'll earn upon completion
- **Prerequisites**: Any requirements needed before starting
- **Action Buttons**: Prominent buttons to begin or continue your adventure

### 4. Interactive Quiz (`/quiz`)
**Test Your Knowledge**
This is where you'll answer questions to complete your quests and earn rewards.

**Interactive Elements**:
- **Question Format**: Easy-to-read multiple choice questions
- **Timed Challenges**: Some quizzes have countdown timers for an extra challenge
- **Progress Bar**: Always know how far you've come and what's left
- **Helpful Hints**: Stuck on a question? Get helpful hints to guide you
- **Instant Feedback**: See immediately if your answer was correct
- **Score Counter**: Track your performance as you go

### 5. Celebration Screen (`/victory`)
**Your Moment of Triumph**
After successfully completing a quest, this screen celebrates your achievement.

**Celebration Features**:
- **Animated Rewards**: Watch as your earned rewards appear in an exciting sequence
- **Achievement Unlocked**: Special notifications for major milestones
- **Sharing Options**: Proud of your accomplishment? Share it with friends
- **Next Steps**: Helpful suggestions for what to do next
- **Progress Update**: See how this completion affects your overall journey

### 6. Community Rankings (`/leaderboard`)
**See How You Compare**
This screen shows where you stand among other adventurers.

**Ranking Information**:
- **Top Performers**: View the most successful players
- **Your Position**: Find your name in the rankings
- **Time Filters**: Compare performance over different time periods
- **Achievement Badges**: Special icons that highlight your accomplishments
- **Personal Stats**: Track your own progress and improvements

### 7. Digital Marketplace (`/marketplace`)
**Trade and Collect**
A virtual shop where you can manage your collection of digital items.

**Marketplace Features**:
- **Item Showcase**: Browse through available collectibles and upgrades
- **Categories**: Easily find specific types of items
- **Buy/Sell System**: Simple interface for transactions
- **Secure Wallet**: Safe and easy way to manage your digital assets
- **Ownership History**: Keep track of your collection

### 8. Story and Guides (`/scroll`)
**Learn and Explore**
An interactive way to learn more about the game's world and mechanics.

**Content Includes**:
- **Interactive Stories**: Engaging content that reveals the game's lore
- **Helpful Tutorials**: Step-by-step guides for beginners
- **Animated Pages**: Beautifully designed content that responds to your touch
- **Progress Tracking**: Keep track of what you've learned
- **Easy Navigation**: Simple controls to move between sections

## 🔄 User Flow

### Getting Started Journey
1. **First-Time Users**
   - Arrive at the Welcome Screen
   - Choose to either explore as a guest or create an account
   - Complete a brief tutorial highlighting key features
   - Receive a welcome reward to get started

2. **Returning Users**
   - Log in to access their profile
   - See their current quest progress
   - Check notifications for new content or rewards
   - Continue from where they left off

### Core Gameplay Loop
1. **Select a Quest**
   - Browse available quests in the Quest Selection screen
   - Filter by difficulty, reward type, or time commitment
   - View detailed information before starting

2. **Complete Challenges**
   - Answer quiz questions to progress
   - Use hints if needed (limited per quest)
   - Track progress with the on-screen counter

3. **Earn Rewards**
   - View animated celebration for completing quests
   - Receive in-app currency and items
   - Unlock achievements and badges
   - See progress toward larger goals

4. **Engage with Community**
   - Check position on the leaderboard
   - Compare stats with friends
   - Share achievements on social media

### Advanced Features
1. **Marketplace Interaction**
   - Browse available items and collectibles
   - Purchase upgrades or cosmetic items
   - Sell unwanted items to other players
   - Manage inventory and wallet

2. **Progression System**
   - Level up by earning experience points
   - Unlock special abilities or perks
   - Access exclusive content at higher levels
   - Track overall statistics and milestones

### Support and Learning
1. **Access Help**
   - Visit the Story and Guides section
   - Read tutorials and game lore
   - Contact support if needed
   - Access FAQs and community forums

## 🏗 Project Structure

```
celo-quest/
├── app/                # Next.js app directory
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── public/             # Static assets
├── smartcontract/      # Smart contract source code
│   ├── src/            # Solidity contracts
│   └── foundry.toml    # Foundry configuration
├── styles/             # Global styles
└── types/              # TypeScript type definitions
```

## 🔧 Smart Contracts

The project includes Solidity smart contracts for managing quests and rewards. To work with the contracts:

1. Navigate to the `smartcontract` directory
2. Install Foundry (if not already installed):
   ```bash
   curl -L https://foundry.paradigm.xyz | bash
   foundryup
   ```
3. Install dependencies:
   ```bash
   forge install
   ```
4. Compile contracts:
   ```bash
   forge build
   ```

## 🌐 Deployment

### Frontend
Deploy the Next.js application to Vercel or your preferred hosting provider:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fcelo-quest&project-name=celo-quest&repository-name=celo-quest)

### Smart Contracts
#### Celo Mainnet (Chain ID: 42220)

Deployed contract addresses:

| Contract | Address |
| --- | --- |
| XPToken | `0xd9fc6cc979472a5fa52750ae26805462e1638872` |
| ChapterNFT | `0x274f499201b0716e6cb632ff5bec10cad508ead6` |
| Leaderboard | `0x3a89a1611b309cd883a22c99463936fc4a0dee03` |
| GameCore | `0xaa1deb4cc3c3386d813e7f7b2ff52a7c4efb675e` |

Explorer links:

- **XPToken**: https://celoscan.io/address/0xd9fc6cc979472a5fa52750ae26805462e1638872
- **ChapterNFT**: https://celoscan.io/address/0x274f499201b0716e6cb632ff5bec10cad508ead6
- **Leaderboard**: https://celoscan.io/address/0x3a89a1611b309cd883a22c99463936fc4a0dee03
- **GameCore**: https://celoscan.io/address/0xaa1deb4cc3c3386d813e7f7b2ff52a7c4efb675e

RPC:

- `https://forno.celo.org`

#### Deploy (your own)
Deploy your smart contracts using Foundry:

```bash
forge create --rpc-url <your_rpc_url> \
  --private-key <your_private_key> \
  src/YourContract.sol:YourContract
```





