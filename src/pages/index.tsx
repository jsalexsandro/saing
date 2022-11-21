import { Fragment } from "react";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { MenuInfoProvider } from "../hooks/useInfoMenu";
import { Menu } from "../components/Menu";
import { Section } from "../components/Section";

export default function Index(){
  return (
    <Fragment>
      <MenuInfoProvider>
        <Header/>
        <Menu/>
      </MenuInfoProvider>
      <main className="w-full h-screen bg-gray-100">
        <Form/>
        <Section />
      </main>
    </Fragment>
  )
}