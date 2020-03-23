module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    '@storybook/addon-actions/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
  ]
};
