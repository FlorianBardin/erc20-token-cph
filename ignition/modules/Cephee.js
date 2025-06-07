const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");

module.exports = buildModule("CepheeModule", (m) => {
    const defaultSupply = ethers.parseEther('1000').toString();
    const initialSupply = m.getParameter("initialSupply", defaultSupply);

    const token = m.contract("Cephee", [initialSupply]);

    return { token };
});
