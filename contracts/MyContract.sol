// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.6 <0.9;

contract MyContract { uint data;
function getData() external view returns (uint) { return data;
}
function setData(uint _data) external { data = _data;
}
function setDataPrivate(uint _data) private { data = _data + 10;
}
}