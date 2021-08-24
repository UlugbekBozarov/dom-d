import './app.css';
import Sidebar from './component/sidebar/Sidebar';
import LeftSidebar from './component/left-sidebar/LeftSidebar';
import Footer from './component/footer/Footer';
import Services from './component/services/Services';
import Header from './component/header/Header'
import New from './component/new/New';
import Js4 from './component/js4/Js4';
import Js5 from './component/js5/Js5';
import Js6 from './component/js6/Js6';
import Js7 from './component/js7/js7';
import Js8 from './component/js8/js8';
import Js9 from './component/js9/js9';

function App() {
  return (
    <div className="project_body">
      <Sidebar />
      <LeftSidebar />
      <Header />
      <Services />
      <New />
      <Js4 />
      <Js5 />
      <Js6 />
      <Js7 />
      <Js8 />
      <Js9 />

      <Footer />
    </div>
  );
}

export default App;
