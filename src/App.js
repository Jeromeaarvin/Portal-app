import './App.css';
import './Studyprogram.css'
import Studyprogram from './Studyprogram';
import DynamicDropdown from './DynamicDropdown';
import './Dynamicdropdown.css'
import FilteredItemsContainer from './Filter/FilteredItemsContainer';
import FilteredItemsList from './Filter/FilteredItemsList';
import CheckboxSelection from './CheckboxSelection';
import FormComponent from './FormComponent';
import DashboardPage from './Dashboard/DashboardPage';
import { BrowserRouter as Router, Route ,Routes, BrowserRouter} from 'react-router-dom';
import ManageApllicationPage from './ManageApllication/ManageApllicationPage';
import ManageStudentsPage from './ManageStudents/ManageStudentsPage';
import SearchProgramPage from './SearchProgram/SearchProgramPage';
import Contact from './Contact';
import NotificationPage from './Notifications/NotificationPage';
import Mywalletpage from './Walletpage/Mywalletpage';
import { ApplicationCountProvider } from "./ApplicationCountContext";



function App() {
  return (
     <ApplicationCountProvider>
    <div className="App">
   
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<DashboardPage/>} />
      <Route path="/ManageApllicationPage" element={<ManageApllicationPage/>} />
      <Route path="/ManageStudentsPage" element={<ManageStudentsPage/>} />
      <Route path="/SearchProgramPage" element={<SearchProgramPage/>} />
      <Route path="/Notification-page" element={<NotificationPage/>} />
      <Route path="/Mywalletpage" element={<Mywalletpage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </ApplicationCountProvider>
  );
}

export default App;
