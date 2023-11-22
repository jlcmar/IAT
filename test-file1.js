define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		fullscreen:false, //Should we show the task in full screen? A Qualtrics-only feature because in the usual Minno, we can go full-screen right at the beginning of the study.
        	isTouch:false, //Set whether the task is on a touch device.
		//Set the canvas of the task
		canvas : {
			maxWidth: 1000,
			Width: 858,
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
				css : {color:'#31940F','font-size':'2.2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	{image : 'Blind001.2_0.png'}, 
    			{image : 'Blind002.png'}, 
    			{image : 'Blind003.2.png'}, 
    			{image : 'Blind004.png'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'2.2em','width':'33%'}
		},	
		category2 :	{
			name : 'Sighted', //Will appear in the data.
			title : {
				media : {word : 'Sighted'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2.2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		   	{image : 'Sighted001.png'}, 
    			{image : 'Sighted002.png'}, 
    			{image : 'Sighted003.3.png'}, 
    			{image : 'Sighted004.2.png'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.2em','width':'33%'}
		},	
		attribute1 :
		{
			name : 'Incompetent',
			title : {
				media : {word : 'Incompetent'},
				css : {color:'#0000FF','font-size':'2em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Careless'},
				{word: 'Incompetent'},
				{word: 'Inefficient'},
				{word: 'Unfit'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.5em'}
		},
		attribute2 :
		{
			name : 'Competent',
			title : {
				media : {word : 'Competent'},
				css : {color:'#0000FF','font-size':'2em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Capable'},
				{word: 'Productive'},
				{word: 'Qualified'},
				{word: 'Skilled'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.5em'}
		},
		base_url : {//Where are your images at?
			image : 'https://www.blind.msstate.edu/sites/www.blind.msstate.edu/files/2023-11/'
		},
		//Show a reminder what to do on error, throughout the task
		remindError : true,

		remindErrorText : '<p align="center" style="font-size:"0.8em"; font-family:arial">' +
		'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
		'Press the other key to continue.<p/>',

		remindErrorTextTouch : '<p align="center" style="font-size:"1.4em"; font-family:arial">' +
		'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
		'Touch the other side to continue.<p/>',

		errorCorrection : true, //Should participants correct error responses?
		errorFBDuration : 500, //Duration of error feedback display (relevant only when errorCorrection is false)
		ITIDuration : 250, //Duration between trials.

		fontColor : '#000000', //The default color used for printed messages.
			
		//Text and style for key instructions displayed about the category labels.
		leftKeyText : 'Press "E" for', 
		rightKeyText : 'Press "I" for', 
		keysCss : {'font-size':'1.0em', 'font-family':'courier', color:'#000000'},
		//Text and style for the separator between the top and bottom category labels.
		orText : 'or', 
		orCss : {'font-size':'2em', color:'#000000'},
			
		instWidth : 99, //The width of the instructions stimulus
		
		finalText : 'Press space to exit the test', 
		finalTouchText : 'Touch the bottom green area to exit the test',

		touchMaxStimulusWidth : '50%', 
		touchMaxStimulusHeight : '50%', 
		bottomTouchCss: {}, //Add any CSS value you want for changing the css of the bottom touch area.

		//Instructions text.
		// You can use the following variables and they will be replaced by
		// the name of the categories and the block's number variables:
		// leftCategory, rightCategory, leftAttribute and rightAttribute, blockNum, nBlocks.
		// Notice that this is HTML text.
		instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'Put a left finger on the <b>E</b> key for items that belong to the category <font color="#0000ff">leftAttribute.</font>' +
			'<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color="#0000ff">rightAttribute</font>.<br/><br/>' +
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
			'Press the other key to continue.<br/>' +
			'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
		instAttributePracticeTouch: [
			'<div>',
				'<p align="center">',
					'<u>Part blockNum of nBlocks</u>',
				'</p>',
				'<p align="left" style="margin-left:5px">',
					'<br/>',
					'Put a left finger over the the <b>left</b> green area for items that belong to the category <font color="#0000ff">leftAttribute</font>.<br/>',
					'Put a right finger over the <b>right</b> green area for items that belong to the category <font color="#0000ff">rightAttribute</font>.<br/>',
					'Items will appear one at a time.<br/>',
					'<br/>',
					'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.',
				'</p>',
				'<p align="center">Touch the <b>lower </b> green area to start.</p>',
			'</div>'
		].join('\n'),

		instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'Put a left finger on the <b>E</b> key for items that belong to the category <font color="#31940F">leftCategory</font>. ' +
			'<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color="#31940F">rightCategory</font>.<br/>' +
			'Items will appear one at a time.<br/><br/>' +
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
			'Press the other key to continue.<br/>' +
			'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
		instCategoriesPracticeTouch: [
			'<div>',
				'<p align="center">',
					'<u>Part blockNum of nBlocks</u>',
				'</p>',
				'<p align="left" style="margin-left:5px">',
					'<br/>',
					'Put a left finger over the <b>left</b> green area for items that belong to the category <font color="#31940F">leftCategory</font>.<br/>',
					'Put a right finger over the <b>right</b> green area for items that belong to the category <font color="#31940F">rightCategory</font>.<br/>',
					'Items will appear one at a time.<br/>',
					'<br/>',
					'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.',
				'</p>',
				'<p align="center">Touch the <b>lower </b> green area to start.</p>',
			'</div>'
		].join('\n'),

		instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'Use the <b>E</b> key for <font color="#31940F">leftCategory</font> and for <font color="#0000ff">leftAttribute</font>.<br/>' +
			'Use the <b>I</b> key for <font color="#31940F">rightCategory</font> and for  <font color="#0000ff">rightAttribute</font>.<br/>' +
			'Each item belongs to only one category.<br/><br/>' +
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
			'Press the other key to continue.<br/>' + 
			'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
		instFirstCombinedTouch:[
			'<div>',
				'<p align="center">',
					'<u>Part blockNum of nBlocks</u>',
				'</p>',
				'<br/>',
				'<br/>',
				'<p align="left" style="margin-left:5px">',
					'Put a left finger over the <b>left</b> green area for <font color="#31940F">leftCategory</font> items and for <font color="#0000ff">leftAttribute</font>.</br>',
					'Put a right finger over the <b>right</b> green area for <font color="#31940F">rightCategory</font> items and for <font color="#0000ff">rightAttribute</font>.</br>',
						'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.</br>',
					'</p>',
					'<p align="center">Touch the <b>lower </b> green area to start.</p>',
			'</div>'
		].join('\n'),

		instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'This is the same as the previous part.<br/>' +
			'Use the <b>E</b> key for <font color="#31940F">leftCategory</font> and for <font color="#0000ff">leftAttribute</font>.<br/>' +
			'Use the <b>I</b> key for <font color="#31940F">rightCategory</font> and for  <font color="#0000ff">rightAttribute</font>.<br/>' +
			'Each item belongs to only one category.<br/><br/>' +
			'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
		instSecondCombinedTouch:[
			'<div>',
				'<p align="center"><u>Part blockNum of nBlocks</u></p>',
				'<br/>',
				'<br/>',

				'<p align="left" style="margin-left:5px">',
					'Put a left finger over the <b>left</b> green area for <font color="#31940F">leftCategory</font> items and for <font color="#0000ff">leftAttribute</font>.<br/>',
					'Put a right finger over the <b>right</b> green area for <font color="#31940F">rightCategory</font> items and for <font color="#0000ff">rightAttribute</font>.<br/>',
					'<br/>',
					'<u>Go as fast as you can</u> while being accurate.<br/>',
				'</p>',
				'<p align="center">Touch the <b>lower </b> green area to start.</p>',
			'</div>'
		].join('\n'),

		instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
			'<b>Watch out, the labels have changed position!</b><br/>' +
			'Put the left finger on the <b>E</b> key for <font color="#31940F">leftCategory</font>.<br/>' +
			'Put the right finger on the <b>I</b> key for <font color="#31940F">rightCategory</font>.<br/><br/>' +
			'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
		instSwitchCategoriesTouch: [
			'<div>',
				'<p align="center">',
					'<u>Part blockNum of nBlocks</u>',
				'</p>',
				'<p align="left" style="margin-left:5px">',
					'<br/>',
					'Watch out, the labels have changed position!<br/>',
						'Put a left finger over the <b>left</b> green area for <font color="#31940F">leftCategory</font> items.<br/>',
						'Put a right finger over the <b>right</b> green area for <font color="#31940F">rightCategory</font> items.<br/>',
						'Items will appear one at a time.',
						'<br/>',
						'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. Touch the other side. <u>Go as fast as you can</u> while being accurate.<br/>',
					'</p>',
					'<p align="center">Touch the <b>lower </b> green area to start.</p>',
			'</div>'
		].join('\n'),

		instThirdCombined : 'instFirstCombined', //this means that we're going to use the instFirstCombined property for the third combined block as well. You can change that.
		instFourthCombined : 'instSecondCombined', //this means that we're going to use the instSecondCombined property for the fourth combined block as well. You can change that.
		instThirdCombinedTouch : 'instFirstCombined', //this means that we're going to use the instFirstCombined property for the third combined block as well. You can change that.
		instFourthCombinedTouch : 'instSecondCombined', //this means that we're going to use the instSecondCombined property for the fourth combined block as well. You can change that.
		
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
