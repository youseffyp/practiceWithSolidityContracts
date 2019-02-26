pragma solidity ^0.4.25;

contract Inbox {

    string message;

    constructor (string memory initialMessage) public {

        message = initialMessage;
    }

    function setMessage (string memory newMessage) public {

        message = newMessage;
    }
    
    function getMessage () public view returns (string) {
        return message;
    }
}