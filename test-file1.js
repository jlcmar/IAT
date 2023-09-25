define(['pipAPI', 'https://jlcmar.github.io/IAT/test-file2.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Black people', //Will appear in the data.
			title : {
				media : {word : 'Black people'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    //{image : 'black1.jpg'}, 
    			//{image : 'black2.jpg'}, 
    			//{image : 'black3.jpg'}, 
    			//{image : 'black4.jpg'}, 
			{image : 'blind001.png'}, 
			{image : 'blind002.png'}, 
			{image : 'blind003.png'}, 
			{image : 'blind004.png'}, 				
    			{image : 'black5.jpg'}, 
    			{image : 'black6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'White people', //Will appear in the data.
			title : {
				media : {word : 'White people'}, //Name of the category presented in the task.
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

		base_url : {//Where are your images at?
			//image : 'https://baranan.github.io/minno-tasks/images/'
			image : 'https://mstate-my.sharepoint.com/:f:/g/personal/jlc1470_msstate_edu/EkiTMPHCGkZKioYPdD53l58BDQ6iCFE8pwQEL7TfSA38Zg?e=AfaTvO'
		} 
	});
});
