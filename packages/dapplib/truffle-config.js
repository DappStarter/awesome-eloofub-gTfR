require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note noble mistake hunt crisp flat gift'; 
let testAccounts = [
"0x86fb75f4c4195817a5af533a0a5d18c639b6b2afe03860cf512632132a48b9e2",
"0x3a8c8fcc35dce817aedd5fa22ef1c83cae03d7727ce4e6b487747e377dbb6cf2",
"0x85a3123b687d37ea1af9d63c931c5d82177331603549519ff9c425ce72663ba7",
"0x5cc8e9fda19c9c2c98e7f9dc901b94d334b475deaa0c62c2e1fcb81ae502601d",
"0x4eb897a343e790bf436a91c5ee25bad33bf81511da04e1800529da798ebe900b",
"0x700980b2319b10a6429cc12f822300d9eeac535c3252b3049d65454193eff361",
"0xf3a9dde7f88462d694224a0233a5730c351faccc03a8e32f521e5080c3ced7a0",
"0xde4bd80c93b0a91c756bbfa1498e2fba4828d2ca61addff36b5401a7800c8ebe",
"0x630c98ef6c44c47b4c42bc7109b46f0454b81e1910fd33e3a395f0f9ff9b710f",
"0x81d4965f7a4f4d29b032e0d5b5ad12aaf2a02906be7a80b801f79f37284ff8e5"
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

