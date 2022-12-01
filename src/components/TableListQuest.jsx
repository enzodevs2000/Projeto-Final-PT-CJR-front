function TableListQuest() {
    return (
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs text-gray-700 uppercase bg-cinza-escuro ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Título
              </th>
              <th scope="col" className="py-3 px-6">
                Data de modificação
              </th>
              <th scope="col" className="py-3 px-6">
                Arquivado
              </th>
              <th scope="col" className="py-3 px-6">
                {/* imagem do lápis */}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-cinza-claro border-b ">
              <td className="py-3 px-5 ">O que eu espero do CJR?</td>
              <td className="py-3 px-5 flex justify-start">15/02/2023</td>
              <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
              </td>
              {/* <td className="py-3 px-5">
                <input name="check" type="checkbox" className="form-checkbox appearence-none bg-cinza-claro fill-black checked:accent-black" />
                <label htmlFor="check"></label>
              </td> */}
            </tr>
  
            <tr className="bg-cinza-escuro border-b">
              <td className="py-3 px-5">Quem sou eu?</td>
              <td className="py-3 px-5">15/02/2023</td>
              <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td>
              {/* <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td> */}
            </tr>
  
            <tr className="bg-cinza-claro border-b ">
              <td className="py-3 px-5">Quais são meus pontos fortes?</td>
              <td className="py-3 px-5">15/02/2023</td>
              <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
              </td>
              {/* <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
              </td> */}
            </tr>
  
            <tr className="bg-cinza-escuro border-b">
              <td className="py-3 px-5">Tem um animal de estimação?</td>
              <td className="py-3 px-5">15/02/2023</td>
              <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td>
              {/* <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td> */}
            </tr>
  
            <tr className="bg-cinza-claro border-b ">
              <td className="py-3 px-5">Quais são meus pontos a melhorar?</td>
              <td className="py-3 px-5">15/02/2023</td>
              <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
              </td>
              {/* <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
              </td> */}
            </tr>
  
            <tr className="bg-cinza-escuro border-b">
              <td className="py-3 px-5">Quem eu quero ser?</td>
              <td className="py-3 px-5">15/02/2023</td>
              <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td>
              {/* <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td> */}
            </tr>
  
            <tr className="bg-cinza-claro border-b ">
              <td className="py-3 px-5">Qual é a coisa mais desfiadora que eu poderia fazer, sendo quem eu sou hoje?</td>
              <td className="py-3 px-5">15/02/2023</td>
              <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
              </td>
              {/* <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
              </td> */}
            </tr>
  
            <tr className="bg-cinza-escuro border-b">
              <td className="py-3 px-5">O que está faltando para chegar aonde eu quero?</td>
              <td className="py-3 px-5">15/02/2023</td>
              <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td>
              {/* <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td> */}
            </tr>
  
            <tr className="bg-cinza-claro border-b ">
              <td className="py-3 px-5">Qual a sua comida favorita?</td>
              <td className="py-3 px-5">15/02/2023</td>
              <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
              </td>
              {/* <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
              </td> */}
            </tr>
  
            <tr className="bg-cinza-escuro border-b">
              <td className="py-3 px-5">Gosta de pagode?</td>
              <td className="py-3 px-5">15/02/2023</td>
              <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td>
              {/* <td className="py-3 px-5">
                <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default TableListQuest;
  