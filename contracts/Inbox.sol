pragma solidity ^0.4.24;

contract Inbox {

    string message;

    constructor (string memory initialMessage) public {

        message = initialMessage;
    }

    function setMessage (string memory newMessage) public {

        message = newMessage;
    }

}