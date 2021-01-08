const fs = require('fs')

fs.writeFile('./index.vue', '<template><div>这是测试写入sdfsdfsdfsdfsdf</div></template>', 'utf8', (err) => {
  console.log(err);
})