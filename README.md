<img align="right" src="website/static/img/sduoj-logo.svg" width=200 />

*如果觉得对您有帮助或者对该产品感兴趣，请您给点一个 Star，谢谢！*

# SDUOJ/[Online Judge](https://sduoj.online)

[![Java](https://img.shields.io/badge/Java-8-informational)](http://openjdk.java.net/)
[![WebSite](https://img.shields.io/website?up_message=sduoj.online&url=https%3A%2F%2Fsduoj.online%2F)](https://sduoj.online/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.1.12-success)](https://spring.io/projects/spring-boot)
[![Spring Cloud](https://img.shields.io/badge/Spring%20Cloud-Greenwich.SR5-success)](https://spring.io/projects/spring-cloud)
[![Spring Cloud Alibaba](https://img.shields.io/badge/Spring%20Cloud%20Alibaba-2.1.2-success)](https://spring.io/projects/spring-cloud-alibaba)
[![MySQL](https://img.shields.io/badge/MySQL-8-blue)](https://www.mysql.com/)
[![Vue](https://img.shields.io/badge/Vue-2.6.11-success)](https://vuejs.org/)
[![License](https://img.shields.io/github/license/SDUOJ/OnlineJudge)](https://github.com/SDUOJ/OnlineJudge/blob/main/LICENSE)
[![Github Star](https://img.shields.io/github/stars/SDUOJ/OnlineJudge?style=social)](https://github.com/SDUOJ/OnlineJudge)

> SDUOJ 是一款开源在线评测系统（Online Judge, OJ）
> 
> [→ 查看文档](https://sduoj.online)
> 

<br />

<table>
    <tr>
        <td>
            <h3>多业务场景</h3> 
            <p>评测模板、一题多面、虚拟评测、国际赛制（ACM/OI/IOI），广泛适用于实验训练、学生测试、赛事举办等场景</p>
        </td>
        <td>
            <h3>分布式架构</h3> 
            <p>基于微服务设计，模块细分更适合业务迭代，分布式架构为高并发、高容错、高可用提供支持</p>
        </td>
        <td>
            <h3>容器级交付</h3> 
            <p>提供 Docker 镜像，公有云或物理机，均可一键部署，一键扩缩容，以应对不同的流量场景和评测压力</p>
        </td>
    </tr>
</table>


### 概览

* 基于 Docker，公有云或物理机，均可一键部署！
* 前后端分离，分布式微服务架构，可单独对某个服务动态扩缩容以应对不同场景的流量压力！
* 评测机的多核平台调度方案，单点评测、多点评测，按需配置！  <img src="website/static/img/home/image-20201122203804615.png" width=330 align="center"/>
* 多种国际赛制支持（ACM/OI/IOI）！
* 评测模板，可自定义添加多语言支持！更有进阶模式支持数据结构课设、汇编语言实验、操作系统课设等个性化评测场景！
* 一题多面，同一道题目，可有多个题面！可支持中文、英文、俄文等多语言！可支持复杂、精炼、变形题面等多形式！
* Markdown & HTML 题面支持，随意创作丰富多彩的题面！
* 动态评测，提交后每个评测点实时返回评测结果！
* 多评测点，单独赋分，动态调整测试点的顺序，直接选取测试点作为题面样例点！
* ~~虚拟评测，支持世界上多个知名 OJ 系统的远程提交，让训练数据沉淀到一方系统，为未来传承宝贵的数据资产！~~

### 项目仓库

| 仓库                                                         | 描述                                 |
| ------------------------------------------------------------ | ------------------------------------ |
| [SDUOJ/OnlineJudge](https://github.com/SDUOJ/OnlineJudge)    | 产品主仓库、文档、Issue Tracker       |
| [SDUOJ/sduoj-server](https://github.com/SDUOJ/sduoj-server)  | 后端代码仓库                         |
| [SDUOJ/sduoj-web](https://github.com/SDUOJ/sduoj-web)        | 用户前端代码仓库                     |
| [SDUOJ/sduoj-manage](https://github.com/SDUOJ/sduoj-manage)  | 管理员前端代码仓库                   |
| [SDUOJ/sduoj-judger](https://github.com/SDUOJ/sduoj-judger)  | 评测机代码仓库                       |
| [SDUOJ/sduoj-sandbox](https://github.com/SDUOJ/sduoj-sandbox) | 安全沙箱代码仓库                     |
| [SDUOJ/sduoj-deploy](https://github.com/SDUOJ/sduoj-deploy)  | 部署代码仓库，含 Docker Compose 脚本 |

### 网站截图

[用户使用手册](https://sduoj.online/docs/manual/user/home)

<img src="website/static/img/home/image-20201122210911513.png" style="zoom:80%;" />

<img src="website/static/img/home/image-20201122211144679.png" style="zoom:80%;" />

<img src="website/static/img/home/image-20201122211232174.png" style="zoom:80%;" />

<img src="website/static/img/home/image-20201122212148575.png" style="zoom:80%;" />

<details>
<summary>更多截图，点击展开</summary>
<br>

<img src="website/static/img/home/image-20201122210935648.png" style="zoom:80%;" />

<img src="website/static/img/home/image-20201122211308172.png" style="zoom:80%;" />


<img src="website/static/img/home/image-20201122212415897.png" style="zoom:80%;" />

<img src="website/static/img/home/image-20201122212452051.png" style="zoom:80%;" />

<img src="website/static/img/home/image-20201122212524787.png" style="zoom:80%;" />

<img src="website/static/img/home/image-20201122212606712.png" style="zoom:80%;" />

<img src="website/static/img/home/image-20201122212903607.png" style="zoom:80%;" />

<img src="website/static/img/home/image-20201122212835905.png" style="zoom:80%;" />

</details>

### 搭建指南

架构图：<img src="website/static/img/home/image-20201122204545807.png" width=650 align="center"/>

[如何基于 Docker Compose 快速部署？](https://sduoj.online/docs/deployment/docker-compose)

### 浏览器支持

For Vue frontend:
-  Modern browsers (chrome, firefox) 和 Internet Explorer 10+.

For React frontend:
-  Microsoft Edge (85+), Google Chrome (85+), Mozilla Firefox (79+), Apple Safari (13.4+), Internet Explorer is not supported

### 技术团队
<table>
    <tr>
        <td align="center">
            <img src="https://github.com/zhangt2333.png?s=64" width="65px;"/>
            <br />
            <a href="https://github.com/zhangt2333" target="_blank">zhangt2333</a>
            <br />
            <strong> Leader, Backend </strong>
        </td>
        <td align="center">
            <img src="https://github.com/yhf2000.png?s=64" width="65px;"/>
            <br />
            <a href="https://github.com/yhf2000" target="_blank">yhf2000</a>
            <br />
            <strong> Leader, Frontend </strong>
        </td>
        <td align="center">
            <img src="https://github.com/jesHrz.png?s=64" width="65px;"/>
            <br />
            <a href="https://github.com/jesHrz" target="_blank">jesHrz</a>
            <br />
            <strong> Leader, Sandbox </strong>
        </td>
    </tr>
    <tr>
        <td align="center">
            <img src="https://github.com/koi2000.png?s=64" width="65px;"/>
            <br />
            <a href="https://github.com/koi2000" target="_blank">koi2000</a>
            <br />
            <strong> Backend </strong>
        </td>
        <td align="center">
            <img src="https://github.com/HYLazy.png?s=64" width="65px;"/>
            <br />
            <a href="https://github.com/HYLazy" target="_blank">HYLazy</a>
            <br />
            <strong> Backend </strong>
        </td>
        <td align="center">
            <img src="https://github.com/zhaoyifan0528.png?s=64" width="65px;"/>
            <br />
            <a href="https://github.com/zhaoyifan0528" target="_blank">zhaoyifan0528</a>
            <br />
            <strong> Backend </strong>
        </td>
    </tr>
    <tr>
        <td align="center">
            <img src="https://github.com/OldAtaraxia.png?s=64" width="65px;"/>
            <br />
            <a href="https://github.com/OldAtaraxia" target="_blank">OldAtaraxia</a>
            <br />
            <strong> Backend </strong>
        </td>
        <td align="center">
            <img src="https://github.com/zhr2001.png?s=64" width="65px;"/>
            <br />
            <a href="https://github.com/zhr2001" target="_blank">zhr2001</a>
            <br />
            <strong> Frontend </strong>
        </td>
        <td align="center">
            <img src="https://github.com/sys16384.png?s=64" width="65px;"/>
            <br />
            <a href="https://github.com/sys16384" target="_blank">sys16384</a>
            <br />
            <strong> Plagiarism Detection </strong>
        </td>
    </tr>
    <tr>
        <td align="center">
            <img src="https://github.com/GeneLiuXe.png?s=64" width="65px;"/>
            <br />
            <a href="https://github.com/GeneLiuXe" target="_blank">GeneLiuXe</a>
            <br />
            <strong> Honorary Mem. </strong>
        </td>
        <td align="center">
            <img src="https://github.com/suxb201.png?s=64" width="65px;"/>
            <br />
            <a href="https://github.com/suxb201" target="_blank">suxb201</a>
            <br />
            <strong> Honorary Mem. </strong>
        </td>
        <td align="center">
            <img src="https://github.com/Xrvitd.png?s=64" width="65px;"/>
            <br />
            <a href="https://github.com/Xrvitd" target="_blank">Xrvitd</a>
            <br />
            <strong> Honorary Mem. </strong>
        </td>
    </tr>
</table>



### 许可

基于 [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) 开源协议。

