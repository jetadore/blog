<!-- title: -->
<!-- created: 2021-04-15 23:00:00 -->
<!-- updated:  -->
<!-- categories:   -->
<!-- tags: -->

# Prometheus

Prometheus是一套开源的系统监控和报警框架，灵感源自Google的Borgmon监控系统。
2012年，SoundCloud的Google前员工创造了Prometheus，并作为社区开源项目进行开发。
2015年，该项目正式发布。
2016年，Prometheus加入云原生计算基金会（Cloud Native Computing Foundation），成为受欢迎度仅次于Kubernetes的项目。

Prometheus具有以下特性：

- 多维的数据模型（基于时间序列的Key、Value键值对）
- 灵活的查询和聚合语言PromQL
- 提供本地存储和分布式存储
- 通过基于HTTP的Pull模型采集时间序列数据
- 可利用PushGateway（Prometheus的可选中间件）实现Push模式
- 可通过动态服务发现或静态配置发现目标机器
- 支持多种图表和数据大盘

<!-- more -->