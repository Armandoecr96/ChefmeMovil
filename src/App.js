import Dashboard from './Views/Components/Dashboard'
import SearchList from './Views/Components/SearchList'
import ResultList from './Views/Components/ResultList'
import RecetDetails from './Views/Components/RecetDetails'
import Login from './Views/Components/Login'
import SignUp from './Views/Components/SignUp'
import { createStackNavigator } from 'react-navigation'

export default createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: 'Sign up'
    }
  },
  Home: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  },
  SearchList: {
    screen: SearchList,
    navigationOptions: {
      title: 'Search'
    }
  },
  ResultList: {
    screen: ResultList,
    navigationOptions: {
      title: 'Result'
    }
  },
  RecetDetails: {
    screen: RecetDetails,
    navigationOptions: {
      title: 'Details'
    }
  }
})
