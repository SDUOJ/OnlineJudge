---
home: true
heroImage: /img/logo.png
footer: GNU Affero General Public License v3.0 | © 2020-2023 SDUOJ Dev Team. All Rights Reserved
---

<header class="hero">
	<span>如果觉得对您有帮助或者对该产品感兴趣，请您给点一个 Star，谢谢！</span>
	<p class="action">
		<a href="https://github.com/SDUOJ/OnlineJudge" target="_blank" class="nav-link action-button" style="background-color: #1890db;     border-bottom: 1px solid #1890db;">
			点个 Star
			<span style="vertical-align: middle;">
				<svg t="1606100606718" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2797" width="20" height="20" >
					<path d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253" p-id="2798" fill="#ffddaa"></path>
					<path d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819" p-id="2799" fill="#ffddaa"></path>
				</svg>
			</span>
		</a>
		&emsp;
		<a href="/user-manual/client-manual-home.html" class="nav-link action-button">
			用户手册
			<span style="vertical-align: middle;">
				<svg t="1606101931273" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6281" width="20" height="20">
					<path d="M837.9904 570.0608H124.5696a29.0304 29.0304 0 0 1-29.0304-29.0304V482.9696a29.0304 29.0304 0 0 1 29.0304-29.0304h713.4208z" fill="#ffffff" p-id="6282"></path>
					<path d="M561.3056 808.96l-40.96-40.96a28.928 28.928 0 0 1 0-40.96l215.04-215.04-215.04-215.04a28.9792 28.9792 0 0 1 0-40.96l40.96-40.96a28.9792 28.9792 0 0 1 40.96 0l296.96 296.96-296.96 296.96a28.9792 28.9792 0 0 1-40.96 0z" fill="#ffffff" p-id="6283"></path>
				</svg>
			</span>
		</a>
	</p>
</header>

<div class="features">
	<div class="feature">
		<h2>多业务场景</h2> 
		<p>评测模板、一题多面、虚拟评测、国际赛制（ACM/OI/IOI），广泛适用于实验训练、学生测试、赛事举办等场景</p>
	</div>
	<div class="feature">
		<h2>分布式架构</h2> 
		<p>基于微服务设计，模块细分更适合业务迭代，分布式架构为高并发、高容错、高可用提供支持</p>
	</div>
	<div class="feature">
		<h2>容器级交付</h2> 
		<p>提供 Docker 镜像，公有云或物理机，均可一键部署，一键扩缩容，以应对不同的流量场景和评测压力</p>
	</div>
</div>


### 概览

* 基于 Docker，公有云或物理机，均可一键部署！
* 前后端分离，分布式微服务架构，可单独对某个服务动态扩缩容以应对不同场景的流量压力！
* 评测机的多核平台调度方案，单点评测、多点评测，按需配置！  <img src="/img/image-20201122203804615.png" style="zoom: 55%;vertical-align: middle;" />
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
| [SDUOJ/OnlineJudge](https://github.com/SDUOJ/OnlineJudge)    | 产品主仓库、Issue Tracker            |
| [SDUOJ/sduoj-server](https://github.com/SDUOJ/sduoj-server)  | 后端代码仓库                         |
| [SDUOJ/sduoj-web](https://github.com/SDUOJ/sduoj-web)        | 用户前端代码仓库                     |
| [SDUOJ/sduoj-manage](https://github.com/SDUOJ/sduoj-manage)  | 管理员前端代码仓库                   |
| [SDUOJ/sduoj-judger](https://github.com/SDUOJ/sduoj-judger)  | 评测机代码仓库                       |
| [SDUOJ/sduoj-sandbox](https://github.com/SDUOJ/sduoj-sandbox) | 安全沙箱代码仓库                     |
| [SDUOJ/sduoj-deploy](https://github.com/SDUOJ/sduoj-deploy)  | 部署代码仓库，含 Docker Compose 脚本 |

### 前端截图

<img src="/img/image-20201122210911513.png" style="zoom:80%;" />

<img src="/img/image-20201122211144679.png" style="zoom:80%;" />

<img src="/img/image-20201122211232174.png" style="zoom:80%;" />

<img src="/img/image-20201122212148575.png" style="zoom:80%;" />

<details>
<summary>更多截图，点击展开</summary>
<br>

<img src="/img/image-20201122210935648.png" style="zoom:80%;" />

<img src="/img/image-20201122211308172.png" style="zoom:80%;" />


<img src="/img/image-20201122212415897.png" style="zoom:80%;" />

<img src="/img/image-20201122212452051.png" style="zoom:80%;" />

<img src="/img/image-20201122212524787.png" style="zoom:80%;" />

<img src="/img/image-20201122212606712.png" style="zoom:80%;" />

<img src="/img/image-20201122212903607.png" style="zoom:80%;" />

<img src="/img/image-20201122212835905.png" style="zoom:80%;" />

</details>

### 搭建指南

架构图： 

<div style="text-align: center;"><img src="/img/image-20201122204545807.png" style="zoom: 60%;"></div>

[Click here to deploy a SDUOJ](/deployment-guide/)

### 技术博客

主要是：
* 产品理念
* 前端技术
* 后端技术
* 评测机技术
* 沙箱技术

[Click here to view tech blog](/technology-blog/)


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

