import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import Translate, { translate } from '@docusaurus/Translate'

import styles from "./index.module.css";

const Header = (): React.ReactElement => {
  return (
    <header className={styles.header}>
      <img className={styles.hero} src={useBaseUrl("img/sduoj-logo.svg")} />
      <p className={styles.description}>
        <Translate id="home.oss-oj">
          开源在线评测系统
        </Translate>
      </p>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=sduoj&repo=OnlineJudge&type=star&count=true&size=large"
        style={{ border: "none" }}
        width="130px"
        height="30px"
      />
      <div style={{ marginTop: "10px", marginBottom: "30px" }}>
        <span>
          <Translate id="home.please-star.1">
            如果觉得对您有帮助或者对该产品感兴趣
          </Translate>
          <br />
          <Translate id="home.please-star.2">
            能否 Star 支持一下，谢谢！
          </Translate>
        </span>
      </div>
      <div className={styles.links}>
        <a href={translate({id: "home.intro-link", message: "https://github.com/SDUOJ/OnlineJudge/blob/main/README.md"})}
           className="button button--danger">
          <Translate id="home.intro">
            详细介绍
          </Translate>
        </a>
        <a href="docs/manual/user/home" className="button button--primary">
          <Translate id="home.manuals">
            用户手册
          </Translate>
        </a>
        <a href="docs/deployment/docker-compose" className="button button--info">
          <Translate id="home.deployment">
            快速部署
          </Translate>
        </a>
      </div>
    </header>
  );
};

const Home = (): React.ReactElement => {
  return (
    <Layout>
      <div className="container">
        <Header />
      </div>
    </Layout>
  );
};

export default Home;
