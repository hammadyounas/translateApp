import Person from '@mui/icons-material/Person'

const ProfileHeader =({ username })=>{
    return (
        <header>
                <div className="nabBar"> 
                    <div className="iconHedMain">
                        <div className="hed"><h1>Lost in Translate</h1></div>
                        <div className="iconDiv">
                        <Person onClick={() => Navigater('/profile')} />
                        </div>
                    </div>
                </div>
        </header>
    )
}

export default ProfileHeader;