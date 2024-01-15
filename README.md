# Setting up testing in our app

1. install the reacy testing library
   yarn add --dev @testing-library/react
2. install jest and along with other dependeies as we are using babel in our project
3. yarn add --dev babel-jest @babel/core @babel/preset-env
4. config the babel
   create a babel.config.js file and add this content
   ` module.exports = {
     presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
 };`
5. create and config the .parcelrc file to disable the babel transilation

`{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
`
