import "./App.css";
import StoreRetrievalUI from "./store_retrieval_UI";
import RepoRetrievalUI from "./repo_retrieval_UI";
import RepoExplorationUI from "./repo_exploration_UI";
import CreateEntityDFUI from "./create_entity_df_UI";
import SaveDatasetUI from "./save_dataset_UI";
import MaterializeUI from "./materialize_UI.js"


function App() {
	return (
		<div className="App">
			<p className="title">FEAST FEATURE STORE EXPLORER</p>
			<p className="subtitle">Retrieve and explore existing Feast feature stores from GitHub.</p>										

			<br></br>
			<br></br>
			<br></br>
			<p className="subtitle">GITHUB REPO CLONING</p>
			<p className="description">Enter the link of the Feast feature repo on GitHub and the target path on the web server.</p>		
			<RepoRetrievalUI/>

			<br></br>
			<br></br>
			<br></br>
			<p className="subtitle">FEATURE STORE RETRIEVAL</p>
			<p className="description">Enter the path of the feature repository relative to the target path.</p>
			<StoreRetrievalUI/>

			<br></br>
			<br></br>
			<br></br>
			<p className="subtitle">FEATURE STORE EXPLORATION</p>
			<p className="description">Get a high-level idea of the contents of the feature store.</p>
			<RepoExplorationUI/>

			<br></br>
			<br></br>
			<br></br>
			<p className="subtitle">ENTITY DATAFRAME CREATION</p>
			<p className="description">Create an entity DataFrame for feature retrieval.</p>
			<CreateEntityDFUI/>

			<br></br>
			<br></br>
			<br></br>
			<p className="subtitle">DATASET SAVING</p>
			<p className="description">Save the selected feature views into a dataset, using the entity DataFrame created earlier.</p>		
			<SaveDatasetUI/>

			<br></br>
			<br></br>
			<br></br>
			<p className="subtitle">FEATURE MATERIALZIATION</p>
			<p className="description">Materialize latest features.</p>
			<MaterializeUI/>			
		</div>
	);
}

export default App;