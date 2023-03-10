import { createContext, useCallback, useReducer, useMemo } from "react"
import { toast } from "react-toastify";


export const AuthContext = createContext();

 const getUserLocalStorage = localStorage.getItem('userAuth')

const AuthProvider = ({children}) => {

    const ACTIONS = {
        LOGIN_SUCCESS: "LOGIN_SUCCESS", 
        LOGIN_ERROR: "LOGIN_ERROR", 
        LOGOUT: "LOGOUT"
    }

    const initialValue = {
        user: getUserLocalStorage ? JSON.parse(getUserLocalStorage).username : '', 
        password: getUserLocalStorage ? JSON.parse(getUserLocalStorage).password : '', 
        isAuthenticated: getUserLocalStorage ? JSON.parse(getUserLocalStorage).isAuthenticated : '', 
        error: ""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.LOGIN_SUCCESS:
                return {
                    user: action.payload.username, 
                    password: action.payload.password, 
                    isAuthenticated: true, 
                    error: ""
                }
            case ACTIONS.LOGIN_ERROR:
                return {
                    ...state, 
                    error: action.payload.errormsg
                }
            case ACTIONS.LOGOUT:
                return {
                    initialValue
                }
            default:
                 return state;
        }

    }

    const [authState, dispatch] = useReducer(reducer, initialValue);

    const loginSuccess = useCallback((username, password) => {
        dispatch({type: ACTIONS.LOGIN_SUCCESS, payload: {username, password}})
        toast.success("Login Successful!")
        localStorage.setItem("userAuth", JSON.stringify({username, password, isAuthenticated: true}))
    }, [])
    
    const loginError = useCallback((errormsg) => {
        dispatch({type: ACTIONS.LOGIN_ERROR, payload: {errormsg}})
        toast.error("Wrong username or password!", {
            icon: '😖'
        })
    }, [])

    const logout = useCallback(() => {
        toast.success("Logout Successful!")
        localStorage.removeItem("userAuth")
        dispatch({type: ACTIONS.LOGOUT})
    }, [])


    const dataAuth = useMemo(() => ({
        authState,
        loginSuccess,
        loginError, 
        logout
    }), [authState, loginSuccess, loginError, logout])

    return (
        <AuthContext.Provider 
            value={dataAuth}
        >
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider