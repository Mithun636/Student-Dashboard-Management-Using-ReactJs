import logo from './images/logo.png';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="logoall">
      <header>
        <img src={logo} className="logo" alt="logo" />
      </header>
      <div className='board'>
        <div className='board__row'>
          <a>
            <i className="fas fa-user dash"></i>
            <p>Student Management</p>
          </a>
        </div>
        <div className='board__row'>
          <a>
            <i class="fa-solid fa-inbox  dash"></i>
            <p>Financial Management</p>
          </a>
        </div>
        <div className='board__row'>
          <a>
            <i class="fa-solid fa-gear dash"></i>
            <p>Quality control</p>
          </a>
        </div>
        <div className='board__row'>
          <a>
            <i className="fas fa-clipboard dash"></i>
            <p>Report Delivery</p>
          </a>
        </div>
        <div className='board__row'>
          <a>
            <i class="fa-solid fa-square-check dash"></i>
            <p>Attendence</p>
          </a>
        </div>
      </div>
    </div>

  );
}

export default App;
