import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom';
import { auth, provider } from './firebase'
import {selectUserName, selectUserPhoto,selectUserEmail, setUserLoginDetails, setSignOutState} from './features/user/userSlice';
import { useEffect } from 'react';


const Header = (props) =>{
    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user)
                history.push('/home')
            }
        })
    }, [userName])

    const handleAuth = () => {
        if(!userName){

        auth
        .signInWithPopup(provider)
        .then((result) => {
            setUser(result.user);
            console.log(result)
        }).catch((error) => {
            alert(error.message);
        })
    }else if (userName ){
        auth.signOut().then(() =>{
            dispatch(setSignOutState())
            history.push('/')
        }).catch((err) => alert(err.message))
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
            })
        )
    }


    return(
        <Nav >
            <Logo>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" alt="Netflix Logo" alt="" />
            </Logo>
            {
                !userName ? (
                    <Login onClick={handleAuth}>Login</Login>
                ) : (
                    <>
                        <SignOut>
                            <UserImg src={userPhoto} alt={userPhoto}/>
                            <DropDown>
                                <span onClick={handleAuth}>Sign Out</span>
                            </DropDown>
                        </SignOut>
                    </>
                )
            }
        </Nav>
    )
}

const Nav = styled.nav `
    position:sticky;
    top:0;
    left:0;
    right:0;
    height:70px;
    background-color:#000;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 30px;
    letter-spacing:16px;
    z-index: 3;
`
const DropDown = styled.div `
    position: absolute;
    top: 48px;
    right: 0px;
    background: #fff;
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 10px;
    text-align:center;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
`

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const Login = styled.a `
    color:#fff;
    padding:4px 16px;
    text-uppercase: uppercase;
    letter-spacing:1.5px;
    border:1px solid red;
    background-color:red;
    border-radius:4px;
    transition: all 0.2s ease 0s;
    cursor:pointer;
    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }
`

const UserImg = styled.img `
    height:100%;
`

const SignOut = styled.div `
   position:relative;
    height:48px;
    width:48px;
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:center;
    ${UserImg}{
        border-radius:50%;
        width:100%;
        height:100%;
    }
    &:hover{
        ${DropDown}{
            opacity:1;
            transition-duration:1s;
        }
    }
`

export default Header;