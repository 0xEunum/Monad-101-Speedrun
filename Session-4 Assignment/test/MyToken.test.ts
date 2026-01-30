import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyToken", function () {
  let token: any;
  let admin: any;
  let minter: any;
  let user: any;
  const MINT_AMOUNT = ethers.parseEther("1000");

  beforeEach(async function () {
    [admin, minter, user] = await ethers.getSigners();
    const MyTokenFactory = await ethers.getContractFactory("MyToken");
    token = await MyTokenFactory.deploy(admin.address, minter.address);
    await token.waitForDeployment();
  });

  it("should deploy correctly", async function () {
    expect(await token.name()).to.equal("MyToken");
    expect(await token.symbol()).to.equal("MTK");
    expect(await token.totalSupply()).to.equal(0);
  });

  it("should assign correct roles", async function () {
    const MINTER_ROLE = ethers.id("MINTER_ROLE");
    expect(await token.hasRole(await token.DEFAULT_ADMIN_ROLE(), admin.address))
      .to.be.true;
    expect(await token.hasRole(MINTER_ROLE, minter.address)).to.be.true;
  });

  it("minter should mint tokens", async function () {
    await token.connect(minter).mint(user.address, MINT_AMOUNT);
    expect(await token.balanceOf(user.address)).to.equal(MINT_AMOUNT);
    expect(await token.totalSupply()).to.equal(MINT_AMOUNT);
  });

  it("non-minter should fail to mint", async function () {
    await expect(token.connect(admin).mint(user.address, MINT_AMOUNT)).to.be
      .reverted;
  });

  it("admin can grant role and mint", async function () {
    const MINTER_ROLE = ethers.id("MINTER_ROLE");
    await token.connect(admin).grantRole(MINTER_ROLE, admin.address);
    await token.connect(admin).mint(user.address, MINT_AMOUNT);
    expect(await token.balanceOf(user.address)).to.equal(MINT_AMOUNT);
  });
});
