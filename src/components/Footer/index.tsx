import { GithubOutlined } from "@ant-design/icons";

import { Footer } from "antd/lib/layout/layout";
import Text from "antd/lib/typography/Text";

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      <p>
        <Text>
          Tractian Challenge
          <a
            href="https://github.com/sozua/desafio-tractian"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: 8, color: "inherit" }}
          >
            <GithubOutlined />
          </a>
        </Text>
        <br />
        <Text type="secondary">
          Feito com ❤ por{" "}
          <a href="https://github.com/sozua" target="_blank" rel="noreferrer">
            Diogo de Souza
          </a>
        </Text>
      </p>
    </Footer>
  );
};

export default AppFooter;
