define(['pipAPI', 'https://jlcmar.github.io/IAT/test-file2.js'], function(APIConstructor, iatExtension){
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
    		    {image : 'black1.jpg'}, 
    			{image : 'black2.jpg'}, 
    			{image : 'black3.jpg'}, 
    			{image : 'black4.jpg'}, 
			{image : 'black5.jpg'}, 
    			{image : 'black6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Sighted', //Will appear in the data.
			title : {
				media : {word : 'Sighted'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'yf1.jpg'}, 
    			{image : 'yf4.jpg'}, 
    			{image : 'yf5.jpg'}, 
    			{image : 'ym2.jpg'}, 
    			{image : 'ym3.jpg'}, 
    			{image : 'ym5.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
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
				{word: 'awful'},
				{word: 'failure'},
				{word: 'agony'},
				{word: 'hurt'},
				{word: 'horrible'},
				{word: 'terrible'},
				{word: 'nasty'},
				{word: 'evil'}
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
				{word: 'laughter'},
				{word: 'happy'},
				{word: 'glorious'},
				{word: 'joy'},
				{word: 'wonderful'},
				{word: 'peace'},
				{word: 'pleasure'},
				{word: 'love'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		} 
	});
});
