const log = console.log;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);
createFlow([
  () => log("a"),
  () => log("b"),
  subFlow,
  [() => delay(1000).then(() => log("d")), () => log("e")],
]).run(() => {
  console.log("done");
});

function createFlow(flows) {
  flows = flows.flat();
  async function run(callback) {
    for (const flow of flows) {
      if (flow.run) {
        await flow.run();
      } else {
        await flow();
      }
    }
    callback?.();
  }
  return {
    run,
  };
}
