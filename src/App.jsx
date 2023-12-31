import BasicTable from './components/BasicTable';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import mData from "./MOCK_DATA.json"
import { useMemo } from 'react';

function App() {
      /**@type import('@tanstack/react-table').ColumnDef<any> */
      const columns = [
        {
            header: 'ردیف',
            accessorFn: row => `${row.id}`,
            accessorKey:'Id'
        },
        {
            header: 'نام',
            accessorFn: row => `${row.first_name}`,
            accessorKey:'first name'
        },
        {
            header: 'نام خانوادگی',
            accessorFn: row => `${row.last_name}`,
            accessorKey:'last name'
        },
        {
            header: 'شرکت',
            accessorFn: row => `${row.company}`,
            accessorKey:'company'
        },
        {
            Header: "Status",
            accessorKey: 'وضعیت',
            cell: ({ row }) => {
                return (
                    row.original.status ?
                        <div className='flex flex-row'>
                            <div className="items-center justify-center w-4 h-4  font-bold  bg-green-500 border-2  border-gray-300 rounded-full"></div>
                            <span className=" text-green-800 text-xs font-medium mr-2 px-1   rounde">active</span>
                        </div>

                        :
                        <div className='flex flex-row'>
                            <div className=" inline-flex items-center justify-center w-4 h-4    bg-red-500 border-2  border-gray-300 rounded-full   "></div>
                            <span className=" text-red-800 text-xs font-medium mr-2 px-1  rounded">deactive</span>
                        </div>
                )
            }
        },
        {
            Header: "access",
            accessorKey: 'دسترسی',
            cell: ({ row }) => {
                return (
                    <div className='flex flex-row'>
                        <span className="bg-blue-400
                         text-zinc-50
                         text-sm font-medium mr-2
                          py-1 rounded-full 
                         w-24
                         text-center
                       border-blue-400">{row.original.access}</span>
                    </div>
                )
            }
        },
    ]
    const data = useMemo(() => mData, [])
  return (
    <div className="flex"> <div className='basis-2/12 '>
        <Sidebar />
      </div>
      <div className="basis-10/12 border">
        <Navbar />
        <div className="grid grid-cols-6  ">
          <div className="col-start-2 col-span-4">
            <BasicTable  columns={columns} data={data}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;