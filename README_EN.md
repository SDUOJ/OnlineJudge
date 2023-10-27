<p align="center">
    <a href="./README.md">[中文]</a>
    [English]
</p>
<br>

<img align="right" src="website/static/img/sduoj-logo.svg" width=200 />

*If you find this helpful or interesting, please give it a star. Thank you!*

# SDUOJ/[Online Judge](https://sduoj.online)

[![Java](https://img.shields.io/badge/Java-8-informational)](http://openjdk.java.net/)
[![WebSite](https://img.shields.io/website?up_message=sduoj.online&url=https%3A%2F%2Fsduoj.online%2F)](https://sduoj.online/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.1.12-success)](https://spring.io/projects/spring-boot)
[![Spring Cloud](https://img.shields.io/badge/Spring%20Cloud-Greenwich.SR5-success)](https://spring.io/projects/spring-cloud)
[![Spring Cloud Alibaba](https://img.shields.io/badge/Spring%20Cloud%20Alibaba-2.1.2-success)](https://spring.io/projects/spring-cloud-alibaba)
[![MySQL](https://img.shields.io/badge/MySQL-8-blue)](https://www.mysql.com/)
[![Vue](https://img.shields.io/badge/Vue-2.6.11-success)](https://vuejs.org/)
[![License](https://img.shields.io/github/license/SDUOJ/OnlineJudge)](https://github.com/SDUOJ/OnlineJudge/blob/main/LICENSE)
[![Github Star](https://img.shields.io/github/stars/SDUOJ?style=social)](https://github.com/SDUOJ/OnlineJudge)

> SDUOJ is an open-source online judge (OJ)
> 
> [→ View Documentation](https://sduoj.online)
> 

<br />

<table>
    <tr>
        <td>
            <h3>Multiple Business Scenarios</h3> 
            <p>Judging-template, multi-description problem, virtual judge, international competition formats (ICPC/OI/IOI), suitable for algorithm training, student exams, competition hosting, and other scenarios</p>
        </td>
        <td>
            <h3>Distributed Architecture</h3> 
            <p>Based on microservices design, detailed modules are more suitable for business iterations. Distributed architecture supports high concurrency, high fault tolerance, and high availability.</p>
        </td>
        <td>
            <h3>Container-level Delivery</h3> 
            <p>Offers Docker images for one-click deployment on cloud or physical machines. Easily scale up or down to accommodate different traffic scenarios and evaluation pressures.</p>
        </td>
    </tr>
</table>


## Overview

* Based on Docker, deployable with one click on clouds or physical machines!
* Frontend and backend separation with distributed microservices architecture. Dynamically scale individual services to handle different traffic pressures!
* Judging system with multi-core scheduling. Single-point or multi-point judging are configurable! <img src="website/static/img/home/image-20201122203804615.png" width=330 align="center"/>
* Supports various international competition formats (ICPC/OI/IOI)!
* Judge templates allow for custom multi-language support! Advanced modes support personalized judging scenarios such as data-structure coursework, assembly language experiments, and operating system projects!
* Multi-description problems, where a single problem can have multiple description! Supports languages like Chinese, English, Russian, and formats like complex, concise, or altered presentations!
* Markdown & HTML description support, create colorful and diverse problems!
* Dynamic judging, real-time results after submission for each checkpoint!
* Multiple checkpoints, separate scoring, dynamic order adjustment of checkpoints, and direct selection of checkpoints as problem examples!
* ~~Virtual judge, supporting remote submissions to several well-known OJ systems, accumulating valuable data assets for the future!~~


## Repositories

| Repositories                                                         | Description                                 |
| ------------------------------------------------------------ | ------------------------------------ |
| [SDUOJ/OnlineJudge](https://github.com/SDUOJ/OnlineJudge)    | Main repository, documentation, Issue Tracker       |
| [SDUOJ/sduoj-server](https://github.com/SDUOJ/sduoj-server)  | Backend code                         |
| [SDUOJ/sduoj-web](https://github.com/SDUOJ/sduoj-web)        | User frontend code                     |
| [SDUOJ/sduoj-manage](https://github.com/SDUOJ/sduoj-manage)  | Manager frontend code                   |
| [SDUOJ/sduoj-judger](https://github.com/SDUOJ/sduoj-judger)  | Judger code                       |
| [SDUOJ/sduoj-sandbox](https://github.com/SDUOJ/sduoj-sandbox) | Sandbox code                     |
| [SDUOJ/sduoj-deploy](https://github.com/SDUOJ/sduoj-deploy)  | Deploying Code, with Docker Compose Scripts |

### Website Screenshots

[See User Manual](https://sduoj.online/docs/manual/user/home)

<img src="website/static/img/home/image-20201122210911513.png" style="zoom:80%;" />

<img src="website/static/img/home/image-20201122211144679.png" style="zoom:80%;" />

<img src="website/static/img/home/image-20201122211232174.png" style="zoom:80%;" />

<img src="website/static/img/home/image-20201122212148575.png" style="zoom:80%;" />

<details>
<summary>Click here for More Screenshots</summary>
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

## Deployment

Architecture diagram：<img src="website/static/img/home/image-20201122204545807.png" width=650 align="center"/>

[How to deploy quickly based on Docker Compose?](https://sduoj.online/docs/deployment/docker-compose)

## Browser Support

For Vue frontend:
-  Modern browsers (chrome, firefox) 和 Internet Explorer 10+.

For React frontend:
-  Microsoft Edge (85+), Google Chrome (85+), Mozilla Firefox (79+), Apple Safari (13.4+), Internet Explorer is not supported

## Our Team
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



## License

Released under the [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.en.html).

