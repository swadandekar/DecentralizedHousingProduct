pragma solidity  ^0.5.2;
// >=0.4.21 <0.6.0;

import './ERC721Mintable.sol';

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>



// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class


contract SolnSquareVerifier is ERC721MintableComplete {
    Verifier objVerifier;


    constructor(address verifierAddress) ERC721MintableComplete() public 
    {
        objVerifier = Verifier(verifierAddress);
    }

    // TODO define a solutions struct that can hold an index & an address    
    struct solution {
        uint256 index;
        address owner;
    }

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => solution) private solutionMap;

    // TODO define an array of the above struct

    // TODO Create an event to emit when a solution is added
    event SolutionAdded ( address solutionAddress, uint256 index );
    
    // TODO Create a function to add the solutions to the array and emit the event
    function createSolution (uint256 index, address to, 
                            uint[2] memory a,
                            uint[2] memory a_p,
                            uint[2][2] memory b,
                            uint[2] memory b_p,
                            uint[2] memory c,
                            uint[2] memory c_p,
                            uint[2] memory h,
                            uint[2] memory k,
                            uint[2] memory input
                            ) public returns (bool) {

        bytes32  key =  keccak256(abi.encodePacked(a,a_p, b, b_p,c,c_p,h,k));
        require(solutionMap[key].owner == address(0), "Solution already exists");
        solutionMap[key] = solution({
                                        index: index,
                                        owner: to
                                    });
        emit SolutionAdded(to, index);
        return true;
    }


    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintSolution (address to, uint256 tokenId, 
                            uint[2] memory a,
                            uint[2] memory a_p,
                            uint[2][2] memory b,
                            uint[2] memory b_p,
                            uint[2] memory c,
                            uint[2] memory c_p,
                            uint[2] memory h,
                            uint[2] memory k,
                            uint[2] memory input) public returns (bool) {
        
       // bytes32  _key =  keccak256(abi.encodePacked(a,a_p, b, b_p,c,c_p,h,k));
        //require(solutionMap[key] == address(0), "Solution already exists");

        bool flagVerifier = objVerifier.verifyTx(a,a_p, b, b_p,c,c_p,h,k,input); 

        require(flagVerifier == true, "proof is incorrect");

        createSolution( tokenId, to, a,a_p, b, b_p,c,c_p,h,k,input);

        super.mint(to, tokenId);
    }

}
 
contract Verifier {

    function verifyTx(
            uint[2] memory a,
            uint[2] memory a_p,
            uint[2][2] memory b,
            uint[2] memory b_p,
            uint[2] memory c,
            uint[2] memory c_p,
            uint[2] memory h,
            uint[2] memory k,
            uint[2] memory input
        ) public returns (bool r);
}









  


























