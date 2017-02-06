pragma solidity ^0.4.3;
contract joke001 {
    string public joke = "What is the definition of a con man?";
    string public punchline = "I NEED MONEY TO TELL YOU";
    function () payable {
        if (msg.value >= 1) {
            punchline = "I NEED MORE MONEY";
        }
        if (msg.value >= 10) {
            punchline = "I NEED EVEN MORE MONEY";
        }
        if (msg.value >= 1000) {
            punchline = "JOKES ON YOU";
        }
    }
}
