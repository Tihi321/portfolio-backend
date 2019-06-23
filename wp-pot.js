const wpPot = require('wp-pot');

wpPot({
  destFile: 'languages/portfolio_php.pot',
  domain: 'portfolio-backend',
  package: 'PortfolioBackend',
  src: ['src/**/*.php', 'views/**/*.php'],
});
