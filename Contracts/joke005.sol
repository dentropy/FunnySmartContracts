pragma solidity ^0.4.3;
contract joke005 {
    string public joke = "Bankers never die...";
    string public punchline = "To find out send this contract 10 PCoin";

    function () payable {
        if (msg.value >= 10) {
            punchline = "They Lose Interest";
        }
    }
}
