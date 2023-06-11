import { Input, Layout, Select, Space } from "antd"
import Search from "antd/es/input/Search"
import React from "react"
import { SearchOutlined } from "@ant-design/icons"
interface Props {
  style: React.CSSProperties
}

const prefix = (
  <SearchOutlined
    style={{
      paddingRight: 10,
    }}
  />
)
const options = [
  {
    value: "library",
    label: "Thư viện",
  },
  {
    value: "myLib",
    label: "Thư viện của tôi",
  },
  {
    value: "report",
    label: "Báo cáo",
  },
]

export const HeaderAdmin = ({ style }: Props) => {
  return (
    <Layout.Header style={style}>
      <div className="large flex flex-row space-x-2 flex-grow pl-6 md:pl-0">
        <div className="flex flex-grow ml-auto">
          <div className="main-header-search-bar bg-light-1 border-light-1 block w-full h-full">
            <Space.Compact block className="h-full" size="large">
              <Input
                // size="large"
                placeholder="Tìm trong thư viện quizziz"
                prefix={prefix}
              />
              <Select
                // size={"large"}
                defaultValue="library"
                popupMatchSelectWidth={false}
                // dropdownStyle={{
                //   width: 200,
                // }}
                options={options}
                // style={{ width: 100 }}
              />
            </Space.Compact>
          </div>
        </div>
        <div className="flex space-x-2 flex-row pl-0 md:pl-2 h-10">
          <button>Nhập mã</button>
          <SearchOutlined />
        </div>
      </div>
      HeaderAdmin
    </Layout.Header>
  )
}
