define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Blind', //Will appear in the data.
			title : {
				media : {word : 'Blind'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'Blind001.png'}, 
    			{image : 'Blind002.png'}, 
    			{image : 'Blind003.png'}, 
    			{image : 'Blind004.png'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em','width':'33%'}
		},	
		category2 :	{
			name : 'Sighted', //Will appear in the data.
			title : {
				media : {word : 'Sighted'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'Sighted001.png'}, 
    			{image : 'Sighted002.png'}, 
    			{image : 'Sighted003.2.png'}, 
    			{image : 'Sighted004.2.png'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em','width':'33%'}
		},	
		attribute1 :
		{
			name : 'Incompetent',
			title : {
				media : {word : 'Incompetent'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Careless'},
				{word: 'Incompetent'},
				{word: 'Inefficient'},
				{word: 'Unfit'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Competent',
			title : {
				media : {word : 'Competent'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Capable'},
				{word: 'Productive'},
				{word: 'Qualified'},
				{word: 'Skilled'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		base_url : {//Where are your images at?
			image : 'https://www.blind.msstate.edu/sites/www.blind.msstate.edu/files/2023-10/'
		} 
	});
});
