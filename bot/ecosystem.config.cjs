module.exports = {
  apps: [
    {
      name: "vrental-bot",
      script: "index.js",
      cwd: __dirname,
      autorestart: true,
      max_restarts: 20,
      restart_delay: 3000,
    },
  ],
};
