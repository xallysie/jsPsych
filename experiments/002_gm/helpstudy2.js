/* **CHANGEME** paste end-of-survey link to Prolific */
function onUploadSuccess(){
    var jspsych_content = document.getElementById("jspsych-content");
    jspsych_content.innerHTML = 'Your data is successfully uploaded!<br>Please click the link below to return to Prolific and receive credit for your participation.<br><br><a href="https://app.prolific.co/submissions/complete?cc=C1MZPIHY"><b>RECEIVE PAYMENT ON PROLIFIC</b></a>'
  };

/* initialize jsPsych */
var jsPsych = initJsPsych({
    default_iti: 100,
    show_progress_bar: true,
    message_progress_bar: '',
    /* uncomment to use div styles*/
    //display_element: 'display_stage',
    /* uncomment below to debug test data collection */
    //on_finish: function() {
    //    jsPsych.data.displayData();
    //}
    /* The code below sends experimental data to jsPsychSheet by calling
    // jsPsychSheet.uploadData(<webappURL>, jsPsych.data.get().csv()).
    // Here <webappURL> is the URL copied from deploying the Google Apps Script
    /**CHANGEME**/
    on_finish: function () {
        /* record time that participant finished survey */
        var Date_end_time = new Date().toLocaleString('en-US');
        /* add to participant data */
        jsPsych.data.addProperties({
            Date_End_Time: Date_end_time,
        });
        url = scriptserverurl;
        jsPsychSheet.uploadData(url, jsPsych.data.get().csv())
    }
});

/**CHANGEME**/
/* randomly select 1 of 4 google scripts to call to upload participant data to google sheets */
var serverNumber = Math.floor(Math.random()*4)+1;
if (serverNumber==1){
    var scriptserverurl = "https://script.google.com/macros/s/AKfycbys6xQuvgQpoJO7RPHo_KARvZK12miGuxeHz8yPQZHYb9MZWqU_cDPNl84ykU6XOjL2SQ/exec";
} else if (serverNumber==2){
    var scriptserverurl = "https://script.google.com/macros/s/AKfycbzVI0xwgm4hH_FbIyOKQQvFypsfRuhztyRP2B2uO0W9qJFimdBGiswHXX-S4p7Ddwgx/exec";
} else if (serverNumber==3){
    var scriptserverurl = "https://script.google.com/macros/s/AKfycbzPqee8pAHgK9EQVS_UyrU4ZMkH-u5kmAXiE7rZgAefMJ7uPDXx47umnJ-MKplP2NjwKA/exec";
} else {
    var scriptserverurl = "https://script.google.com/macros/s/AKfycbz2ZqPLPuLYHaFLpwZZwpbkLMmQH4ctgRiujsdrztY5dFOK0vRIkejVUk8tPQMQdt79Bg/exec";
};

/* function to randomly pick one item from the array */
function randomSelect(array){
	// this function will randomly select one item in the array of vignettes/names/x that need to be randomized
	var randomIndex = Math.floor(Math.random()*array.length);
	// it will then return the item it has selected and remove it from the array so no vignette/name/x is shown twice
	return array.splice(randomIndex, 1)[0]; 
};

/* create timeline */
var timeline = [];

/* read url parameters */
var urlParams = new URL(window.location.toLocaleString()).searchParams;
var prolificID = urlParams.get('PROLIFIC_PID'); // get prolific ID
var studyID = urlParams.get('STUDY_ID'); // get study ID
var sessionID = urlParams.get('SESSION_ID'); // get session ID
var Date_start_time = new Date().toLocaleString('en-US');
/* add participant-level data to all trials */
jsPsych.data.addProperties({
    Prolific_ID: prolificID,
    Date_Start_Time: Date_start_time,
});
console.log(Date_start_time);

/* Enter fullscreen mode */
var Enter_Fullscreen = {
    type: jsPsychFullscreen,
    message: '<p style="font-weight:bold;">Welcome to the study. The experiment will switch to fullscreen mode when you press the button below.</p>',
    button_label: 'NEXT',
    fullscreen_mode: true
}
timeline.push(Enter_Fullscreen);

