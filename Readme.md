# TodoMVC App

## 下载模板

```bash
$ git clone https://github.com/tastejs/todomvc-app-template.git todomvc
$ cd todomvc
$ npm install
```

### 引入 browser-sync 作为 http 服务工具

安装 browser-sync

```bash
$ npm install --save-dev browser-sync
```

配置 package.json 中的 scirpts 字段

```json
"scripts": {
  "dev": "browser-sync start --server --files \"index.html, js/*.js\""
}
```

启动开发服务

```bash
$ npm run dev
```

## 计算属性、过滤器、方法总结

- methods 方法
  + 使用场景：需要有事件处理函数
  + 也可以在 Mustache 插值表达式位置使用
  + 虽然支持，但是更建议当在 Mustache 中使用方法的时候都定位为计算属性
- filters 过滤器
  + 使用场景：处理文本格式化，例如日期格式化
  + 使用注意：内部无法访问 this 实例，也就无法处理 data 中的数据
- computed 计算属性
  + 使用场景：获取业务数据，自带缓存
  + 特性：本质是方法，但是必须当做属性来使用
  + 不是方法，使用的时候无法传参

计算属性对比方法而言，如果多次使用，则计算属性效率要高于方法。
