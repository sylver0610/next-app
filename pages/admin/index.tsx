import dynamic from "next/dynamic"
import Head from "next/head"
// import LayoutAdmin from "@component/Layout/LayoutAdmin"
const LayoutAdmin = dynamic(() => import("@component/Layout/LayoutAdmin"), { ssr: false })
import * as React from "react"

export interface AdminProps {}

export default function Admin(props: AdminProps) {
  return (
    <LayoutAdmin>
      <Head>
        <title>Admin</title>
      </Head>
      <div>admin</div>
    </LayoutAdmin>
  )
}
