import BasicTable from './components/BasicTable';
import '../public/logo-set02.png'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex">
      <div className="basis-10/12 border">
        <Navbar />
        <div className="grid grid-cols-6  ">
          <div className="col-start-2 col-span-4">
            <BasicTable />
            </div>
        </div>
      </div>
      <div className='basis-2/12 '>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;