// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

contract ProjectFlowRouter {

    address public collector;

    event FlowProcessed(address indexed initiator, uint256 value);
    event TokenFlowProcessed(address indexed token, address indexed initiator, uint256 amount);
    event CollectorUpdated(address oldCollector, address newCollector);

    constructor(address _collector) {
        require(_collector != address(0), "Invalid collector");
        collector = _collector;
    }

    // Receive native ETH/BNB/MATIC
    function processNativeFlow() external payable {
        require(msg.value > 0, "No value sent");

        payable(collector).transfer(msg.value);
        emit FlowProcessed(msg.sender, msg.value);
    }

    // Transfer ERC20 tokens
    function processTokenFlow(address token, uint256 amount) external {
        require(amount > 0, "Invalid amount");
        require(token != address(0), "Invalid token");

        bool success = IERC20(token).transferFrom(msg.sender, collector, amount);
        require(success, "Token transfer failed");

        emit TokenFlowProcessed(token, msg.sender, amount);
    }

    // Update collector wallet
    function updateCollector(address newCollector) external {
        require(msg.sender == collector, "Only collector");
        require(newCollector != address(0), "Invalid address");

        address old = collector;
        collector = newCollector;

        emit CollectorUpdated(old, newCollector);
    }

    // Fallback receive ETH/BNB/MATIC
    receive() external payable {
        require(msg.value > 0, "No value");

        payable(collector).transfer(msg.value);
        emit FlowProcessed(msg.sender, msg.value);
    }
}