/* Consent form */
var Consent = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = [
            '<p style="font-size:28px; font-weight:bold; text-align:center;">Study on Social Judgment</p>'+
            'Thank you for expressing interest in our study on social judgment.<br><br>'+
            'Our research explores how people think and feel about others. Your informed consent is being sought for research. Participation in the research is voluntary.<br><br>'+
            '<b><u>The purpose of the research:</u></b><br>'+
            'You are invited to take part in a research study designed to examine how people make social judgments and decisions. You are being asked to participate in this study because we are interested in these processes in a wide variety of people. The purpose of this study is to advance our understanding of how individual differences in cognitive functioning contribute to social behavior.<br><br>'+
            '<b><u>The expected duration of your participation:</u></b><br>'+
            'This study will take approximately <b>6 minutes.</b> You will be given an hour to complete the study. <b>Please take your time and do not rush through the questions.</b><br><br>'+
            '<b><u>The procedures that the subject will be asked to follow in the research:</u></b><br>'+
            'If you agree to participate, you will be asked to make judgments about other people. Afterwards, you will be asked questions related to your reactions to the tasks, as well as some personality traits and background variables that may affect information processing in these tasks. You may withdraw from this study at any point by closing out of the browser window. After completing the study, you will be compensated for your time by a member of the study staff.<br><br>'+
            '<b><u>The reasonably forseeable risks or discomforts to you as a result of participation:</u></b><br>'+
            'The activities in the study carry no risk as they only involve operating a desktop computer and reading about scenarios and issues similar to those one is likely to encounter in daily life. You are free to withdraw from the study for any reason at any time.<br><br>'+
            '<b><u>The benefits to you or to others:</u></b><br>'+
            'Although this study will not benefit you personally, we hope that our results will add to knowledge about how people make decisions about positive and negative outcomes for themselves and for other people.<br><br>'+
            '<b><u>Eligibility</u></b><br>'+
            'In order to be eligible to participate in this study, you must be 18 years of age or older.<br><br>'+
            '<b><u>Confidentiality:</u></b><br>'+
            'All of your responses will be anonymous. Only the researchers involved in this study and those responsible for research oversight will have access to any information that could indirectly identify you, such as your worker ID. Your responses, which do not contain any identifiable information, could be used for future research studies or distributed to another investigator for future research studies, or shared as part of publication of the research study without additional informed consent from you. Data will be shared such that it cannot, in any way, be traced back to you.<br><br>'+
            '<b><u>Compensation:</u></b><br>'+
            'You will be paid $1.20 for your participation in this study (approximately 6 minutes).<br><br>'+
            '<b><u>Who to contact with questions:</u></b><br>'+
            'Principal investigator: Molly Crockett; mc5121@princeton.edu, crockett.laboratory@gmail.com<br><br>If you have questions regarding your rights as a research subject, or if problems arise which you do not feel you can discuss with the Investigator, please contact the Institutional Review Board at:<br><br>Phone: (609) 258-8542<br>Email: irb@princeton.edu<br><br>'+
            '<b><u>Summary:</u></b><br>'+
            'I understand the information that was presented, and that:<br>My participation is voluntary.<br>Refusal to participate will involve no penalty or loss of benefits to which I am otherwise entitled.<br>I may discontinue participation at any time without penalty or loss of benefits.<br>I do not waive any legal rights or release Princeton University or its agents from liability for negligence. I hereby give my consent to be the subject of the research.<br>'+
            '<p style="font-weight:bold;">Please DO NOT use the back or reload buttons on your browser.<br><br>To help us make sense of our findings, please respond to these questions as truthfully as you can. After the study, you will have an opportunity to give feedback on your experience.</p>'+
            '<p style="text-align:center;">Pressing the button below indicates your consent to participate.</p>' 
        ];
        return text;
    },
    choices: ['BEGIN STUDY'],
    data: {WhatWasRating:'CONSENT'},
    css_classes: ['longtext'],
    on_finish: function(stimulus){
        /* google scripts has a problem saving to .csv because of the long consent text, so this replaces it with a placeholder */
        jsPsych.data.get().values()[1].stimulus = "CONSENT_FORM_TEXT"; 
      }
}
timeline.push(Consent);

/* Attention Check */
var AttentionCheck = {
    type: jsPsychHtmlButtonResponse,
    stimulus: ['Beep boop. To check if you are a bot, please select the sound that a cat would make.'],
    choices: ['1-Arf arf', '2', '3', '4-Beep boop', '5', '6', '7-Meow meow'],
    data: {WhatWasRating: "attentioncheck"},
    css_classes: ['trial'],
    on_finish: function(){
        /* record result of bot test */
        if (jsPsych.data.getLastTrialData().values()[0].response == 6){
            jsPsych.data.addProperties({botcheck_PF: 0});
        } else {
            jsPsych.data.addProperties({botcheck_PF: 1});
            window.location = "https://app.prolific.co/submissions/complete?cc=CF6HORHZ";
        }
    }
};
timeline.push(AttentionCheck);

/* Setup */
/* names */
var names0 = ["Laura", "Heather", "Christine", "Hannah"];
var names1 = ["Scott", "Richard", "Timothy", "Tyler"];

/* randomize vignette vars */
//**CHANGEME**//
var vignettes_k = 4; // show 4 vignettes to participants
var actorgends = jsPsych.randomization.repeat([0,1], vignettes_k/2); // 0 = f
var actortheirs = actorgends.map(function(gen) {return gen === 0 ? "her" : "his";});
var actorpronouns = actorgends.map(function(gen) {return gen === 0 ? "she" : "he";});
var reltargets = jsPsych.randomization.repeat([0,1], vignettes_k/2); // 0 = n
var targetnames = reltargets.map(function(tar) {return tar === 0 ? "neighbor" : "colleague";});
var actions = jsPsych.randomization.repeat([0,1], vignettes_k/2); // 0 = dh
var domain = jsPsych.randomization.repeat([0,1], vignettes_k/2); // 0 = e

