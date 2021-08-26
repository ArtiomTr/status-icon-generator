const ghpages = require('gh-pages');

ghpages.publish('build', {
    branch: 'gh-pages',
    message: `Deploying project ${new Date()}`,
    dotfiles: true,
});
