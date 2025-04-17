module.exports = {
  apps: [
    {
      name: "checkout-app",
      script: "yarn",
      args: "start",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
        PORT: 60007,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 60007,
      },
      env_development: {
        NODE_ENV: "production",
        PORT: 60007,
      },
    },
  ],
};
