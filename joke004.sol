pragma solidity ^0.4.3;
contract joke004 {
    string public joke = "My girlfriend says she needs time and distance";
    string public punchline = "To find out why give me 100 PCoin";

    function () payable {
        if (msg.value >= 100) {
            punchline = "Is she calculating velocity";
        }

    }
}
