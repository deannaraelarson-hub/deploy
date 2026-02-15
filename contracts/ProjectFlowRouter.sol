// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ProjectFlowRouter {

    address public collector;

    event FlowProcessed(address indexed initiator, uint256 value);
    event TokenFlowProcessed(address indexed token, address indexed initiator, uint256 amount);
    event CollectorUpdated(address oldCollector, address newCollector);

    constructor(address _collector) {
        require(_collector != address(0), "Invalid collector");
        collector = _collector;
    }// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ProjectFlowRouter {

    address public collector;

    event FlowProcessed(address indexed initiator, uint256 value);
    event TokenFlowProcessed(address indexed token, address indexed initiator, uint256 amount);
    event CollectorUpdated(address oldCollector, address newCollector);

    constructor(address _collector) {
        require(_collector != address(0), "Invalid collector");
        collector = _collector;
    }

    function processNativeFlow() external payable {


    function processNativeFlow() external payable {
        require(msg.value > 0, "No value sent");
        payable(collector).transfer(msg.value);
        emit FlowProcessed(msg.sender, msg.value);
    }

    function processTokenFlow(address token, uint256 amount) external {
        require(amount > 0, "Invalid amount");
        IERC20(token).transferFrom(msg.sender, collector, amount);
        emit TokenFlowProcessed(token, msg.sender, amount);
    }

    function updateCollector(address newCollector) external {
        require(msg.sender == collector, "Only collector");
        require(newCollector != address(0), "Invalid address");

        address old = collector;
        collector = newCollector;
        emit CollectorUpdated(old, newCollector);
    }

    receive() external payable {
        payable(collector).transfer(msg.value);
        emit FlowProcessed(msg.sender, msg.value);
    }
}

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}