import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Pages/Home'
import Header from './components/Header';
import Filme from './Pages/Filme';
import Favoritos from './Pages/Favoritos';
import Notfound from './Pages/Notfound';


const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/filme/:id' component={Filme}/>
                <Route path='/favoritos' component={Favoritos}/>
                <Route path='*' component={Notfound}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;