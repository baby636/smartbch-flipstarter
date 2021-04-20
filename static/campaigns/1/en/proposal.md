## The Application
The application provides a visual interface to the state of the SmartBCH blockchain and display it in a meaningful way. It’s a frontend web application that needs to connect to a node as its backend (or to a backend API in phase2).

The application will be able to run in two modes, decentralized mode and bonding mode.

- **[Phase 1]** *Decentralized*.
This will allow a user to directly connect to a SmartBCH node. Docker build scripts will be included to allow quick deployment and out-of-the-box usage. Both http and websockets connections to the SmartBCH EVM will be supported. The application will also be deployed staticly and publicly hosted. You will simply need a node to connect to. The decentralized mode will deliver the core feature set as outlined below in the feature overview.

- **[Phase 2 - Not part of this round]** *Bonding mode*
The application connects to a backend which will act as an intermediary between the current blockchain state. Using an API like this allows horizontal scaling, which will be needed for a public facing explorer. The core part of the application will however be agnostic of the backend it communicates with and completely follow the JSON-RPC specification. Note that the external API will not be part of phase 1. The bonding mode will expand on the core feature set and will have additional features to provide a richer user experience. Additional features will include contract validation, chain statistics, pricing, token information, archival data and many other kinds of meta data that will have to be stored centrally.


## Feature overview (20 BCH)
The core feature set will at least include:

- General navigation with multifunctional search (Address / Transaction / Block / ERC20 Token / ERC721 Token) to provide an easy and intuitive way to find relevant information on the blockchain and allow quick navigation.
- Overview with latest blocks
    - Show last mined blocks.
    - Live updates.
- Latest transaction overview
    - Show latest transactions in block
    - Show distinguished transaction type (contract creation, contract call, token transfers, regular transactions etc)
    - Live updates
- Address watch list overview
    - Show latest transactions of user tagged addresses
    - Live updates
- Block detail view
    - All relevant details of a specific mined block
    - Transactions within a block (transfers and contract internal transactions)
- Address detail view
    - History of transactions
    - Token information
    - Token transactions
- Transaction detail view
    - All relevant details of the transaction including fees/gas.
    - Transaction actions
    - Input data
    - Internal transactions
    - Transaction receipts / logs
- Contract detail view
    - Contract transactions overiew
    - Internal transactions overview
    - Token overview / Tokens transferred
    - Contract Info (ABI, creation code)
- Management / Configuration
    - Node connector
    - Smart contract registration allowing the user to upload the contracts' ABI spec in order to decode transaction inputs and output logs.
    - Token contract / logo registration (locally stored)
    - Address watch list management (locally stored)
    - MetaMask integration

## Visual design (10 BCH)
I will hire a professional graphic designer to help design the visual aspect of the application. The goal is to create a fresh, modern and efficient visual design that will transfer over to the second phase of this project. Note that the design of the proof of concept application (see below) is temporary and will get a complete overhaul.

## Accountability
I am a professional software developer with over 10 years experience mainly in frontend web development. I have worked on many projects in e-commerce and am experienced in building high traffic web applications that provide a high quality user experience.

I have created a proof of concept application that is available today. This demo already contains a lot of the project fundamentals. So far I have invested around 75 hours.

For better accountability I also decided to divide the work into 2 phases. This phase (phase 1) will aim to complete an explorer with the core feature set that can connect to a node without needing a specialized backend API.

In the second phase I will expand this project to create a full featured, public facing block explorer with expanded functionalities, including specific API that allow horizontal scaling and hosting of the explorer.

## Proof of concept
I have published a proof of concept application which already contains basic functionality:
- Application fundamentals
- Block overview
- Account overview with transaction overview and simple ERC20 token support
- Transaction type interpretation (transfer, contract-create, contract-call, token-transfer)
- Transaction details

The proof of concept application can be found here:
**https://smartbch-explorer.web.app/**

## Budgeting
For phase 1 I want to realize core feature set. With the ambitous roadmap of the SmartBCH project this tool will be invaluable for any user of the SmartBCH chain and I therefore want to deliver it to them fast.

I am requesting a total of 30 BCH for phase 1. I intend to spend around 300-400 hours in total. This will deliver the decentralized application and will be expanded upon in phase 2.

I have reserved 20 BCH for the core application in phase 1. (around 200-300 hours budgetted to complete the feature list in phase 1)
I have reserved 10 BCH for the visual design. (around 100 hours to create a UI design that can also carry over to phase 2)

## Phase 2
As soon as phase 1 has been completed I will start a new funding round for phase 2. Phase 2 will deliver the public facing explorer complete with a scalable Backend API and an expanded feature set.
