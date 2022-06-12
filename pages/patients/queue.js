import Layout from '../../components/layout';

const queueNumber = "1";

export default function Home() {
  return (
    <Layout home>
      <header> You are # {queueNumber}. Please wait for an email. </header>
    </Layout>
  )
}
