# Token ERC20 Cephee

## Requis

- [NodeJS](https://nodejs.org/)
- [MetaMask](https://metamask.io/) (Optionnel)

## Installation

Installez le projet :
```bash
git clone https://github.com/FlorianBardin/erc20-token-cph.git
cd erc20-token-cph
npm install
```
Ajoutez un fichier .env avec ces infos :
```
PRIVATE_KEY=adresse_privée_wallet_sans_0x
SEPOLIA_RPC_URL=clé_api_alchemy_network_sepolia
```
Déployez le contrat :
```bash
npx hardhat ignition deploy ignition/modules/Cephee.js --network sepolia
```

## Consulter le jeton

### Sur Etherscan
- Se rendre sur [Etherscan](https://sepolia.etherscan.io/) (Pour Sepolia)
- Rentrez l'adresse retournée lors du déploiement

### Sur Metamask
- Dans **Jetons** séléctionnez **+ Importer Jeton**
- Sélectionner le réseau **Sepolia** et renseigner l'**adresse de déploiement du contrat**