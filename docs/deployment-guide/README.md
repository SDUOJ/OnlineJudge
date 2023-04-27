# 快速开始

## 前言

本章节中只描述如何做到最快速地搭建一个 SDUOJ，不建议长期用作生产

::: danger 注意
SDUOJ 尚未发布第一个稳定版本，对于生产用途 SDUOJ 开发者建议大家持观望态度。
:::

## 先决条件

* 操作系统：Linux 发行版（Windows 和 macOS 都不保证可成功）
* 必备软件：
    * [git](https://git-scm.com/)
    * [docker](https://docs.docker.com/get-docker/) ：版本大于等于 `23.0.2`
    *  [docker-compose-plugin](https://docs.docker.com/compose/install/linux/)：版本大于等于 `2.17.2`


* 在 Ubuntu 22.04 上安装以上必备软件的指令（如果您的环境已装有，请跳过）：

```shell
# 以下这行是设置下载 Docker 的镜像，如不需要可以跳过
export DOWNLOAD_URL="https://mirrors.cernet.edu.cn/docker-ce"
sudo apt-get update \
 && sudo apt-get install -qq -y curl git \
 && curl -fsSL https://get.docker.com/ | sudo -E sh
```

## 伪分布式部署<Badge text="beta" type="warning"/>

如果你只是打算尝试**简单地**部署一个 SDUOJ，对其进行探索和尝鲜的话，执行以下指令即可。

* 拉取 `sduoj-deploy` 项目代码

```shell
git clone https://github.com/SDUOJ/sduoj-deploy.git
```

* 进入 `sduoj-deploy` 项目目录

```shell
cd sduoj-deploy
```

* 执行 `docker compose` (注意不是 `docker-compose`) 启动编排好的各个服务

```shell
sudo docker compose  up
```

* 在 URL 中访问你的服务器 IP 即可，一些初始账号如下，安全起见请注意修改：
    * SDUOJ 的初始账号密码分别为 `superadmin`、`123456`，注意修改。
    * Nacos 的初始账号密码分别为 `sduoj`、`sduoj`，注意修改。
    * MySQL 的初始账号密码分别为 `sduoj`、`sduoj`，注意修改。

尝鲜机器建议：

* 在公有云上使用按量计费开启一个 ECS，要求 16G 或以上大小的内存
* 虚拟机上安装一个 Linux 发行版（建议 Ubuntu 22.04）

::: warning 注意
数据库、消息队列、Nacos 服务的端口是暴露的，如果是在公有云上进行临时生产，建议配置**网络安全组**，仅暴露需要的 22、80 等端口。在自己的物理服务器上同理。
:::