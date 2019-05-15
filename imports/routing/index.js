import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import Home2 from '../ui/Home2.o.jsx'
import UserAccount from '/imports/ui/UserAccount.jsx';
import Login from '/imports/ui/Login.jsx';
import SignUp from '/imports/ui/SignUp.jsx';
import Results from '/imports/ui/Results';
import Cards from '/imports/ui/Cards.jsx';



route('/', Home2);
route('/Login', Login);
route('/signup', SignUp);
route('/useraccount', UserAccount);
route('/results', Results);
route('/cards', Cards);
