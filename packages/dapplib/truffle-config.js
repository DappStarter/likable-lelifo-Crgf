require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note ranch pulse harvest cricket slot ghost'; 
let testAccounts = [
"0xd568cf1b7576e53bdfde5265c5b0f068f1554529d9408161de5fb4cab1fc20fd",
"0x5cc7a98a91ffb7a1539b87e30089547bcf6f80170a0d48bfca6a5c32cc4999cb",
"0x15cb83682ab21b4d6e241278e62ccc8d7576d46b503315aff5cfee3a2a327217",
"0xf56ff39abc455c4dd9e7a6c68184f78ac06038ceef7214071fbd901a91a791f6",
"0x8fff6aef0ecce9329bc21a297d7b11c4e867a2bdfb88d754ad5e64d84701a65e",
"0x0ce8d1a2b166e55c131efec37c30e020c827ed5a8619cabb1822244704be7de3",
"0x58e82a55bb3002b805d75d7554beac9dbde524bbefafba30ec9cd7fc0770cc38",
"0x4a38178ed6656d6abee4e40c2e183fd5a6c09edb5f3b94666616dc51451a9a8d",
"0x5370b023101417ef32571745443bd9d775b0420459ea18f832a3ceb682464675",
"0x49aac06fbce9835751f03ed35273150eb17ec7e4a45fc9ff5f79c700a2ea3765"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

