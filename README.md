# 简介

使用 midway + koa + ORM + Restful 接口基础功能，应用服务基础功能，做到业务开发开箱即用。

实现功能：

- 系统功能
  - [x] 请求日志中间件
  - [x] 统一响应中间件
  - [x] 响应格式统一中间件
  - [x] 定时任务
  - [x] 请求参数验证
  - [x] swagger 接入
  - [x] JWT 验证
  - [x] 添加通用工具类（日后拆除）
  - [x] 增加 redis 相关配置
  - [x] 封装 redis 工具类
- typeORM
  - [x] 表结构生成
  - [x] CRUD
  - [x] 关联查询
  - [ ] 原始查询
  - [x] query 日志
  - [x] 事务
- 部署
  - [x] DockerFile 编写
  - [x] docker-compose 编写
  - [x] 生产环境部署优化
- 单元测试
  - [x] controller
  - [x] service
  - [x] task

## 使用

执行 ./sql/test.sql 初始化数据库

将 .env.local 文件重命名 .env 并且将配置修改正确

```bash
npm i

npm run dev
```

swagger 文档地址：http://127.0.0.1:7001/swagger-ui/index.html
