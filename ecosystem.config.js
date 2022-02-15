module.exports = {
  apps: [
    {
      name: 'inventor',
      script: 'node_modules/nuxt/bin/nuxt.js',
      instances: 1,
      autorestart: true,
      watch: false,
      error_file: 'err.log',
      out_file: 'out.log',
      log_file: 'combined.log',
      time: true,
      env: {
      },
    }
  ]
}