/* compile vignette key-value pairs */
var vignettes = [];
for (var k = 0; k < vignettes_k; k++) {
    /* randomly pick names */
    if (actorgends[k]==0) {
        var actorname = randomSelect(names0);
    } else if (actorgends[k]==1) {
        var actorname = randomSelect(names1);
    };
    /* select vignette based on randomized vars */
    //**CHANGEME**//
    if (domain[k]==0 && reltargets[k]==0 && actions[k]==0) { // emotional, neighbor, don't help
        var thisvignette = jsPsych.randomization.sampleWithoutReplacement([
            {scenario: "EmoNeigNOHelp_1", vignette: "It's 7:00 PM, and "+actorname+" has just gotten home from a long day of work. While walking up "+actortheirs[k]+" driveway, "+actorpronouns[k]+" runs into "+actortheirs[k]+" neighbor who "+actorpronouns[k]+" notices seems upset. "+actorname+" asks "+actortheirs[k]+" neighbor if they are okay, and "+actortheirs[k]+" neighbor confides that they are feeling worried about a difficult situation that has just come up. "+actorname+" tells "+actortheirs[k]+" neighbor that "+actorpronouns[k]+" is sorry to hear that before heading inside."},
            {scenario: "EmoNeigNOHelp_2", vignette: actorname+" is walking "+actortheirs[k]+" usual route around "+actortheirs[k]+" neighborhood when "+actorpronouns[k]+" sees "+actortheirs[k]+" neighbor. As "+actortheirs[k]+" neighbor comes closer, "+actorname+" notices that "+actortheirs[k]+" neighbor is visibly upset. "+actorname+" greets "+actortheirs[k]+" neighbor and asks how they are doing. The neighbor reveals that they have just received some bad personal news and feel quite shaken. "+actorname+" tells "+actortheirs[k]+" neighbor that "+actorpronouns[k]+" is sorry to hear that before continuing on "+actortheirs[k]+" walk."},
        ], 1);
    } else if (domain[k]==0 && reltargets[k]==0 && actions[k]==1) { // emotional, neighbor, help
        var thisvignette = jsPsych.randomization.sampleWithoutReplacement([
            {scenario: "EmoNeigHelp_1", vignette: "It's 7:00 PM, and "+actorname+" has just gotten home from a long day of work. While walking up "+actortheirs[k]+" driveway, "+actorpronouns[k]+" runs into "+actortheirs[k]+" neighbor who "+actorpronouns[k]+" notices seems upset. "+actorname+" asks "+actortheirs[k]+" neighbor if they are okay, and "+actortheirs[k]+" neighbor confides that they are feeling worried about a difficult situation that has just come up. "+actorname+" stays outside for some time to help "+actortheirs[k]+" neighbor talk through and process the situation."},
            {scenario: "EmoNeigHelp_2", vignette: actorname+" is walking "+actortheirs[k]+" usual route around "+actortheirs[k]+" neighborhood when "+actorpronouns[k]+" sees "+actortheirs[k]+" neighbor. As "+actortheirs[k]+" neighbor comes closer, "+actorname+" notices that "+actortheirs[k]+" neighbor is visibly upset. "+actorname+" greets "+actortheirs[k]+" neighbor and asks how they are doing. The neighbor reveals that they have just received some bad personal news and feel quite shaken. "+actorname+" walks with "+actortheirs[k]+" neighbor for some time to offer them support."},
        ], 1);
    } else if (domain[k]==0 && reltargets[k]==1 && actions[k]==0) { // emotional, colleague, don't help
        var thisvignette = jsPsych.randomization.sampleWithoutReplacement([
            {scenario: "EmoCollNOHelp_1", vignette: "It's 5:30 PM, and "+actorname+" is getting ready to leave "+actortheirs[k]+" office to head home for the day. While walking towards the exit, "+actorpronouns[k]+" runs into a colleague who "+actorpronouns[k]+" notices seems upset. "+actorname+" asks "+actortheirs[k]+" colleague if they are okay, and "+actortheirs[k]+" colleague confides that they are feeling worried about a difficult situation that has just come up. "+actorname+" wishes them a quick resolution to their problem before heading out the door."},
            {scenario: "EmoCollNOHelp_2", vignette: actorname+" is on "+actortheirs[k]+" way to grab lunch from the office cafeteria when "+actorpronouns[k]+" notices "+actortheirs[k]+" colleague sitting alone at a table. "+actorname+" walks over to greet "+actortheirs[k]+" colleague, and notices that they seem visibly worried. "+actorname+" asks "+actortheirs[k]+" colleague how they are doing, and "+actortheirs[k]+" colleague mentions that they are stressed out about a complicated work situation. "+actorname+" apologizes to "+actortheirs[k]+" colleague, grabs "+actortheirs[k]+" lunch, and heads back to "+actortheirs[k]+" desk."},
        ], 1);
    } else if (domain[k]==0 && reltargets[k]==1 && actions[k]==1) { // emotional, colleague, help
        var thisvignette = jsPsych.randomization.sampleWithoutReplacement([
            {scenario: "EmoCollHelp_1", vignette: "It's 5:30 PM, and "+actorname+" is getting ready to leave "+actortheirs[k]+" office to head home for the day. While walking towards the exit, "+actorpronouns[k]+" runs into a colleague who "+actorpronouns[k]+" notices seems upset. "+actorname+" asks "+actortheirs[k]+" colleague if they are okay, and "+actortheirs[k]+" colleague confides that they are feeling worried about a difficult situation that has just come up. "+actorname+" stays after work for some time to help "+actortheirs[k]+" colleague talk through and process the situation."},
            {scenario: "EmoCollHelp_2", vignette: actorname+" is on "+actortheirs[k]+" way to grab lunch from the office cafeteria when "+actorpronouns[k]+" notices "+actortheirs[k]+" colleague sitting alone at a table. "+actorname+" walks over to greet "+actortheirs[k]+" colleague, and notices that they seem visibly worried. "+actorname+" asks "+actortheirs[k]+" colleague how they are doing, and "+actortheirs[k]+" colleague mentions that they are stressed out about a complicated work situation. "+actorname+" grabs "+actortheirs[k]+" lunch, sits down with "+actortheirs[k]+" colleague, and spends some time to discuss the situation further."},
        ], 1);
    } else if (domain[k]==1 && reltargets[k]==0 && actions[k]==0) { // mechanical, neighbor, don't help
        var thisvignette = jsPsych.randomization.sampleWithoutReplacement([
            {scenario: "MecNeigNOHelp_1", vignette: actorname+" is coming home after a long day at work. As "+actorpronouns[k]+" gets out of the car, "+actorpronouns[k]+" notices that "+actortheirs[k]+" neighbor is standing outside their house pacing while texting on their phone. "+actorname+" asks "+actortheirs[k]+" neighbor what happened, and "+actortheirs[k]+" neighbor replies that the pipe in their kitchen sink is leaking. "+actorname+" tells "+actortheirs[k]+" neighbor that "+actorpronouns[k]+" hopes the issue is resolved soon before heading inside."},
            {scenario: "MecNeigNOHelp_2", vignette: actorname+" is leaving "+actortheirs[k]+" house to meet a friend for lunch on the weekend. As "+actorpronouns[k]+" walks down "+actortheirs[k]+" driveway, "+actorpronouns[k]+" notices that "+actortheirs[k]+" neighbor is standing by their car with a car jack and spare tire at their feet while frowning at their phone. "+actorname+" asks "+actortheirs[k]+" neighbor what happened, and "+actortheirs[k]+" neighbor replies that they have a flat tire and are watching a video explaining how to change it. "+actorname+" wishes "+actortheirs[k]+" neighbor luck before getting in "+actortheirs[k]+" car and driving away."},
        ], 1);
    } else if (domain[k]==1 && reltargets[k]==0 && actions[k]==1) { // mechanical, neighbor, help
        var thisvignette = jsPsych.randomization.sampleWithoutReplacement([
            {scenario: "MecNeigHelp_1", vignette: actorname+" is coming home after a long day at work. As "+actorpronouns[k]+" gets out of the car, "+actorpronouns[k]+" notices that "+actortheirs[k]+" neighbor is standing outside their house pacing while texting on their phone. "+actorname+" asks "+actortheirs[k]+" neighbor what happened, and "+actortheirs[k]+" neighbor replies that the pipe in their kitchen sink is leaking. "+actorname+" stays for some time to help "+actortheirs[k]+" neighbor fix the pipe."},
            {scenario: "MecNeigHelp_2", vignette: actorname+" is leaving "+actortheirs[k]+" house to meet a friend for lunch on the weekend. As "+actorpronouns[k]+" walks down "+actortheirs[k]+" driveway, "+actorpronouns[k]+" notices that "+actortheirs[k]+" neighbor is standing by their car with a car jack and spare tire at their feet while frowning at their phone. "+actorname+" asks "+actortheirs[k]+" neighbor what happened, and "+actortheirs[k]+" neighbor replies that they have a flat tire and are watching a video explaining how to change it. "+actorname+" stays to help "+actortheirs[k]+" neighbor change their tire."},
        ], 1);
    } else if (domain[k]==1 && reltargets[k]==1 && actions[k]==0) { // mechanical, colleague, don't help
        var thisvignette = jsPsych.randomization.sampleWithoutReplacement([
            {scenario: "MecCollNOHelp_1", vignette: actorname+" is heading out after a long day at work. On "+actortheirs[k]+" way to "+actortheirs[k]+" car in the garage, "+actorpronouns[k]+" walks by "+actortheirs[k]+" colleague who is tinkering under the hood of their car. "+actorname+" asks "+actortheirs[k]+" colleague what happened, and "+actortheirs[k]+" colleague replies that they are having some car trouble and that their car won't start. "+actorname+" tells "+actortheirs[k]+" colleague that "+actorpronouns[k]+" hopes they are able to get home soon before walking to "+actortheirs[k]+" car."},
            {scenario: "MecCollNOHelp_2", vignette: actorname+" is on "+actortheirs[k]+" way to a team meeting in the conference room when "+actorpronouns[k]+" finds "+actortheirs[k]+" colleague, who is supposed to present to the team today, sitting outside the conference room frantically pressing keys on their laptop. "+actorname+" asks "+actortheirs[k]+" colleague if everything is okay, and "+actortheirs[k]+" colleague replies that they are having some technical issues with their computer. "+actorname+" suggests "+actortheirs[k]+" colleague restart their computer before "+actorpronouns[k]+" heads into the conference room."},
        ], 1);
    } else if (domain[k]==1 && reltargets[k]==1 && actions[k]==1) { // mechanical, colleague, help
        var thisvignette = jsPsych.randomization.sampleWithoutReplacement([
            {scenario: "MecCollHelp_1", vignette: actorname+" is heading out after a long day at work. On "+actortheirs[k]+" way to "+actortheirs[k]+" car in the garage, "+actorpronouns[k]+" walks by "+actortheirs[k]+" colleague who is tinkering under the hood of their car. "+actorname+" asks "+actortheirs[k]+" colleague what happened, and "+actortheirs[k]+" colleague replies that they are having some car trouble and that their car won't start. "+actorname+" stays for some time to help "+actortheirs[k]+" colleague get their car working again."},
            {scenario: "MecCollHelp_2", vignette: actorname+" is on "+actortheirs[k]+" way to a team meeting in the conference room when "+actorpronouns[k]+" finds "+actortheirs[k]+" colleague, who is supposed to present to the team today, sitting outside the conference room frantically pressing keys on their laptop. "+actorname+" asks "+actortheirs[k]+" colleague if everything is okay, and "+actortheirs[k]+" colleague replies that they are having some technical issues with their computer. "+actorname+" sits with "+actortheirs[k]+" colleague to try and troubleshoot the issue."},
        ], 1);
    }
    var vignette_var = {
        "actorGen": actorgends[k],
        "actorPronoun": actorpronouns[k],
        "actorTheir": actortheirs[k],
        "actorName": actorname,
        "relTarget": reltargets[k],
        "targetName": targetnames[k],
        "NoHelp_Help": actions[k],
        "domain_EmoMec": domain[k],
        "scenarioIndex": thisvignette[0].scenario,
        "scenarioText": thisvignette[0].vignette,
    };
    vignettes.push(vignette_var);
}

