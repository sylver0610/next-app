import React, { Component, ReactElement } from "react"
import { Menu, ConfigProvider } from "antd"
import { Topic } from "../LayoutAdmin"

interface TopicMenuProps {
  topics: Topic[]
  selectedKey: string
  changeSelectedKey: any
}
const menuStyle: React.CSSProperties = {
  fontWeight: "600",
}

const menuItemStyle: React.CSSProperties = {
  paddingLeft: 16,
  width: "100%",
  margin: "0 0",
  borderRadius: 0,
}

const TopicMenu = ({ topics, selectedKey, changeSelectedKey }: TopicMenuProps) => {
  const styledTopics: ReactElement[] = []
  topics.forEach((topic, index) =>
    styledTopics.push(
      <Menu.Item key={index} onClick={changeSelectedKey} style={menuItemStyle}>
        {<topic.icon />}
        <span>{topic.name}</span>
      </Menu.Item>
    )
  )

  return (
    <Menu mode="inline" selectedKeys={[selectedKey]} style={menuStyle}>
      {styledTopics}
    </Menu>
  )
}
export default TopicMenu

//tsdrp
