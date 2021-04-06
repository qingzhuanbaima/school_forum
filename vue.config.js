const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      // 需要重启 IDE
      .set('assets',resolve('./src/assets'))
	  .set('components',resolve('./src/components'))
	  .set('view',resolve('./src/view'))
	  
      // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  }
};


