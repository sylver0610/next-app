// "use client"
import { Layout, ConfigProvider } from "antd"
import Sider from "antd/es/layout/Sider"
import dynamic from "next/dynamic"
import { Content, Footer, Header } from "antd/es/layout/layout"
// const Sidebar = dynamic(() => import("./Sidebar/Sidebar"), { ssr: false })
import Sidebar from "./Sidebar/Sidebar"
import { useState } from "react"
import TopicMenu from "./Menu/TopicMenu"
import {
  PlusCircleOutlined,
  CompassOutlined,
  BookOutlined,
  LineChartOutlined,
  SettingOutlined,
  PictureOutlined,
  FolderOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons"
import { HeaderAdmin } from "./Header/HeaderAdmin"
// const TopicMenu = dynamic(() => import("./Menu/TopicMenu"), { ssr: false })

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  padding: 8,
  color: "black",
  height: 64,
  lineHeight: "64px",
  backgroundColor: "#fff",
}

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
}

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
}

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
}

export interface Topic {
  icon: React.ElementType
  name: string
  children?: Topic[]
}

const TOPICS: Topic[] = [
  {
    icon: CompassOutlined,
    name: "Khám phá",
  },
  {
    icon: BookOutlined,
    name: "Thư viện của tôi",
  },
  {
    icon: LineChartOutlined,
    name: "Báo cáo",
  },
  {
    icon: SettingOutlined,
    name: "Cài đặt",
  },
  {
    icon: PictureOutlined,
    name: "Meme",
  },
  {
    icon: FolderOutlined,
    name: "Bộ sưu tập",
  },
  {
    icon: UserOutlined,
    name: "Hồ sơ",
  },
  {
    icon: LogoutOutlined,
    name: "Đăng xuất",
  },
]

export default function LayoutAdmin({ children }: any) {
  const topics: Topic[] = TOPICS
  const [contentIndex, setContentIndex] = useState(0)
  const [selectedKey, setSelectedKey] = useState("0")
  const changeSelectedKey = (event: any) => {
    const key = event.key
    setSelectedKey(key)
    setContentIndex(+key)
  }
  const Menu = (
    <TopicMenu topics={topics} selectedKey={selectedKey} changeSelectedKey={changeSelectedKey} />
  )
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "rgb(136, 84, 192)",
            colorPrimaryBg: "rgb(242 242 242)",
          },
        }}
      >
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar menu={Menu} />
          <Layout>
            <HeaderAdmin style={headerStyle} />
            <Content style={contentStyle}>
              <main>{children}</main>
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </>
  )
}
