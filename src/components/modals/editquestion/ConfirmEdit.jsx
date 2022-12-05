import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useState } from "react";

function ConfirmEdit(props) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <button
        type="button"
        className="inline-flex  rounded-md border border-transparent bg-azul-escuro text-white px-4 py-2 text-sm font-medium  hover:bg-btn-login-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={openModal}
      >
        Editar
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-clr-login p-6 text-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" mt-10 mb-5 text-2xl font-normal leading-6 text-black font-fonte-padrao"
                  >
                    Tem certeza que deseja editar esta questão ao PDI?
                  </Dialog.Title>

                  <div className=" flex mt-4 justify-end">
                    <button
                      type="button"
                      className="inline-flex  rounded-md border border-transparent bg-white text-azul-escuro px-4 py-2 text-sm font-medium  hover:bg-btn-login-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-3 border-solid border-black"
                      onClick={closeModal}
                    >
                      Não tenho certeza
                    </button>
                    <button
                      type="button"
                      className="inline-flex  rounded-md border border-transparent bg-azul-escuro text-white px-4 py-2 text-sm font-medium  hover:bg-btn-login-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={props.onClose}
                    >
                      Tenho certeza
                    </button>
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

export default ConfirmEdit;