/* instructions */
var Vignette_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'Thank you for agreeing to participate in this study!<br><br>On the following pages, you will read a few imaginary scenarios.<br><br>You will be asked to form an impression of the people involved.<br><br>Please do your best to give your honest evaluation of the people involved.',
    choices: ['NEXT'],
    data: {WhatWasRating:'INSTRUCTIONS'},
    css_classes: ['instructions'],
    post_trial_gap: 100
};
timeline.push(Vignette_instructions);

/* code blocks of vignettes and rating trials */

for (var k = 0; k < vignettes_k; k++) {
    if (vignettes[k].NoHelp_Help==0){ //if actor didn't help
        /* create dvs and rating tasks */
        var Rating_qs_nohelp = [ // dvs
        {question: "How much blame or praise does "+vignettes[k].actorName+" deserve for "+vignettes[k].actorTheir+" behavior?", WhatWasRating:"BlamePraise", sliderlabel:['A lot of blame','Neutral','A lot of praise']},
        {question: "How bad do you think "+vignettes[k].actorName+" felt for not helping "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"?", WhatWasRating:"HowBadActorFelt", sliderlabel:['Not at all bad','Extremely bad']},
        {question: "How much time do you think "+vignettes[k].actorName+" saved by not helping "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"?", WhatWasRating:"Cost_Time", sliderlabel:['<1 minute','1 hour','2 hours','>3 hours']},
        {question: "How tired do you think "+vignettes[k].actorName+" would feel if "+vignettes[k].actorPronoun+" had helped "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"?", WhatWasRating:"Cost_Tired", sliderlabel:['Not at all tired','Extremely tired']},
        {question: "How helpful do you think "+vignettes[k].actorName+" could have been to "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"?", WhatWasRating:"Helpful", sliderlabel:['Not at all helpful','Extremely helpful']},
        {question: "How effective do you think "+vignettes[k].actorName+" would have been at helping "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"?", WhatWasRating:"Effective", sliderlabel:['Not at all effective','Extremely effective']},
        {question: "How much would the "+vignettes[k].targetName+" have appreciated "+vignettes[k].actorName+"'s help?", WhatWasRating:"Appreciate", sliderlabel:['Not at all','Extremely']},
        {question: "How negatively did the "+vignettes[k].targetName+" feel toward "+vignettes[k].actorName+" after not receiving "+vignettes[k].actorTheir+" help?", WhatWasRating:"HowNegativeTargetFelt", sliderlabel:['Not at all negative','Extremely negative']},
        {question: "How much did the "+vignettes[k].targetName+" expect "+vignettes[k].actorName+" to help?", WhatWasRating:"ExpectationtoHelp", sliderlabel:['Not at all','Extremely']},
        {question: "How close do you think "+vignettes[k].actorName+" and "+vignettes[k].actorTheir+" "+vignettes[k].targetName+" are?", WhatWasRating:"Closeness", sliderlabel:['Not at all close','Extremely close']},
        {question: "How did this behavior change "+vignettes[k].actorName+" and "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"'s relationship?", WhatWasRating:"RelationChange", sliderlabel:['No change at all','Greatly weakened']},
        {question: "How obligated was "+vignettes[k].actorName+" to help "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"?", WhatWasRating:"Obligation", sliderlabel:['Not at all obligated','Extremely obligated']},
        ];    
        /* merge the properties from vignettes[k] with the rating questions so we can input them as timeline variables */
        var thisVignette_timelinevars = Rating_qs_nohelp;
        for (var i = 0; i < Rating_qs_nohelp.length; i++) {
            thisVignette_timelinevars[i].actorGen = vignettes[k].actorGen;
            thisVignette_timelinevars[i].actorName = vignettes[k].actorName;
            thisVignette_timelinevars[i].actorPronoun = vignettes[k].actorPronoun;
            thisVignette_timelinevars[i].actorTheir = vignettes[k].actorTheir;
            thisVignette_timelinevars[i].domain_EmoMec = vignettes[k].domain_EmoMec;
            thisVignette_timelinevars[i].NoHelp_Help = vignettes[k].NoHelp_Help;
            thisVignette_timelinevars[i].relTarget = vignettes[k].relTarget;
            thisVignette_timelinevars[i].targetName = vignettes[k].targetName;
            thisVignette_timelinevars[i].scenarioIndex = vignettes[k].scenarioIndex;
            thisVignette_timelinevars[i].scenarioText = vignettes[k].scenarioText;
          }
    } else if (vignettes[k].NoHelp_Help==1){ //if actor helped
        /* create dvs and rating tasks */
        var Rating_qs_help = [ // dvs
        {question: "How much blame or praise does "+vignettes[k].actorName+" deserve for "+vignettes[k].actorTheir+" behavior?", WhatWasRating:"BlamePraise", sliderlabel:['A lot of blame','Neutral','A lot of praise']},
        {question: "How good do you think "+vignettes[k].actorName+" felt for helping "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"?", WhatWasRating:"HowGoodActorFelt", sliderlabel:['Not at all good','Extremely good']},
        {question: "How much time do you think "+vignettes[k].actorName+" spent helping "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"?", WhatWasRating:"Cost_Time", sliderlabel:['<1 minute','1 hour','2 hours','>3 hours']},
        {question: "How tired do you think "+vignettes[k].actorName+" felt after helping "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"?", WhatWasRating:"Cost_Tired", sliderlabel:['Not at all tired','Extremely tired']},
        {question: "How helpful do you think "+vignettes[k].actorName+" was to "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"?", WhatWasRating:"Helpful", sliderlabel:['Not at all helpful','Extremely helpful']},
        {question: "How effective do you think "+vignettes[k].actorName+" was at helping "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"?", WhatWasRating:"Effective", sliderlabel:['Not at all effective','Extremely effective']},
        {question: "How much did the "+vignettes[k].targetName+" appreciate "+vignettes[k].actorName+"'s help?", WhatWasRating:"Appreciate", sliderlabel:['Not at all','Extremely']},
        {question: "How positively did the "+vignettes[k].targetName+" feel toward "+vignettes[k].actorName+" after receiving "+vignettes[k].actorTheir+" help?", WhatWasRating:"HowPositiveTargetFelt", sliderlabel:['Not at all positive','Extremely positive']},
        {question: "How much did the "+vignettes[k].targetName+" expect "+vignettes[k].actorName+" to help?", WhatWasRating:"ExpectationtoHelp", sliderlabel:['Not at all','Extremely']},
        {question: "How close do you think "+vignettes[k].actorName+" and "+vignettes[k].actorTheir+" "+vignettes[k].targetName+" are?", WhatWasRating:"Closeness", sliderlabel:['Not at all close','Extremely close']},
        {question: "How did this behavior change "+vignettes[k].actorName+" and "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"'s relationship?", WhatWasRating:"RelationChange", sliderlabel:['No change at all','Greatly strengthened']},
        {question: "How obligated was "+vignettes[k].actorName+" to help "+vignettes[k].actorTheir+" "+vignettes[k].targetName+"?", WhatWasRating:"Obligation", sliderlabel:['Not at all obligated','Extremely obligated']},
        ];
        /* merge the properties from vignettes[k] with the rating questions so we can input them as timeline variables */
        var thisVignette_timelinevars = Rating_qs_help;
        for (var i = 0; i < Rating_qs_help.length; i++) {
            thisVignette_timelinevars[i].actorGen = vignettes[k].actorGen;
            thisVignette_timelinevars[i].actorName = vignettes[k].actorName;
            thisVignette_timelinevars[i].actorPronoun = vignettes[k].actorPronoun;
            thisVignette_timelinevars[i].actorTheir = vignettes[k].actorTheir;
            thisVignette_timelinevars[i].domain_EmoMec = vignettes[k].domain_EmoMec;
            thisVignette_timelinevars[i].NoHelp_Help = vignettes[k].NoHelp_Help;
            thisVignette_timelinevars[i].relTarget = vignettes[k].relTarget;
            thisVignette_timelinevars[i].targetName = vignettes[k].targetName;
            thisVignette_timelinevars[i].scenarioIndex = vignettes[k].scenarioIndex;
            thisVignette_timelinevars[i].scenarioText = vignettes[k].scenarioText;
          }
    };
    var thisVignette = {
        type: jsPsychHtmlButtonResponse,
        stimulus: function(){
            var text = jsPsych.timelineVariable('scenarioText');
            return text;
        },
        choices: ['NEXT'],
        data: {WhatWasRating:'Vignette_'+k+'_Displayed',
                scenarioIndex: jsPsych.timelineVariable('scenarioIndex'),
                actorGen: jsPsych.timelineVariable('actorGen'),
                actorName: jsPsych.timelineVariable('actorName'),
                targetName: jsPsych.timelineVariable('targetName'),
                NoHelp_Help: jsPsych.timelineVariable('NoHelp_Help'),
                domain_EmoMec: jsPsych.timelineVariable('domain_EmoMec')},
        css_classes: ['vignette'],
        post_trial_gap: 100,
    };

    var thisVignette_scenario = {
        timeline: [thisVignette],
        timeline_variables: [thisVignette_timelinevars[0]], //this ensures that the scenario text is only presented once; not sure why it needs to be in array format but whatevs
    };
    var thisVignette_Rating_trial = {
        type: jsPsychHtmlSliderResponse,
        stimulus: function(){
            var text = jsPsych.timelineVariable('question');
            return text;
        },
        require_movement: true,
        labels: jsPsych.timelineVariable('sliderlabel'),
        data: {WhatWasRating: jsPsych.timelineVariable('WhatWasRating'),
                actorGen: jsPsych.timelineVariable('actorGen'),
                actorName: jsPsych.timelineVariable('actorName'),
                targetName: jsPsych.timelineVariable('targetName'),
                NoHelp_Help: jsPsych.timelineVariable('NoHelp_Help'),
                domain_EmoMec: jsPsych.timelineVariable('domain_EmoMec'),
                scenarioIndex: jsPsych.timelineVariable('scenarioIndex'),
            },
        css_classes: ['trial'],
    };
    /* create rating trials */
    var thisVignette_Rating_trials = {
        timeline: [thisVignette_Rating_trial],
        timeline_variables: thisVignette_timelinevars,
        randomize_order:true,
    };
    var thisVignette_OpenEnded_q = {
        type: jsPsychSurveyText,
        preamble: function() {
            var text = "Why did "+jsPsych.timelineVariable('actorName')+" act this way?"
            return text;
        },
        questions: function() {
            var prompt = [
            {prompt: "<p style='font-weight: normal;'>In your own words, please briefly explain <b>why you think</b> "+jsPsych.timelineVariable('actorName')+" acted the way that "+jsPsych.timelineVariable('actorPronoun')+" did toward "+jsPsych.timelineVariable('actorTheir')+" "+jsPsych.timelineVariable('targetName')+".</p>", rows:4, columns:40, required: true, name:'OpenEnded_Explain'},
            ];
            return prompt;
        },
        data: {WhatWasRating: 'OpenEnded_Explain',
                actorGen: jsPsych.timelineVariable('actorGen'),
                actorName: jsPsych.timelineVariable('actorName'),
                targetName: jsPsych.timelineVariable('targetName'),
                NoHelp_Help: jsPsych.timelineVariable('NoHelp_Help'),
                domain_EmoMec: jsPsych.timelineVariable('domain_EmoMec'),
                scenarioIndex: jsPsych.timelineVariable('scenarioIndex'),
            },
        css_classes: ['trial'],
    };
    var thisVignette_OpenEnded_trial = {
        timeline: [thisVignette_OpenEnded_q],
        timeline_variables: [thisVignette_timelinevars[0]],
    };
    /* push to timeline */
    timeline.push(thisVignette_scenario);
    timeline.push(thisVignette_Rating_trials);
    timeline.push(thisVignette_OpenEnded_trial);
};

