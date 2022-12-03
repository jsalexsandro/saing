import { Fragment } from "react";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { MenuInfoProvider } from "../hooks/useInfoMenu";
import { Menu } from "../components/Menu";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";
import { DownlaodType, DownloadContext } from "../hooks/useDownlaod";
import { Informations } from "../components/Informations";
import { YoutubeVideoMetaDesc } from "../text/youtube-video-text";
import Head from "next/head"

const downloadType:DownlaodType = {
  type: "youtube-video",
  downloadType: "vídeos",
  title:"Youtube"
}

const SiteTitle = "Saing | Baixar Vídeos do Youtube"

export default function Index(){
  return (
    <DownloadContext.Provider value={ downloadType }>
      <Fragment>
        <Head>
          <meta name="description" content={ YoutubeVideoMetaDesc }  />
          <title>{ SiteTitle }</title>
        </Head>
        <MenuInfoProvider>
          <Header/>
          <Menu/>
        </MenuInfoProvider>
        <main className="w-full h-auto  bg-gray-100">
          <Form/>
          <Section />
          <Informations />
        </main>
        <Footer/>
      </Fragment>
    </DownloadContext.Provider>
  )
}