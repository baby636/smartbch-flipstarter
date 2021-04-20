# SmartBCH Blockchain Explorer
Goal of this project to create an open source, fully featured web based blockchain explorer tailored for the upcoming [SmartBCH sidechain](http://www.smartbch.org). SmartBCH will bring smart contracts to Bitcoin Cash.

This project will deliver an application that can be used by developers to browse and debug their Dapps on SBCH chains. The developer application will use a regular node as a backend.

The application can then be extended in a second phase to create a public facing blockchain explorer which will add additional functionality to serve all users of SmartBCH to explore its testnet(s) and mainnet, complete with a backend API. The public explorer application will be part of phase 2 and is not included in this flipstarter (See accountability below).

The software will be released under the Apache 2.0 license on github. This means anyone is free to distribute, modify, or otherwise use software for any purpose.

The front-end application will be built written in TypeScript on top the Angular framework, leveraging the [web3.js](https://web3js.readthedocs.io/en/v1.3.4/) library. Web3.js is a wrapper library for JavaScript/TypeScript that provides easy-to-use access to various functionalities of EVM based blockchains allowing rapid development.