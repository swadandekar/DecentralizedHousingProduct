var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var VerifierContract = artifacts.require('verifier');


contract('TestSolnSquareVerifier', async( accounts ) => {

const account_one = accounts[0];
const account_two = accounts[1];
const account_three = accounts[2];

let proof= require('../../zokrates/code/square/proof.json');

// Test if a new solution can be added for contract - SolnSquareVerifier
describe('Test mint', function () {
    beforeEach(async function () { 
        let verifierContract = await VerifierContract.new({from: account_one});
        this.contract = await SolnSquareVerifier.new(verifierContract.address, {from: account_one});

    })

    it('new solution can be added for contract', async function () { 
    let tx = await this.contract.createSolution(1,account_one,
                    proof.proof.A,
                    proof.proof.A_p,
                    proof.proof.B,
                    proof.proof.B_p,
                    proof.proof.C,
                    proof.proof.C_p,
                    proof.proof.H,
                    proof.proof.K,
                    proof.input,
                    {from: account_one})

    //console.log(tx);
                    
    assert.equal(tx.logs[0].event, 'SolutionAdded')
    //assert.equal(tx, true)
    })


    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('ERC721 token can be minted for contract', async function () { 
        let tx = await this.contract.mintSolution(account_one,1,
                        proof.proof.A,
                        proof.proof.A_p,
                        proof.proof.B,
                        proof.proof.B_p,
                        proof.proof.C,
                        proof.proof.C_p,
                        proof.proof.H,
                        proof.proof.K,
                        proof.input,
                        {from: account_one})
    
        //console.log(tx);
        // console.log(tx.logs[0].event);
        // console.log(tx.logs[1].event);
        //console.log(tx.logs[2].event);
                        
        //assert.equal(tx.logs[0].event, 'Verified')
        assert.equal(tx.logs[0].event, 'SolutionAdded')
        assert.equal(tx.logs[1].event, 'Transfer')
        //assert.equal(tx, true)
        })


    });
})
