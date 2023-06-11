import React, { ReactElement, ReactNode } from "react"
import { Layout } from "antd"
import styles from "@styles/layout.module.scss"
import Link from "next/link"
import { PlusCircleOutlined } from "@ant-design/icons"
interface Props {
  menu?: ReactElement
}
//tsrfc
export default function Sidebar({ menu }: Props) {
  return (
    <Layout.Sider
      // className={styles.sidebar}
      breakpoint={"lg"}
      collapsedWidth={0}
      trigger={null}
      theme="light"
    >
      <div className={styles.logo}>
        <Link href={"/"}>
          <span>Quizziz</span>
        </Link>
      </div>
      <div className={styles.userDetails}>
        <div className="user-section p-4 pb-2">
          <div className="flex items-center mb-3">
            <div className="w-full">
              <Link href={"#!"} className="font-semibold text-sm">
                La Vu Thanh Dien
              </Link>
              <div className={`${styles[`type-account`]} font-semibold px-1 `}>
                <span>Tài khoản cơ bản</span>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center px-4 py-1.5 text-xs font-semibold h-full bg-super-20% text-super-dark hover:text-super-light active:text-super-dark rounded-2xl super-secondary transition-colors duration-200 ease-in-out flex relative min-w-full min-h-8 flex mb-4 min-w-full min-h-8 flex mb-4">
            <span className="title">Nâng cấp gói của bạn</span>{" "}
          </button>
        </div>
      </div>
      <div className={styles["btn-container"]}>
        <button className="flex items-center justify-center px-8 py-3 text-lg font-semibold mb-1 h-10 bg-lilac text-white hover:bg-lilac-light active:bg-lilac-dark rounded-lg primary transition-colors duration-200 ease-in-out flex relative min-w-max">
          <PlusCircleOutlined className="flex items-center mr-2 text-sm" />
          <span className="title">Tạo mới</span>
        </button>
      </div>
      {menu}
    </Layout.Sider>
  )
}
