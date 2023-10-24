define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		fullscreen:false, //Should we show the task in full screen? A Qualtrics-only feature because in the usual Minno, we can go full-screen right at the beginning of the study.
        	isTouch:false, //Set whether the task is on a touch device.
		//Set the canvas of the task
		canvas : {
			maxWidth: 1000,
			Width: 800,
			proportions : 0.7,
			background: '#ffffff',
			borderWidth: 5,
			canvasBackground: '#ffffff',
			borderColor: 'lightblue'
		},
		//When scoring, we will consider the compatible condition the pairing condition that requires response with one key to [category1,attribute1] and the other key to [category2,attribute2]
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
			//stimulusCss : {color:'#31940F','font-size':'1.8em','width':'33%'}
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
    		   	{image : 'Sighted001.png'}, 
    			{image : 'Sighted002.png'}, 
    			{image : 'Sighted003.2.png'}, 
    			{image : 'Sighted004.2.png'}
			], 
			//Stimulus css
			//stimulusCss : {color:'#31940F','font-size':'1.8em','width':'33%'}
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
		},
		finalText : 'Press space to exit the test', 
		finalTouchText : 'Touch the bottom green area to exit the test',
		showDebriefing:true, //Show feedback in the last trial? Relevant only in a Qualtrics IAT because in Qualtrics we cannot access the saved feedback and IAT score later in the survey.
		//Texts for the trials that show the debriefing.
		preDebriefingText : 'Press space to see your result', //Text in the trial that comes before showing the debriefing.
		preDebriefingTouchText : 'Touch the bottom green area to see your result', //Touch version for the text in the trial that comes before showing the debriefing.
		debriefingTextTop : 'Your result:', //Will be shown above the feedback text.
		//ATTENTION: We do not recommend showing participants their results. The IAT is a typical psychological measure so it is not very accurate. 
		//In Project Implicit's website, you can see that we added much text to explain that there is still much unknown about the meaning of these results.
		//We strongly recommend that you provide all these details in the debriefing of the experiment.
		debriefingTextBottom : 'This result is not a definitive assessment of your attitudes. It is provided for educational purposes only.' //Will be shown below the feedback text. 
	});
});
