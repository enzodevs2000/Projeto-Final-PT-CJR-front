import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import ConfirmQuestion from "./ConfirmQuestion.jsx";

function AddQuestionModal() {
  const [isOpen, setIsOpen] = useState(false);
//   const confirm = props.confirm;

//   function childrenClose() {}

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-azul-escuro text-white p-3 mt-5 rounded-xl font-fonte-padrao hover:bg-btn-login-hover font-semibold"
      >
        Adicionar Questão
      </button>
      <div className="fixed bg-black bg-opacity-25" />
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-clr-login  align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" mt-5 mb-2 text-2xl font-normal leading-6 text-black font-fonte-padrao text-start ml-5"
                  >
                    Adicionar questão ao PDI
                  </Dialog.Title>

                  <div
                    id="modal-pannel"
                    className="bg-cinza-escuro-2 flex flex-col justify-center px-5 pt-2 pb-5 font-fonte-padrao"
                  >
                    <div
                      id="titulo"
                      className="flex flex-col justify-center mb-2"
                    >
                      <label
                        htmlFor="titulo-input"
                        className="justify-start text-start mb-1"
                      >
                        Titulo *
                      </label>
                      <input
                        type="text"
                        name="titulo-input"
                        placeholder="Elabore a pergunta"
                      />
                    </div>

                    <div id="descricao" className="flex flex-col">
                      <label
                        htmlFor="descricao-input"
                        className="justify-start text-start mb-1"
                      >
                        Descrição
                      </label>
                      <textarea
                        type="text"
                        name="descricao-input"
                        className=" flex h-24 items-start text-start"
                        placeholder="Caso seja necessário, utilize este campo para detalhar a questão"
                      />
                    </div>
                  </div>

                  <div className=" flex mt-4 justify-end mb-5 mr-5">
                    <button
                      type="button"
                      className="inline-flex  rounded-md border border-transparent bg-white text-azul-escuro px-4 py-2 text-sm font-medium  hover:bg-btn-login-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-3 border-solid border-black"
                      onClick={closeModal}
                    >
                      Cancelar
                    </button>

                    <ConfirmQuestion onClose={() => closeModal()}/>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default AddQuestionModal;
