const Command = require("../src/index");

describe("base test", () => {
  test("validate this.log is called", async () => {
    const logSpy = jest.spyOn(Command.prototype, "log");
    await Command.run([]);
    expect(logSpy).toBeCalled();
    logSpy.mockRestore();
  });

  test("validate this.log is called", async () => {
    const logSpy = jest.spyOn(Command.prototype, "log");
    await Command.run([]);
    expect(logSpy).toBeCalled();
    logSpy.mockRestore();
  });
});
