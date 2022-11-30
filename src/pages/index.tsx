import { Fragment } from "react";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { MenuInfoProvider } from "../hooks/useInfoMenu";
import { Menu } from "../components/Menu";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";
import { DownlaodType, DownloadContext } from "../hooks/useDownlaod";


const downloadType:DownlaodType = {
  type: "youtube-video",
  downloadType: "vídeos",
  title:"Youtube"
}

export default function Index(){
  return (
    <DownloadContext.Provider value={ downloadType }>
      <Fragment>
        <MenuInfoProvider>
          <Header/>
          <Menu/>
        </MenuInfoProvider>
        <main className="w-full h-auto  bg-gray-100">
          <Form/>
          <Section />
        </main>
        <Footer/>
      </Fragment>
    </DownloadContext.Provider>
  )
}