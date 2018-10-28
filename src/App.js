import Dashboard from './Views/Components/Dashboard'
import SearchList from './Views/Components/SearchList'
import ResultList from './Views/Components/ResultList'
import RecetDetails from './Views/Components/RecetDetails'
import { createStackNavigator } from 'react-navigation'

export default createStackNavigator({
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
    screen: RecetDetails
  }
})
