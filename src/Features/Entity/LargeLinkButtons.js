import GithubButton from "../../Components/SocialMedia/GithubButton";
import YoutubeButton from "../../Components/SocialMedia/YoutubeButton";

export default ({entity}) =>
    <div className="row bg-dark rounded section-hover section-box-shadow align-items-center" style={{margin: "10px"}}>
        <div className="col d-flex justify-content-center" style={{padding: "20px"}}>
            <GithubButton entity={entity}/>
        </div>
        {entity.youtubeChannelId
            ? (
                <div className="col d-flex justify-content-center" style={{padding: "20px"}}>
                    <YoutubeButton entity={entity}/>
                </div>
            ) : ""
        }
    </div>