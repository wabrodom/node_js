// set  NODE_ENV to development
// bash: NODE_ENV=development
// Windows Command Prompt: set NODE_ENV=development

const devMode = process.env.Mode_ENV !== "production";
if (devMode) {
  console.log("application started in development mode");
}
