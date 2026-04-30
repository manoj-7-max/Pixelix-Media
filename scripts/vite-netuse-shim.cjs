const childProcess = require("node:child_process");

const originalExec = childProcess.exec;

childProcess.exec = function exec(command, ...args) {
  if (typeof command === "string" && command.trim().toLowerCase() === "net use") {
    const callback = typeof args[args.length - 1] === "function" ? args[args.length - 1] : undefined;
    const fakeProcess = {
      pid: 0,
      stdout: null,
      stderr: null,
      stdin: null,
      kill: () => false,
      on: () => fakeProcess,
      once: () => fakeProcess,
    };

    if (callback) {
      queueMicrotask(() => callback(null, "", ""));
    }

    return fakeProcess;
  }

  return originalExec.call(childProcess, command, ...args);
};
