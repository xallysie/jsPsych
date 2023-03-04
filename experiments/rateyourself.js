/* initialize jsPsych */
var jsPsych = initJsPsych({
    default_iti: 50,
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
        url = "https://script.google.com/macros/s/AKfycbzCipgh2sWsYpawQ8WT4r9WQSYVCZe5dEQiyrvBNqoJRdUrS_BLLtvXYfOJK2kkskBySQ/exec";
        jsPsychSheet.uploadData(url, jsPsych.data.get().csv())
    }
});

/* create timeline */
var timeline = [];

/* read url parameters and generate participant IDs */
var urlParams = new URL(window.location.toLocaleString()).searchParams;
var surveyID = urlParams.get('A52H5G2A');
var prolificID = urlParams.get('M2GH72PE');
var pID = urlParams.get('O2MN1ONW');
var pg = urlParams.get('pg');
/* add participant-level data to all trials */
jsPsych.data.addProperties({
    surveyID: surveyID,
    Prolific_ID: prolificID,
    pID: pID,
    ParGen_FM: pg,
});

/* create gendered parameters */
if (pg == 0) {
    var ParGenPlural = "women";
    var ParGenSingular = "woman";
    var ParGenPronoun = "she";
    var ParGenPossessive = "her";
    var ParGender = "female";
} else if (pg == 1) {
    var ParGenPlural = "men";
    var ParGenSingular = "man";
    var ParGenPronoun = "he";
    var ParGenPossessive = "his";
    var ParGender = "male";
}

/* Q1 - Rating Yourself */
var RateYourself_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'Think about yourself in general.<br> Please do your best to honestly evaluate yourself on the following traits.',
    choices: ['NEXT'],
    data: {WhatWasRating:'INSTRUCTIONS'},
    css_classes: ['instructions'],
    post_trial_gap: 100
};
timeline.push(RateYourself_instructions);

var RateYourself_com = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'How competent are you? That is, how capable are you at doing things in general?',
    choices: ['1-Not at all competent', '2', '3', '4-Neutral', '5', '6', '7-Very competent'],
    data: {WhatWasRating:'RateYourself_com'},
    css_classes: ['trial'],
};

var RateYourself_int = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'How intelligent are you? That is, how easily do you learn or understand new things or problems in general?',
    choices: ['1-Not at all intelligent', '2', '3', '4-Neutral', '5', '6', '7-Very intelligent'],
    data: {WhatWasRating:'RateYourself_int'},
    css_classes: ['trial'],
};

var RateYourself_war = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'How warm are you? That is, how kind and loving are you in general?',
    choices: ['1-Not at all warm', '2', '3', '4-Neutral', '5', '6', '7-Very warm'],
    data: {WhatWasRating:'RateYourself_war'},
    css_classes: ['trial'],
};

var RateYourself_fri = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'How friendly are you? That is, how sociable and pleasant are you in general?',
    choices: ['1-Not at all friendly', '2', '3', '4-Neutral', '5', '6', '7-Very friendly'],
    data: {WhatWasRating:'RateYourself_fri'},
    css_classes: ['trial'],
};

var RateYourself_hon = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'How honest are you? That is, how sincere and truthful are you in general?',
    choices: ['1-Not at all honest', '2', '3', '4-Neutral', '5', '6', '7-Very honest'],
    data: {WhatWasRating:'RateYourself_hon'},
    css_classes: ['trial'],
};

var RateYourself_tru = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'How trustworthy are you? That is, how much can you be relied upon as honest and truthful in general?',
    choices: ['1-Not at all trustworthy', '2', '3', '4-Neutral', '5', '6', '7-Very trustworthy'],
    data: {WhatWasRating:'RateYourself_tru'},
    css_classes: ['trial'],
};

var RateYourself_hea = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'How healthy are you? That is, how is your physical and mental condition in general?',
    choices: ['1-Not at all healthy', '2', '3', '4-Neutral', '5', '6', '7-Very healthy'],
    data: {WhatWasRating:'RateYourself_hea'},
    css_classes: ['trial'],
};

var RateYourself_att = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'How attractive are you? That is, how physically appealing do you look to people in general?',
    choices: ['1-Not at all attractive', '2', '3', '4-Neutral', '5', '6', '7-Very attractive'],
    data: {WhatWasRating:'RateYourself_att'},
    css_classes: ['trial'],
};

