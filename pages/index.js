import HeadMeta from './HeadMeta'
import Layout from './Layout'
import List from './List'

export default function Home() {
  return (
    <>
      <Layout>
        <HeadMeta title="index"/>
        <List />
      </Layout>
    </>
  )
}
