pragma solidity ^0.4.3;
contract NotAPonziScheme {
    bool public ironic = true;
    bool public ponzi = false;
    address public my_address = 0x32a71b9f3ee6aef6354f57eea43d3e86c84f9192;
    address public last_transaction;
    function () payable {
        uint current_balance = this.balance - msg.value;
        if(msg.value >= current_balance * 2){
            my_address.send(current_balance/2);
            last_transaction.send(current_balance*3/2);
            last_transaction = msg.sender;
        }
        else {
            msg.sender.send(msg.value);
        }
    }
}