var RateYourself_dom = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'How dominant are you? That is, how powerful, controlling, or commanding are you in general?',
    choices: ['1-Not at all dominant', '2', '3', '4-Neutral', '5', '6', '7-Very dominant'],
    data: {WhatWasRating:'RateYourself_dom'},
    css_classes: ['trial'],
};

var RateYourself_str = {
    type: jsPsychHtmlButtonResponse,
    stimulus: 'How physically strong are you? That is, how capable are you of doing physically demanding tasks in general?',
    choices: ['1-Not at all strong', '2', '3', '4-Neutral', '5', '6', '7-Very strong'],
    data: {WhatWasRating:'RateYourself_str'},
    css_classes: ['trial'],
};

/* Q1 - Define task list */
var Q1_RateYourself_block = {
    timeline: [
        RateYourself_att,
        RateYourself_com,
        RateYourself_dom,
        RateYourself_fri,
        RateYourself_hea,
        RateYourself_hon,
        RateYourself_int,
        RateYourself_str,
        RateYourself_tru,
        RateYourself_war
    ],
    randomize_order: true
};
timeline.push(Q1_RateYourself_block);

/* Q2 - Stereotypical Perceptions of Women/Men in General */
var Stereotypes_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'What do other people think '+ParGenPlural+' are like in general?<br><p style="font-weight: normal;">What do <b>other people</b> in your society think<b> '+ParGenPlural+'</b> are like?<br><br>Think about '+ParGenPlural+' <b>in general</b>.</p>';
        return text;
    },
    choices: ['NEXT'],
    data: {WhatWasRating:'INSTRUCTIONS'},
    css_classes: ['instructions'],
    post_trial_gap: 100,
    on_finish: function() {
        url = "https://script.google.com/macros/s/AKfycbzCipgh2sWsYpawQ8WT4r9WQSYVCZe5dEQiyrvBNqoJRdUrS_BLLtvXYfOJK2kkskBySQ/exec";
        jsPsychSheet.uploadPartialData(url, jsPsych.data.get().csv());
    }
};
/* timeline.push(Stereotypes_instructions); */

var Stereotypes_com = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How competent are '+ParGenPlural+'? That is, how capable are '+ParGenPlural+' at doing things in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think '+ParGenPlural+' are like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all competent', '2', '3', '4-Neutral', '5', '6', '7-Very competent'],
    data: {WhatWasRating:'Stereotypes_com'},
    css_classes: ['trial'],
};
var Stereotypes_int = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How intelligent are '+ParGenPlural+'? That is, how easily do '+ParGenPlural+' learn or understand new things or problems in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think '+ParGenPlural+' are like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all intelligent', '2', '3', '4-Neutral', '5', '6', '7-Very intelligent'],
    data: {WhatWasRating:'Stereotypes_int'},
    css_classes: ['trial'],
};
var Stereotypes_war = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How warm are '+ParGenPlural+'? That is, how kind and loving are '+ParGenPlural+' in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think '+ParGenPlural+' are like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all warm', '2', '3', '4-Neutral', '5', '6', '7-Very warm'],
    data: {WhatWasRating:'Stereotypes_war'},
    css_classes: ['trial'],
};
var Stereotypes_fri = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How friendly are '+ParGenPlural+'? That is, how sociable and pleasant are '+ParGenPlural+' in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think '+ParGenPlural+' are like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all friendly', '2', '3', '4-Neutral', '5', '6', '7-Very friendly'],
    data: {WhatWasRating:'Stereotypes_fri'},
    css_classes: ['trial'],
};
var Stereotypes_hon = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How honest are '+ParGenPlural+'? That is, how sincere and truthful are '+ParGenPlural+' in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think '+ParGenPlural+' are like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all honest', '2', '3', '4-Neutral', '5', '6', '7-Very honest'],
    data: {WhatWasRating:'Stereotypes_hon'},
    css_classes: ['trial'],
};
var Stereotypes_tru = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How trustworthy are '+ParGenPlural+'? That is, how much can '+ParGenPlural+' be relied upon as truthful and dependable in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think '+ParGenPlural+' are like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all trustworthy', '2', '3', '4-Neutral', '5', '6', '7-Very trustworthy'],
    data: {WhatWasRating:'Stereotypes_tru'},
    css_classes: ['trial'],
};
var Stereotypes_hea = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How healthy are '+ParGenPlural+'? That is, how is the physical and mental condition of '+ParGenPlural+' in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think '+ParGenPlural+' are like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all healthy', '2', '3', '4-Neutral', '5', '6', '7-Very healthy'],
    data: {WhatWasRating:'Stereotypes_hea'},
    css_classes: ['trial'],
};
var Stereotypes_att = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How attractive are '+ParGenPlural+'? That is, how physically appealing do '+ParGenPlural+' look to people in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think '+ParGenPlural+' are like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all attractive', '2', '3', '4-Neutral', '5', '6', '7-Very attractive'],
    data: {WhatWasRating:'Stereotypes_att'},
    css_classes: ['trial'],
};
var Stereotypes_dom = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How dominant are '+ParGenPlural+'? That is, how powerful, controlling, or commanding are '+ParGenPlural+' in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think '+ParGenPlural+' are like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all dominant', '2', '3', '4-Neutral', '5', '6', '7-Very dominant'],
    data: {WhatWasRating:'Stereotypes_dom'},
    css_classes: ['trial'],
};
var Stereotypes_str = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How physically strong are '+ParGenPlural+'? That is, how capable are '+ParGenPlural+' of doing vigorous or physically demanding tasks in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think '+ParGenPlural+' are like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all strong', '2', '3', '4-Neutral', '5', '6', '7-Very strong'],
    data: {WhatWasRating:'Stereotypes_str'},
    css_classes: ['trial'],
};

