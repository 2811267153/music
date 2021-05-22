# music_beta

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).o

### 主要技术栈 vue-cli + vue-router + axios + vuex + es6 + element-ui

### 使用 vue2 vue-cli3 创建的一个手机版webApp 目前的功能如下：
```
1. 手机登录  可使用 短信 和 账号密码 进行 登录

2. 获取 推荐歌曲  由于这个功能 需要登录  默认 我传的自己的账号

3. 获取 推荐MV

4. 搜索 歌曲  进行 播放 以及 热门搜索 支持 点击之后 直接跳转播放

5. 获取 推荐歌单 以及 歌单分类

6. 歌曲播放 

歌曲播放 目前仅支持 上一首 下一首 和 一起听 功能
```
### 遇到问题
```
1. 无法动态的根据播放进度绘制储播放进度条， 
    解决方法： 使用，定时器采用定时触发的方式， 让他每一秒写入一次时间数据
2. 无法解析从后台获取的lry格式的歌词文件。
    解决方法： 在朋友的帮助下 通过正则的方式， 对后台 获取的歌词文件进行匹配和解析， 最后 渲染到DOM中
```