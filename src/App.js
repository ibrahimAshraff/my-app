import './sass/main.scss'
import { Switch } from 'react-router-dom';
import Routes from './components/routes/Routes';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <Switch>
      <Layout>
        <Routes />
      </Layout>
    </Switch>
  );
}

export default App;
