# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)


To run this project :

1. npm install
2. truffle init
3. truffle compile
4. truffle test  test/TestERC721Mintable.js
5.docker run -v /C:/Swati/BlockChain/Capstone/to/zokrates/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash

$ docker run -v /C:/Swati/BlockChain/Capstone/to/zokrates/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/
bash
Unable to find image 'zokrates/zokrates:latest' locally
latest: Pulling from zokrates/zokrates
898c46f3b1a1: Pull complete
63366dfa0a50: Pull complete
041d4cd74a92: Pull complete
6e1bee0f8701: Pull complete
5c89999ec446: Pull complete
f1b96665537a: Pull complete
30971d17d48e: Pull complete
a1f71c4d8639: Pull complete
519d04eb1817: Pull complete
b5630ec50949: Pull complete
fdaf93e4c749: Pull complete
Digest: sha256:c44f714f47b304d869f646ef1580a53a3673142ea10ef7cabb8b3ba62a50d505
Status: Downloaded newer image for zokrates/zokrates:latest
C:\Program Files\Docker Toolbox\docker.exe: Error response from daemon: invalid mode: /home/zokrates/code.
See 'C:\Program Files\Docker Toolbox\docker.exe run --help'.


6.$ cd C:/Swati/BlockChain/Capstone/zokrates/code/square


Hi @SwatiD ! Please try this:

First, make sure that the project directory (Blockchain-Capstone-master) is saved somewhere under C:\\Users\. In my case it is saved under C:\\Users\<myusername>\Documents

Secondly, modify the square.code file and input the variable names required (i.e. those enclosed in <>). The code is computing and returning a square so you may want to use root, square, and result as names.

Startup Docker Quickstart and wait for the $ prompt

Now we mount the volume inside the container with docker run -v //c/Users/<myusername>/Documents/Blockchain-Capstone-master/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash. Wait for the download and setup to finish.

docker run -v //C/Users/Aditya/Documents/Capstone/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash

C:\Users\Aditya\Documents\Capstone\zokrates


C:\Users\Aditya\Git\bin\bash.exe --login -i "C:\Program Files (x86)\Docker Toolbox\start.sh"
docker run -v //c/Users/Aditya/Documents/Capstone/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash



You should now be inside the container. Type ls to confirm that you can see the square folder. From there, you can do these:

Inside the vm, cd code/square
Typed ls to make sure that nothing is there except square.code
~/zokrates compile -i square.code
~/zokrates setup --proving-scheme pghr13
~/zokrates compute-witness -a 3 9
~/zokrates generate-proof --proving-scheme pghr13
~/zokrates export-verifier --proving-scheme pghr13
exited the vm
removed the preceeding zeros in the input array of proof.json
truffle compile
Notice that c is lower case @SwatiD

 
Also, when posting code here, please do this:

Type three backticks (beside the number 1 in a US keyboard. looks like this: `)
Then press Shift + Enter.
Paste the code.
Press Shift + Enter.
Then three tick marks again
Then press Enter
 

https://rinkeby.opensea.io/get-listed/step-two


https://rinkeby.etherscan.io/address/0xfc46844902945a637b08d90d3e9e88f7cc7071b0

 truffle migrate --network rinkeby --reset