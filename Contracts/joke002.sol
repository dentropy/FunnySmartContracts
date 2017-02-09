pragma solidity ^0.4.3;
contract joke002 {
    string public joke = "What's green, has four legs and could kill you if it fell from a tree?";
    string public punchline = "You need to give me 10 of PCoin to find out whahaha";

    function () payable {
        if (msg.value >= 10) {
            punchline = "A pool table";
        }
    }
}
