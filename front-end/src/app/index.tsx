import { withRouter } from './providers';
import { Routing } from '../pages';

function App() {
  return(
    <div>
      <Routing/>
    </div>
  )
}

export default withRouter(App);