/* demographic questions */
var demo_Instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<b>Thank you for your participation! <br><br>We will now ask you a few questions related to your background.</b><p style="font-weight:normal;">All of your responses will be anonymous, and we will not ask you to provide information that could be used to identify you.</p>',
    choices: ['NEXT'],
    data: {WhatWasRating:'Demo_Instructions'},
    css_classes: ['survey'],
}
var demo_feeling = {
    type: jsPsychSurveyHtmlForm,
    preamble: '<b>How are you feeling right now?</b>',
    html: '<br>I am feeling <input name="Feeling1" type="text" id="responsebox" />, <input name="Feeling2" type="text"/>, and <input name="Feeling3" type="text"/>.<br><br>',
    autofocus: 'responsebox',
    data: {WhatWasRating: 'demo_feeling'},
    css_classes: ['survey'],
    required: false,
    on_finish: function(){
        /* flatten response into a string array and then concat/join into one string */
        jsPsych.data.getLastTrialData().values()[0].response = Object.values(jsPsych.data.getLastTrialData().values()[0].response).flat().join();
    }
}
var demo_gender = {
    type: jsPsychSurveyHtmlForm,
    preamble: '<b>Do you describe yourself as a man, a woman, or in some other way?</b>',
    html: '<br><input name="ParGender" type="text" id="responsebox" /><br><br>',
    autofocus: 'responsebox',
    data: {WhatWasRating:'demo_ParGen'},
    css_classes: ['survey'],
    required: false,
    on_finish: function(){
        /* flatten response into a string array and then concat/join into one string */
        jsPsych.data.getLastTrialData().values()[0].response = Object.values(jsPsych.data.getLastTrialData().values()[0].response).flat().join();
    }
};
var demo_age = {
    type: jsPsychSurveyHtmlForm,
    preamble: '<b>What is your age?</b>',
    html: '<br><input name="ParAge" type="text" id="responsebox" /><br><br>',
    autofocus: 'responsebox',
    data: {WhatWasRating:'demo_ParAge'},
    css_classes: ['survey'],
    required: false,
    on_finish: function(){
        /* flatten response into a string array and then concat/join into one string */
        jsPsych.data.getLastTrialData().values()[0].response = Object.values(jsPsych.data.getLastTrialData().values()[0].response).flat().join();
    }
};
var demo_race = {
    type: jsPsychSurveyMultiSelect,
    questions: [
        {
            prompt: "<b>To which racial group(s) do you identify? (please check all that apply)</b>",
            options: ["Aboriginal/Indigenous or Native American/Alaska Native", "Black or African-American", "East Asian", 
                        "South Asian", "Latin American", "Middle Eastern", "Native Hawaiian or Other Pacific Islander", "White", "Other", "Prefer not to disclose"]
        }
    ],
    data: {WhatWasRating:'demo_ParRace'},
    css_classes: ['survey'],
    required: false,
    horizontal: false,
    on_finish: function(){
        /* flatten response into a string array and then concat/join into one string */
        jsPsych.data.getLastTrialData().values()[0].response = Object.values(jsPsych.data.getLastTrialData().values()[0].response).flat().join();
    }
};
var demo_relationshipstatus = {
    type: jsPsychSurveyMultiSelect,
    questions: [
        {
            prompt: "<b>What best describes your current relationship status?</b>",
            options: ["Single, never married", "Single, in a relationship", "Married or in a domestic partnership/civil union", "In a polyamorous relationship", "Dating", "Divorced", "Widowed", "Separated", "Prefer not to disclose"],
            name: "demo_RelationshipStatus",
        }
    ],
    data: {WhatWasRating:'demo_RelationshipStatus'},
    css_classes: ['survey'],
    required: false,
    horizontal: false,
    on_finish: function(){
        /* flatten response into a string array and then concat/join into one string */
        jsPsych.data.getLastTrialData().values()[0].response = Object.values(jsPsych.data.getLastTrialData().values()[0].response).flat().join();
    }
};
var demo_education = {
    type: jsPsychSurveyMultiChoice,
    questions: [
        {
            prompt: "<b>What is your highest level of education?</b>",
            options: ["Some high school or less", "High school diploma", "Some college", "Associates degree", "Bachelor's degree", "Master's degree", "Professional degree", "Doctoral degree", "Other", "Prefer not to disclose"]
        }
    ],
    data: {WhatWasRating:'demo_Education'},
    css_classes: ['survey'],
    required: false,
    horizontal: false,
    on_finish: function(){
        /* flatten response into a string array and then concat/join into one string */
        jsPsych.data.getLastTrialData().values()[0].response = Object.values(jsPsych.data.getLastTrialData().values()[0].response).flat().join();
    }
};
var demo_income = {
    type: jsPsychSurveyHtmlForm,
    preamble: '<b>What is the approximate total amount of income you will earn this year?</b>',
    html: '<br><input name="ParIncome" type="text" id="responsebox" /><br><br>',
    autofocus: 'responsebox',
    data: {WhatWasRating:'demo_ParIncome'},
    css_classes: ['survey'],
    required: false,
    on_finish: function(){
        /* flatten response into a string array and then concat/join into one string */
        jsPsych.data.getLastTrialData().values()[0].response = Object.values(jsPsych.data.getLastTrialData().values()[0].response).flat().join();
    }
};
var demo_subjectiveSES = {
    type: jsPsychHtmlSliderResponse,
    stimulus: "<b>Think of this ladder to the right as representing where people stand in <u> your country</u>.</b><p style='font-weight:normal; width='500px;'><img src='../img/subjectiveSES.png' style='float:right'>At the top of the ladder are the people who are the <i>best off</i>--those who have the most money, the most education, and the most respected jobs. At the bottom are the people who are the <i>worst off</i>--who have the least money, least education, and the least respected jobs or no job. The higher up you are on this ladder, the closer you are to the people at the very top. The lower you are, the closer you are to the people at the very bottom.</p><b>Where would you place yourself on this ladder, compared to people <u>in your country</u>?</b>",
    require_movement: false,
    min: 1,
    max: 10,
    slider_start: 5,
    labels: ['1','2','3','4','5','6','7','8','9','10'],
    data: {WhatWasRating: 'demo_SubjectiveSES'},
    css_classes: ['survey'],
};
var demo_IncludeOthersinSelf = {
    type: jsPsychHtmlButtonResponse,
    /* show image instead of button choices */
    button_html: '<img src=%choice%>',
    stimulus: function(){
        var text = "<b>Please select the image that best represents the relationship between <u>yourself</u> and <span style='color:#2980b9;'><u> other people in general.</u></span><br><br></b>";
        return text;
    },
    choices: function(){
        var pics = [
            '../img/ios_others_0.png',
            '../img/ios_others_1.png',
            '../img/ios_others_2.png',
            '../img/ios_others_3.png',
            '../img/ios_others_4.png',
            '../img/ios_others_5.png',
            '../img/ios_others_6.png',
            '../img/ios_others_7.png'
        ];
        return pics;
    },
    data: {WhatWasRating: 'demo_IncludeOthersInSelf'},
    css_classes: ['survey'],
};
var demo_political = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<b>In political matters, people talk of "the left" and "the right." How would you place your views on this scale, generally speaking?</b><br><br>',
    require_movement: false,
    min: 1,
    max: 10,
    slider_start: 5,
    labels: ['Extremely left','2','3','4','5','6','7','8','9','Extremely right'],
    data: {WhatWasRating: 'demo_political'},
    css_classes: ['survey'],
};
var demo_religiosity = {
    type: jsPsychHtmlSliderResponse,
    stimulus: '<b>How religious are you?</b><br>',
    require_movement: false,
    min: 1,
    max: 10,
    slider_start: 5,
    labels: ['Not at all religious','Somewhat religious','Very religious'],
    data: {WhatWasRating: 'demo_political'},
    css_classes: ['survey'],
};
var manipulationCheck = {
    type: jsPsychSurveyText,
    preamble: '<b>What do you think this experiment was about?</b>',
    questions: [
        {prompt: "<p style='font-weight:normal;'>Please briefly describe what you thought this experiment was about.<br>If you have any feedback about the study, please include it here.</p>", rows:4, columns:40, required: true, name:'ManipulationCheckFeedback'},
    ],
    data: {WhatWasRating: ['ManipulationCheckFeedback']},
    css_classes: ['survey'],
    on_finish: function(){
        /* flatten response into a string array and then concat/join into one string */
        jsPsych.data.getLastTrialData().values()[0].response = Object.values(jsPsych.data.getLastTrialData().values()[0].response).flat().join();
    }
};
var demo_qs = {
    timeline: [
        demo_Instructions,
        demo_feeling,
        demo_gender,
        demo_age,
        demo_race,
        demo_relationshipstatus,
        demo_education,
        demo_income,
        demo_subjectiveSES,
        demo_political,
        demo_religiosity,
        demo_IncludeOthersinSelf,
        manipulationCheck,
    ]
};
timeline.push(demo_qs);

