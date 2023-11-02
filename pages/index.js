import QrCode from "@/components/QrCode";
import Head from "next/head";
export default function Home() {
  
  return (<>
    <Head>
      <title>qr-code-component-main</title>
    </Head>
    <main>
      <QrCode/>
    </main>
    </>
  );
}
