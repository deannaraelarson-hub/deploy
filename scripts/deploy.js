async function main() {
  const collector = "0xd5fedc733eec764d7c3f7137ab76936d8ca3491f";

  const Router = await ethers.getContractFactory("ProjectFlowRouter");
  const router = await Router.deploy(collector);
  await router.waitForDeployment();

  const address = await router.getAddress();
  console.log("ProjectFlowRouter deployed:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});