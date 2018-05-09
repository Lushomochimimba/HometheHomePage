import route from './router.js';
import Home from '/imports/ui/Home.jsx';
import UserAccount from '/imports/ui/UserAccount.jsx'; 
import Login from '/imports/ui/Login.jsx'; 
import SignUp from '/imports/ui/SignUp.jsx'; 
import Results from '/imports/ui/Results.jsx'; 



route('/', Home);
route('/Login', Login);
route('/signup', SignUp);
route('/useraccount', UserAccount);
route('/results', Results);