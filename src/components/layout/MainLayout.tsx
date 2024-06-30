import { Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: 1,
    // icon: <UserOutlined />,
    label: "Dashboard",
    // path: "/dashboard",
  },
  {
    key: 2,
    // icon: <UserOutlined />,
    label: "Profile",
    // path: "/profile",
  },
  {
    key: 3,
    // icon: <UserOutlined />,
    label: "User Management",
    children: [
      {
        key: 31,
        label: "Create Admin",
      },
      {
        key: 41,
        label: "Create User",
      },
    ],
    // path: "/user",
  },
];

const MainLayout = () => {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div>
            <h1
              style={{ color: "white", textAlign: "center", marginTop: "11px" }}
            >
              UNMS
            </h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>

        <Layout>
          <Header style={{ padding: 0 }} />

          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
