pragma solidity ^0.4.3;
contract joke003 {
    string public joke = "why is bitcoin difficulty so high?";
    string public punchline = "To find out give me 100 PCoin";

    function () payable {
        if (msg.value >= 100) {
            punchline = "Too much hash";
        }

    }
}
