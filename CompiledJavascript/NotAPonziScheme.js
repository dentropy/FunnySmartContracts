var notaponzischemeContract = web3.eth.contract([{
    "constant": true,
    "inputs": [],
    "name": "ironic",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "last_transaction",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "my_address",
    "outputs": [{
        "name": "",
        "type": "address"
    }],
    "payable": false,
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "ponzi",
    "outputs": [{
        "name": "",
        "type": "bool"
    }],
    "payable": false,
    "type": "function"
}, {
    "payable": true,
    "type": "fallback"
}]);
var notaponzischeme = notaponzischemeContract.new({
    from: web3.eth.accounts[0],
    data: '0x60606040526001600060006101000a81548160ff021916908302179055506000600060016101000a81548160ff021916908302179055507332a71b9f3ee6aef6354f57eea43d3e86c84f9192600060026101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550610309806100836000396000f36060604052361561005e576000357c010000000000000000000000000000000000000000000000000000000090048063732f4a0c146101c75780639164db11146101f1578063b71d2cec1461022f578063ccb048411461026d5761005e565b6101c55b6000343073ffffffffffffffffffffffffffffffffffffffff1631039050600281023410151561018757600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600283811561000257049081150290604051809050600060405180830381858888f1935050505050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc600260038402811561000257049081150290604051809050600060405180830381858888f193505050505033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506101c1565b3373ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051809050600060405180830381858888f19350505050505b5b50565b005b34610002576101d96004805050610297565b60405180821515815260200191505060405180910390f35b346100025761020360048050506102aa565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b346100025761024160048050506102d0565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b346100025761027f60048050506102f6565b60405180821515815260200191505060405180910390f35b600060009054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900460ff168156',
    gas: '4700000'
}, function(e, contract) {
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
        console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
})
