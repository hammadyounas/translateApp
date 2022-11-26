import Person from '@mui/icons-material/Person'
import { useNavigate } from 'react-router-dom'
import Side from '../../assets/Side.png'

const ProfileHeader =({ username })=>{
  const Navigater = useNavigate()

    return (
        <header>
                <div className="nabBar"> 
                    <div className="iconHedMain">
                        <div className="hed"><h1 onClick={() => Navigater("/translations")}>Lost in Translate</h1></div>
                        <div className="mainDiv">
                        <p>{localStorage.getItem("user")}</p>
                        <img  
                src={"https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"}
                         width="auto" height={60}/>
                        </div>
                    </div>
                </div>
        </header>
    )
}

export default ProfileHeader;