/* Q2 - Define task list, and randomize, but don't push yet - want to randomize the order of this block with Q3 */
var Q2_Stereotypes_block = {
    timeline: [
        Stereotypes_com,
        Stereotypes_int,
        Stereotypes_war,
        Stereotypes_fri,
        Stereotypes_hon,
        Stereotypes_tru,
        Stereotypes_hea,
        Stereotypes_att,
        Stereotypes_dom,
        Stereotypes_str,
    ],
    randomize_order: true
};
/* append instructions to start of array */
//function appendInstructions(Q2_Stereotypes_block) {
//    Q2_Stereotypes_block.unshift(Stereotypes_instructions);
//}
var Q2_Stereotypes_block = {
    timeline: [
        Stereotypes_instructions,
        Q2_Stereotypes_block
    ]
}

/* Q3 - Perceptions of the Ideal Woman/Man */
var Ideal_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'What do other people think the ideal '+ParGenSingular+' is like?<br><p style="font-weight: normal;">What do <b>other people</b> in your society think<b> the ideal '+ParGenSingular+'</b> is like?<br><br>Think about <b>the ideal</b> '+ParGenSingular+'.</p>';
        return text;
    },
    choices: ['NEXT'],
    data: {WhatWasRating:'INSTRUCTIONS'},
    css_classes: ['instructions'],
    post_trial_gap: 100,
    on_finish: function() {
        url = "https://script.google.com/macros/s/AKfycbzCipgh2sWsYpawQ8WT4r9WQSYVCZe5dEQiyrvBNqoJRdUrS_BLLtvXYfOJK2kkskBySQ/exec";
        jsPsychSheet.uploadPartialData(url, jsPsych.data.get().csv());
    }
};

