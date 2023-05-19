import React from "react"
import { getSession, signOut, useSession } from "next-auth/react"
import { Button, Space } from "antd"

import { InferGetServerSidePropsType, NextPage } from "next"
import Head from "next/head"
// import { useMessages } from '@component/Libs/useMessage'
const account: NextPage = ({ session }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // const { data: session } = useSession()
  //   const { addMessage } = useMessages()
  const handleClick = async () => {
    console.log(`clicked`)
    // addMessage('')
  }
  return (
    <>
      <Head>
        <title> Account </title>
      </Head>
      <div>account</div>
      {/* {console.log(session)}
      {console.log(props)} */}
      {session && (
        <div>
          <p>Welcome {session.user?.email}</p>
          <button onClick={() => signOut()}> Sign Out </button>
        </div>
      )}
      <section className="flex h-screen">
        <div className="w-6/12">
          <Button type="primary" onClick={() => handleClick()}>
            Primary Button
          </Button>
        </div>
        <div>b</div>
      </section>
    </>
  )
}

export default account

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    }
  }
  return {
    props: { session },
  }
}
