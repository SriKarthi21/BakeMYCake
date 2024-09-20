// import logo from '../cakes/logo.jpg'
import { Link } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from  "./AuthContext";
export const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;
function Header() {
    const { isLoggedIn, logout } = useContext(AuthContext);
   const navigate=useNavigate();
    const navigatToNotesView = () => {
        logout()
        navigate("/");
      };
    return (
<div className="header">
    <div className="headerName">
<img src="/cakes/logo.jpg" className="headerLogo" alt="header logo" />
        <h1>Bake My Cake</h1>
            </div>
            <div><Link to={"/"} >
    <IconButton >
        <HomeIcon color='primary' fontSize="large"/>
    </IconButton>
</Link>
{isLoggedIn?(
<Link to="/" onClick={navigatToNotesView}><LogoutIcon/></Link>     

):(
    <Link to="/login"><LoginIcon/></Link>  

)}

</div>

 </div>


    )
}

export default Header;