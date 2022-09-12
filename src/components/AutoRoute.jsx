import { Route, Redirect } from 'react-router-dom'
import { getToken } from '@/utils/auth'

const AuthRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (!!getToken()) return <Component></Component>
                return <Redirect to={{ pathname: '/login', state: { from: props.location.pathname } }}></Redirect>
            }}
        ></Route>
    )
}

export default AuthRoute
