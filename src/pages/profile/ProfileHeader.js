import Person from '@mui/icons-material/Person'
import Side from '../../assets/Side.png'

const ProfileHeader =({ username })=>{
    return (
        <header>
                <div className="nabBar"> 
                    <div className="iconHedMain">
                        <div className="hed"><h1>Lost in Translate</h1></div>
                        <div className="iconDiv">
                        <img  src={Side} width="130" height={60} onClick={() => Navigater('/profile')}/>
                        <p>{localStorage.getItem("user")}</p>
                        </div>
                    </div>
                </div>
        </header>
    )
}

export default ProfileHeader;