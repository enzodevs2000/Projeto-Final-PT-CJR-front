function TableListPDI() {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs text-gray-700 uppercase bg-cinza-escuro ">
          <tr>
            <th scope="col" className="py-3 px-6">
              Membro
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Data de modificação
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Admin
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              Arquivado
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-cinza-claro border-b ">
            <td className="py-3 px-5 ">Jhon Doe</td>
            <td className="py-3 px-5 text-center">15/02/2023</td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
            </td>
            <td className="py-3 px-5 text-center">
              <input name="check" type="checkbox" className="form-checkbox appearence-none bg-cinza-claro fill-black checked:accent-black" />
            </td>
          </tr>

          <tr className="bg-cinza-escuro border-b">
            <td className="py-3 px-5">Ronaldo</td>
            <td className="py-3 px-5 text-center">15/02/2023</td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
            </td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
            </td>
          </tr>

          <tr className="bg-cinza-claro border-b ">
            <td className="py-3 px-5">Messi</td>
            <td className="py-3 px-5 text-center">15/02/2023</td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
            </td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
            </td>
          </tr>

          <tr className="bg-cinza-escuro border-b">
            <td className="py-3 px-5">Jane Doe</td>
            <td className="py-3 px-5 text-center">15/02/2023</td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
            </td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
            </td>
          </tr>

          <tr className="bg-cinza-claro border-b ">
            <td className="py-3 px-5">Sasuke</td>
            <td className="py-3 px-5 text-center">15/02/2023</td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
            </td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
            </td>
          </tr>

          <tr className="bg-cinza-escuro border-b">
            <td className="py-3 px-5">Izuku Midoriya</td>
            <td className="py-3 px-5 text-center">15/02/2023</td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
            </td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
            </td>
          </tr>

          <tr className="bg-cinza-claro border-b ">
            <td className="py-3 px-5 ">Neymar Jr.</td>
            <td className="py-3 px-5 text-center">15/02/2023</td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
            </td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
            </td>
          </tr>

          <tr className="bg-cinza-escuro border-b">
            <td className="py-3 px-5">Yasuo</td>
            <td className="py-3 px-5 text-center">15/02/2023</td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
            </td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
            </td>
          </tr>

          <tr className="bg-cinza-claro border-b ">
            <td className="py-3 px-5">Hayley Williams</td>
            <td className="py-3 px-5 text-center">15/02/2023</td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
            </td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-claro"/>
            </td>
          </tr>

          <tr className="bg-cinza-escuro border-b">
            <td className="py-3 px-5">Diogo Nogueira</td>
            <td className="py-3 px-5 text-center">15/02/2023</td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
            </td>
            <td className="py-3 px-5 text-center">
              <input type="checkbox" className="form-checkbox bg-cinza-escuro" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableListPDI;
