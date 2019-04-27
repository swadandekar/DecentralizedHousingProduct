var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', async( accounts ) => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new("star", "starSymbol", "starUrl" ,{from: account_one});

            let firstTokenId = 1
            let secondTokenId = 2
            let thirdTokenId = 3
            
            let tx
            // TODO: mint multiple tokens
            tx = await this.contract.mint(account_one, firstTokenId, "url1", {from: account_one})
            await this.contract.mint(account_two, secondTokenId, "url1", {from: account_one})
            await this.contract.mint(account_three, thirdTokenId, "url1", {from: account_one})
        })

        it('should return total supply', async function () { 
           let tokenCount = await this.contract.totalSupply({from: account_one})

           assert.equal(tokenCount , 3);
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf(account_one)

            assert.equal(balance.toNumber(), 0)
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenId = 1
            let tokenUri = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/"
            await this.contract.setTokenURI(tokenId, tokenUri)

            let returnTokenUri = await this.contract.tokenURI(tokenId)

            assert.equal(returnTokenUri , "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1")
        })

        it('should transfer token from one owner to another', async function () { 
            let firstTokenId = 1
            tx = await this.contract.transferFrom(account_one, account_two, firstTokenId, {from: account_one})

            assert.equal(tx.logs[0].event, 'Transfer')
            assert.equal(tx.logs[0].args.tokenId, firstTokenId)
            assert.equal(tx.logs[0].args.to, account_two)
            assert.equal(tx.logs[0].args.from, account_one)
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new("star", "starSymbol", "starUrl" ,{from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            
            try{
                let tx = await this.contract.mint(account_one, 5, "starurl", {from: account_two})
            }
            catch (e) {}
            assert.equal(await this.contract.ownerOf(5), "0x0000000000000000000000000000000000000000")

        })

        it('should return contract owner', async function () { 
            let isContractOwner = await this.contract.isOwner({from: account_one})
            assert.equal(isContractOwner, true)
        })

    });
})