// .vuepress/theme/index.js

module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
    ['container', {
      type: 'half',
      defaultTitle: '',
    }],
    ['container', {
      type: 'third',
      defaultTitle: '',
    }],
    ['container', {
      type: 'center',
      defaultTitle: '',
    }],
    ['container', {
      type: 'teaser',
      before: name => `<div class="teaser custom-block"><h2 class="custom-block-title">${name}</h2>`,
      after: '</div>',
    }],
  ],
};