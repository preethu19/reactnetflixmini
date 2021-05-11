import React from 'react';
import './App.css';
import Cards from './Cards';
import Sdata from './Sdata';
// import Netflix from './Netflix';
// import Amazon from './Amazon';

// const choice='amazon';
// <h1 className="heading__style">Choice of user</h1>
// {choice==='netflix'? <Netflix/>:<Amazon/>}

function App(){
	return(
		<div>
			<h1 className="heading__style">List of top 5 Netflix series in 2020</h1>

			{Sdata.map((val)=>{
			 return(
			 	<Cards 
					key={val.id}
					imgsrc={val.imgsrc} 
					title={val.title}
					sname={val.sname} 
					link={val.link}
				/>
			 );
			}) }
			
		</div>
)
};

export default App; 