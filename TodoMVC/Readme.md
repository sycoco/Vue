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