var Ideal_com = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How competent is the ideal '+ParGenSingular+'? That is, how capable is the ideal '+ParGenSingular+' at doing things in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think the ideal '+ParGenSingular+' is like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all competent', '2', '3', '4-Neutral', '5', '6', '7-Very competent'],
    data: {WhatWasRating:'Ideal_com'},
    css_classes: ['trial'],
};
var Ideal_int = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How intelligent is the ideal '+ParGenSingular+'? That is, how easily do '+ParGenSingular+' learn or understand new things or problems in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think the ideal '+ParGenSingular+' is like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all intelligent', '2', '3', '4-Neutral', '5', '6', '7-Very intelligent'],
    data: {WhatWasRating:'Ideal_int'},
    css_classes: ['trial'],
};
var Ideal_war = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How warm is the ideal '+ParGenSingular+'? That is, how kind and loving is the ideal '+ParGenSingular+' in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think the ideal '+ParGenSingular+' is like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all warm', '2', '3', '4-Neutral', '5', '6', '7-Very warm'],
    data: {WhatWasRating:'Ideal_war'},
    css_classes: ['trial'],
};
var Ideal_fri = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How friendly is the ideal '+ParGenSingular+'? That is, how sociable and pleasant is the ideal '+ParGenSingular+' in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think the ideal '+ParGenSingular+' is like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all friendly', '2', '3', '4-Neutral', '5', '6', '7-Very friendly'],
    data: {WhatWasRating:'Ideal_fri'},
    css_classes: ['trial'],
};
var Ideal_hon = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How honest is the ideal '+ParGenSingular+'? That is, how sincere and truthful is the ideal '+ParGenSingular+' in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think the ideal '+ParGenSingular+' is like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all honest', '2', '3', '4-Neutral', '5', '6', '7-Very honest'],
    data: {WhatWasRating:'Ideal_hon'},
    css_classes: ['trial'],
};
var Ideal_tru = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How trustworthy is the ideal '+ParGenSingular+'? That is, how much can '+ParGenSingular+' be relied upon as truthful and dependable in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think the ideal '+ParGenSingular+' is like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all trustworthy', '2', '3', '4-Neutral', '5', '6', '7-Very trustworthy'],
    data: {WhatWasRating:'Ideal_tru'},
    css_classes: ['trial'],
};
var Ideal_hea = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How healthy is the ideal '+ParGenSingular+'? That is, how is the physical and mental condition of '+ParGenSingular+' in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think the ideal '+ParGenSingular+' is like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all healthy', '2', '3', '4-Neutral', '5', '6', '7-Very healthy'],
    data: {WhatWasRating:'Ideal_hea'},
    css_classes: ['trial'],
};
var Ideal_att = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How attractive is the ideal '+ParGenSingular+'? That is, how physically appealing do '+ParGenSingular+' look to people in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think the ideal '+ParGenSingular+' is like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all attractive', '2', '3', '4-Neutral', '5', '6', '7-Very attractive'],
    data: {WhatWasRating:'Ideal_att'},
    css_classes: ['trial'],
};
var Ideal_dom = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How dominant is the ideal '+ParGenSingular+'? That is, how powerful, controlling, or commanding is the ideal '+ParGenSingular+' in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think the ideal '+ParGenSingular+' is like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all dominant', '2', '3', '4-Neutral', '5', '6', '7-Very dominant'],
    data: {WhatWasRating:'Ideal_dom'},
    css_classes: ['trial'],
};
var Ideal_str = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'How physically strong is the ideal '+ParGenSingular+'? That is, how capable is the ideal '+ParGenSingular+' of doing vigorous or physically demanding tasks in general?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">What do other people in your society think the ideal '+ParGenSingular+' is like?</p>';
        return pprompt;
    },
    choices: ['1-Not at all strong', '2', '3', '4-Neutral', '5', '6', '7-Very strong'],
    data: {WhatWasRating:'Ideal_str'},
    css_classes: ['trial'],
};

/* Q2 - Define task list, and randomize, but don't push yet - want to randomize the order of this block with Q2 */
var Q3_Ideal_block = {
    timeline: [
        Ideal_com,
        Ideal_int,
        Ideal_war,
        Ideal_fri,
        Ideal_hon,
        Ideal_tru,
        Ideal_hea,
        Ideal_att,
        Ideal_dom,
        Ideal_str,
    ],
    randomize_order: true
};

/* append instructions to start of array */
var Q3_Ideal_block = {
    timeline: [
        Ideal_instructions,
        Q3_Ideal_block
    ]
}

/* Setup randomization between Q2 and Q3 */ 
var Q2Q3_blocks_unshuffled = [
    Q2_Stereotypes_block,
    Q3_Ideal_block
];

/* use jsPsych.randomization.shuffle to randomize the order of the two blocks, then add the procedures to the timeline in random order */
var Q2Q3_blocks_randomized = jsPsych.randomization.shuffle(Q2Q3_blocks_unshuffled);
/* push randomized Q2 and Q3 blocks to timeline */
timeline.push(Q2Q3_blocks_randomized[0]);
timeline.push(Q2Q3_blocks_randomized[1]);

/* Q4 - Stereotype Associations for Women and Men */


/* start experiment */
jsPsych.run(timeline);