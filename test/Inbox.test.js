const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile')

let accounts, inbox;
const INITIAL_STRING = 'Hi there';
beforeEach(async() => {

    // get a list of all ten test accounts
    accounts = await web3.eth.getAccounts();

    // use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({ data: bytecode, arguments: [INITIAL_STRING] }).send({ from: accounts[0], gas: '1000000' })
    inbox.setProvider(provider);
});

describe('inbox', () => {

    it('deploys a contract', ()=> {

        // check to see if the contract has been deployed
        // by checking to see if the contract has an address
        // on the blockchain
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {

        // checking to see if there is a default message assigned to the 
        // contract
        const message = await inbox.methods.getMessage().call();
        assert.equal(message, INITIAL_STRING);
    });
});