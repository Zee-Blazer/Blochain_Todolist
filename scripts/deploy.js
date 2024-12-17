const { ethers } = require("hardhat");

async function main() {
    console.log("Deploying contract...");

    const TaskTodo = await ethers.getContractFactory("TaskTodo");
    console.log("Waiting for contract to be deployed...");

    // Start deployment, returning a promise that resolve to a contract object
    const TaskTodo_ = await TaskTodo.deploy();
    console.log("Contract deployed!");

    console.log("Contract address:", TaskTodo_.address);

    if (TaskTodo_ && TaskTodo_.address) {
        console.log("Contract deployed!");
        console.log("Contract address:", TaskTodo_.address);
    }
    else if(!TaskTodo_.address) console.log("This is the main error the address is not fetching");
     else {
        console.log("Contract deployment failed or address is undefined.");
    }
}

main()
    .then( () => process.exit(0) )
    .catch( error => {
        console.error(error);
        process.exit(1);
    } )