/* end of study messages*/
var Exit_Fullscreen = {
    type: jsPsychFullscreen,
    message: '<p style="font-weight:bold;">Thank you for your participation! <br><br>Please press the button below to exit fullscreen mode.</p>',
    button_label: 'NEXT',
    fullscreen_mode: false,
    delay_after: 0
}
var End_of_Survey = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'The study is now complete.<br><br>Please read the debriefing message on the next page.',
    choices: ['NEXT'],
    data: {WhatWasRating:'END_OF_SURVEY'},
    css_classes: ['instructions'],
}
var Debriefing = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<p style='font-weight:bold;'>Thank you for taking the time to participate in our study!</p>This document contains some information about the purpose and methods of our study.<br><br>Research in our laboratory is concerned with the psychological and neural mechanisms of social learning and decision-making. For example, we are interested in how we learn about the moral characters of others, or how we represent different kinds of moral actions (e.g., is providing care to others considered praiseworthy depending on the characteristics of the caregiver?).<br><br>When we evaluate others' moral characters, we consider several different traits: is this person caring? Competent? And many others. What makes someone 'moral'? Does it depend on the characteristics of the agent, the characteristics of the target being acted upon, and the characteristics of the situation?<br><br>To investigate this question, we asked you to evaluate the traits of moral agents in different scenarios. We are interested in how people who provide care to others are evaluated. We did not initially reveal this as the purpose of the study in order to ensure that people provided their responses spontaneously and without trying to appear a certain way to the experimenter. In other words, we did not want the hypotheses of the study to influence your responses.<br><br>If you are interested in learning more about our work, you may want to consult the following sources:<p style='font-weight:bold;'>Earp, B. D., McLoughlin, K. L., Monrad, J. T., Clark, M. S., & Crockett, M. J. (2021). How social relationships shape moral wrongness judgments. <i>Nature communications, 12</i>(1), 1-13.,<br><br>Crockett, M. J., Everett, J. A., Gill, M., & Siegel, J. Z. (2021). The relational logic of moral inference. <i>Advances in Experimental Social Psychology, 64,</i> 1-64.</p><p style='font-weight:normal;'>If you have general questions about this study please contact: Dr. Molly Crockett (mc5121@princeton.edu)<br><br>If you have questions regarding your rights as a research subject, or if problems arise which you do not feel you can discuss with the Investigator, please contact the Institutional Review Board at: Assistant Director, Research Integrity and Assurance Phone: (609) 258-8543 Email: irb@princeton.edu</p>",
    choices: ['FINISH STUDY'],
    data: {WhatWasRating:'DEBRIEFING'},
    css_classes: ['longtext'],

}
timeline.push(Exit_Fullscreen);
timeline.push(End_of_Survey);
timeline.push(Debriefing);

/* start experiment */
jsPsych.run(timeline);