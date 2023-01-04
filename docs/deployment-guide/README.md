# 快速开始

## 前言

本章节中只描述如何做到最快速地搭建一个 SDUOJ，不建议长期用作生产

::: danger 注意
SDUOJ 尚未发布第一个稳定版本，对于生产用途 SDUOJ 开发者建议大家持观望态度。
并且 SDUOJ 将在 2021 年上半年拓展新的功能，随着 Nacos 配置变更和数据库表扩展，若 sduoj-deploy 项目未及时跟进，以下部署教程不保证实时可用。
:::

## 先决条件

* 操作系统：Linux 发行版。Windows 和 MacOS 都不保证可成功
* 预装软件：`git`、 `docker` 和 `docker-compose` 

::: warning 注意
请保证 Docker 版本大于等于 19.03.7，Docker-Compose 版本大于等于 1.17.1。

docker 安装教程：[https://docs.docker.com/install](https://docs.docker.com/install)

docker-compose 安装教程：[https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)
:::

* 这里给出一个在 debian 10 上安装 `git`、 `docker` 和 `docker-compose` 的一条指令（如果您的环境已装有，请跳过）：

```shell
apt update && apt-get -y install apt-transport-https ca-certificates curl software-properties-common git python3-pip && curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/debian/gpg | apt-key add - && add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/debian $(lsb_release -cs) stable" && apt-get -y update && apt-get -y install docker-ce && pip3 install docker-compose
```

## 伪分布式部署<Badge text="beta" type="warning"/>

如果你只是打算尝试**简单地**部署一个 SDUOJ，对其进行探索和尝鲜的话，执行以下指令即可。

* 拉取 `sduoj-deploy` 项目代码

```shell
git clone https://github.com/SDUOJ/sduoj-deploy.git
```

* 执行 `docker-compose` 启动预编排好的各个服务

```shell
docker-compose -f sduoj-deploy/example/pseudo-distributed-ip.yaml up
```

* 在 URL 中访问你的服务器 IP 即可，一些初始账号如下，安全起见请注意修改：
    * SDUOJ 的初始账号密码分别为 `superadmin`、`123456`，注意修改。
    * Nacos 的初始账号密码分别为 `sduoj`、`sduoj`，注意修改。
    * MySQL 的初始账号密码分别为 `sduoj`、`sduoj`，注意修改。

尝鲜机器建议：

* 在公有云上使用按量计费开启一个 ECS，要求 8G 或以上大小的内存
* 虚拟机上安装一个 Linux 发行版（建议 Debian 10 或 Ubuntu 18.04）

::: warning 注意
数据库、消息队列、Nacos 服务的端口是暴露的，如果是在公有云上进行临时生产，建议配置**网络安全组**，仅暴露需要的 22、80 等端口。在自己的物理服务器上同理。
:::