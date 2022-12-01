import EditImg from '../assets/edit_icon.png'

function TableListQuest() {
    return (
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg flex">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-cinza-escuro ">
            <tr>
              <th scope="col" className="py-3 px-5">
                Título
              </th>
              <th scope="col" className="py-3 px-5 text-center">
                Data de modificação
              </th>
              <th scope="col" className="py-3 px-5 text-center">
                Arquivado
              </th>
              <th scope="col" className="py-3 px-5 text-center">
                
                {/* imagem do lápis */}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-cinza-claro border-b">
              <td className="py-3 px-5 ">O que eu espero do CJR?</td>
              <td className="py-3 px-5 text-center">15/02/2023</td>
              <td className="py-3 px-5 text-center">
                <input type="checkbox" className="form-checkbox bg-cinza-claro "/>
              </td>
              <td className="py-3 px-5 text-center">
                <button>
                  <img src={EditImg} alt="Editar" />
                </button>
              </td>
            </tr>
  
            <tr className="bg-cinza-escuro border-b">
              <td className="py-3 px-5">Quem sou eu?</td>
              <td className="py-3 px-5">
                <span className='block mx-auto w-full text-center'>15/02/2023</span> 
                </td>
              <td className="py-3 px-5 text-center">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td>
              <td className="py-3 px-5 text-center">
                <button>
                  <img src={EditImg} alt="Editar" />
                </button>
              </td>
            </tr>
  
            <tr className="bg-cinza-claro border-b ">
              <td className="py-3 px-5">Quais são meus pontos fortes?</td>
              <td className="py-3 px-5 text-center">15/02/2023</td>
              <td className="py-3 px-5 text-center">
                <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
              </td>
              <td className="py-3 px-5 text-center">
                <button>
                  <img src={EditImg} alt="Editar" />
                </button>
              </td>
            </tr>
  
            <tr className="bg-cinza-escuro border-b">
              <td className="py-3 px-5">Tem um animal de estimação?</td>
              <td className="py-3 px-5 text-center">15/02/2023</td>
              <td className="py-3 px-5 text-center">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td>
              <td className="py-3 px-5 text-center">
                <button>
                  <img src={EditImg} alt="Editar" />
                </button>
              </td>
            </tr>
  
            <tr className="bg-cinza-claro border-b ">
              <td className="py-3 px-5">Quais são meus pontos a melhorar?</td>
              <td className="py-3 px-5 text-center">15/02/2023</td>
              <td className="py-3 px-5 text-center">
                <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
              </td>
              <td className="py-3 px-5 text-center">
                <button>
                  <img src={EditImg} alt="Editar" />
                </button>
              </td>
            </tr>
  
            <tr className="bg-cinza-escuro border-b">
              <td className="py-3 px-5 ">Quem eu quero ser?</td>
              <td className="py-3 px-5 text-center">15/02/2023</td>
              <td className="py-3 px-5 text-center">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td>
              <td className="py-3 px-5 text-center">
                <button>
                  <img src={EditImg} alt="Editar" />
                </button>
              </td>
            </tr>
  
            <tr className="bg-cinza-claro border-b ">
              <td className="py-3 px-5">Qual é a coisa mais desafiadora que eu poderia fazer, sendo quem eu sou hoje?</td>
              <td className="py-3 px-5 text-center">15/02/2023</td>
              <td className="py-3 px-5 text-center">
                <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
              </td>
              <td className="py-3 px-5 text-center">
                <button>
                  <img src={EditImg} alt="Editar" />
                </button>
              </td>
            </tr>
  
            <tr className="bg-cinza-escuro border-b">
              <td className="py-3 px-5">O que está faltando para chegar aonde eu quero?</td>
              <td className="py-3 px-5 text-center">15/02/2023</td>
              <td className="py-3 px-5 text-center">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td>
              <td className="py-3 px-5 text-center">
                <button>
                  <img src={EditImg} alt="Editar" />
                </button>
              </td>
            </tr>
  
            <tr className="bg-cinza-claro border-b ">
              <td className="py-3 px-5">Qual a sua comida favorita?</td>
              <td className="py-3 px-5 text-center">15/02/2023</td>
              <td className="py-3 px-5 text-center">
                <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
              </td>
              <td className="py-3 px-5 text-center">
                <button>
                  <img src={EditImg} alt="Editar" />
                </button>
              </td>
            </tr>
  
            <tr className="bg-cinza-escuro border-b">
              <td className="py-3 px-5">Gosta de pagode?</td>
              <td className="py-3 px-5 text-center">15/02/2023</td>
              <td className="py-3 px-5 text-center">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td>
              <td className="py-3 px-5 text-center">
                <button>
                  <img src={EditImg} alt="Editar" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default TableListQuest;
  