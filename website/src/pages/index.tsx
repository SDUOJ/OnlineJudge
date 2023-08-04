import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import Intro from "./intro.mdx";

import styles from "./index.module.css";

const Header = (): React.ReactElement => {
  return (
    <header className={styles.header}>
      <img className={styles.hero} src={useBaseUrl("img/sduoj-logo.svg")} />
      <p className={styles.description}>开源在线评测系统</p>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=sduoj&repo=OnlineJudge&type=star&count=true&size=large"
        style={{ border: "none" }}
        width="130px"
        height="30px"
      />
      <div style={{ marginTop: "10px", marginBottom: "30px" }}>
        <span>
          如果觉得对您有帮助或者对该产品感兴趣
          <br />
          能否 Star 支持一下，谢谢！
        </span>
      </div>
      <div className={styles.links}>
        <a href="/docs/manual/user/home" className="button button--primary">
          用户手册
        </a>
        <a
          href="/docs/deployment/docker-compose"
          className="button button--info"
        >
          快速部署
        </a>
      </div>
    </header>
  );
};

const Features = (): React.ReactElement => {
  return (
    <div className="row">
      <div className="col">
        <h2>多业务场景</h2>
        <p>
          评测模板、一题多面、虚拟评测、国际赛制（ACM/OI/IOI），广泛适用于实验训练、学生测试、赛事举办等场景
        </p>
      </div>
      <div className="col">
        <h2>分布式架构</h2>
        <p>
          基于微服务设计，模块细分更适合业务迭代，分布式架构为高并发、高容错、高可用提供支持
        </p>
      </div>
      <div className="col">
        <h2>容器级交付</h2>
        <p>
          提供 Docker
          镜像，公有云或物理机，均可一键部署，一键扩缩容，以应对不同的流量场景和评测压力
        </p>
      </div>
    </div>
  );
};

const Home = (): React.ReactElement => {
  return (
    <Layout>
      <div className="container">
        <Header />
        <hr />
        <Features />
        <Intro />
      </div>
    </Layout>
  );
};

export default Home;
