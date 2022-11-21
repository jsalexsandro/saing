import { Fragment } from "react";
import { Form } from "../components/Form";
import { Header } from "../components/Header";

export default function Index(){
  return (
    <Fragment>
      <Header/>
      <main className="w-full h-screen bg-gray-100">
        <Form/>
      </main>
    </Fragment>
  )
}