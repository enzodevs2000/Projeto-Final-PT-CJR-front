import NavBar from "../components/NavBar/NavBar.jsx";
import TableListQuest from "../components/TableListQuest.jsx";
import Info from "../assets/Info.png"
import AddQuestionButton from "../components/AddQuestionButton/AddQuestionButton.jsx";

function ListQuest() {
  return (
    <div className="w-full h-full bg-clr-login">
      <NavBar />
      <AddQuestionButton />
      <div className="flex flex-col justify-center bg-azul-claro w-3/5  mx-auto my-5 rounded-xl font-fonte-padrao">
      <div
        id="titulo-form"
        className="flex justify-center flex-col p-2 text-3xl text-white font-normal "
      >
        <div className="flex items-start justify-end ">
          <img src={Info} alt="info-icon" />
        </div>
        <div className="flex justify-end items-center text-center w-4/5">
          <h1>
            Questões do plano de desenvolvimento individual
          </h1>
        </div>
      </div>

        <div className="p-5">
          <TableListQuest />
        </div>
      </div>
    </div>
  );
}

export default ListQuest;