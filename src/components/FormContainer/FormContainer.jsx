import { useRef } from "react";
import { Form } from "@unform/web";

import Input from "./Input.jsx";
import LongInput from "./LongInput.jsx";
import Info from "../../assets/Info.png";

function FormContainer() {
  const formRef = useRef();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div
      id="form-container"
      className="flex flex-col justify-center bg-azul-claro w-3/5  mx-auto my-10 rounded-xl font-fonte-padrao "
    >
      <div
        id="titulo-form"
        className="flex justify-center flex-col p-2 text-3xl text-white font-normal "
      >
        <div className="flex items-start justify-end ">
          <img src={Info} alt="info-icon" />
        </div>
        <div className="flex justify-end items-center text-center w-4/5">
          <h1>
            Meu plano de desenvolvimento individual
          </h1>
        </div>
      </div>
      <div
        id="main-container"
        className="flex justify-between flex-col bg-white mx-5 mb-5 p-5 pl-10 rounded-xl"
      >
        <Form ref={formRef} onSubmit={handleFormSubmit} className="w-3/5">
          <label htmlFor="oqueEsperar" className="flex flex-col mb-5">
            O que eu espero da CJR?
            <Input name="oqueEsperar" placeholder="Resposta" />
          </label>

          <label htmlFor="quemSouEu" className="flex flex-col mb-5">
            Quem sou eu?
            <Input name="quemSouEu" placeholder="Resposta" />
          </label>

          <label htmlFor="pontosFortes" className="flex flex-col mb-5">
            Quais são meus pontos fortes?
            <Input name="pontosFortes" placeholder="Resposta" />
          </label>

          <label htmlFor="pontosMelhora" className="flex flex-col mb-5">
            Quais são meus pontos a melhorar?
            <Input name="pontosMelhora" placeholder="Resposta" />
          </label>

          <label htmlFor="quemQueroSer" className="flex flex-col mb-5">
            Quem eu quero ser?
            <Input name="quemQueroSer" placeholder="Resposta" />
          </label>

          <label htmlFor="desafio" className="flex flex-col mb-5">
            Qual a coisa mais desafiadora que eu poderia fazer, sendo quem eu
            sou hoje?
            <Input name="desafio" placeholder="Resposta" />
          </label>

          <label htmlFor="habilidades" className="flex flex-col mb-5">
            O que está faltando para chegar aonde eu quero?
            <p className="text-gray-400">- Habilidades técnicas / Hard Skills</p>
            <p className="text-gray-400">- Competências / Soft Skills</p>
            <LongInput name="habilidades" placeholder="Resposta" className="pb-10"/>
          </label>

          <label htmlFor="comidaFavorita" className="flex flex-col mb-5">
            Qual a sua comida favorita?
            <Input name="comidaFavorita" placeholder="Resposta" />
          </label>

          <label htmlFor="pagode" className="flex flex-col mb-5">
            Gosta de pagode?
            <Input name="pagode" placeholder="Resposta"/>
          </label>
        </Form>
        <div className="flex justify-end items-end text-center">
          <button className="bg-azul-escuro text-white p-3 px-5 mb-3 rounded-xl font-fonte-padrao hover:bg-btn-login-hover font-semibold">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
