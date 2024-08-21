const core = require("@actions/core");

try {
  const name = core.getInput("name");

  console.log("Hello, this is a local action.");
  console.log(`Input value: ${name}`);

  core.setOutput("output_message", `Hello, ${name}`);
} catch (error) {
  core.setFailed(error.message);
}
