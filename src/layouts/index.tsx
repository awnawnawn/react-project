import Sidebar from './sidebar';
import Mian from './main';

export default function Layouts(){

  return (
    <div
      className='flex w-screen h-screen'
    >
      <Sidebar />
      <Mian />
    </div>
  );
}
