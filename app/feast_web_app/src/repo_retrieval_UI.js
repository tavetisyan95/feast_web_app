import "./App.css";
import {events} from "./events.js";

function RepoRetrievalUI(props) { 
	return (
		<div className="UI_wrapper">
			<div className="ui_item">
				<fieldset className="fieldset">
					<legend className="legend">GitHub repo URL</legend>
					<div className="input">
						<input id="git_repo_url" type="text" defaultValue="https://github.com/tavetisyan95/feast_web_app_toy_data"></input>
					</div>
					<div className="description">												
						<p>The URL of the GitHub repository that contains the local feature store.</p>
						<p>A sample repository with the expected structure can be found <a href="https://github.com/tavetisyan95/feast_web_app_toy_data" target="blank">here</a>.</p>
					</div>
				</fieldset>
			</div> 

            <div className="ui_item">
				<fieldset className="fieldset">
					<legend className="legend">Target path</legend>
					<div className="input">
						<input id="target_path" type="text" defaultValue="repo"></input>
					</div>
					<div className="description">						
						<p>The path relative to the directory <i>api/git_repos/</i> on the web server that the repo should be cloned to.</p>
						<p>Do not add any slashes or backslashes to the path.</p>
					</div>
				</fieldset>
			</div> 
            
            <div className="ui_item">
                <fieldset className="fieldset">
                    <br></br>
				    <button id="get_repo_button" onClick={(event) => {events.getRepo()}}>Get Repo</button> 
                    <br></br>
                    <br></br>
                    <div className="text" id="repo_response_area">
					    Press the button above to clone the repo from GitHub.
				    </div>
                    <br></br>
                </fieldset>
			</div>	                         
		</div>
  );
}
// {parse_data(props.data)}
export default RepoRetrievalUI;
