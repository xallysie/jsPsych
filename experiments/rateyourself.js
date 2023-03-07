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
var customg = urlParams.get('HSJ2JS');
/* add participant-level data to all trials */
jsPsych.data.addProperties({
    surveyID: surveyID,
    Prolific_ID: prolificID,
    pID: pID,
    ParGen_FM: pg,
    ParGen_Text: customg,
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
var StereotypeAssociations_instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'What do other people think '+ParGenPlural+' are like?<br><p style="font-weight: normal;">In this part of the study, you will be presented with <u>pairs of traits</u>.<br>We want to know how <u>other people in your society</u> might think these traits go together, when they think about '+ParGenPlural+'.</p> If a '+ParGenSingular+' has one trait, do people in society think '+ParGenPronoun+' is likely to have another trait?';
        return text;
    },
    choices: ['NEXT'],
    prompt: '<br><img src="img/stereotypeassociations.png">',
    data: {WhatWasRating:'INSTRUCTIONS'},
    css_classes: ['instructions'],
    post_trial_gap: 100,
    on_finish: function() {
        url = "https://script.google.com/macros/s/AKfycbzCipgh2sWsYpawQ8WT4r9WQSYVCZe5dEQiyrvBNqoJRdUrS_BLLtvXYfOJK2kkskBySQ/exec";
        jsPsychSheet.uploadPartialData(url, jsPsych.data.get().csv());
    }
};
timeline.push(StereotypeAssociations_instructions);

/* function to extract pairwise combinations of trait list (and shuffle the order of traits within each pair) */
function pairwisecombinations(list) {
    // presize the output array for performance boost
    var pairs = new Array((list.length * (list.length - 1)) / 2),
        pos = 0;
    // classic 'idiomatic' way to do this pairwise combination operation:
    for (var i = 0; i < list.length; i++) {
        for (var j = i + 1; j < list.length; j++) {
            //uncomment below if you don't want the order within each pair to be randomly shuffled
            //pairs[pos++] = [list[i], list[j]];
            //uncomment below if you want the order within each pair to be randomized
            pairs[pos++] = jsPsych.randomization.shuffle([list[i],list[j]]);
        }
    }
    return pairs;
}
var shuffledtraitpairs = pairwisecombinations([
    "competent",
    "intelligent",
    "warm",
    "friendly",
    "honest",
    "trustworthy",
    "healthy",
    "attractive",
    "dominant",
    "physically strong"
]);
/* convert list of shuffled trait-pairs to dictionary form readable by jsPsych */
// use map to iterate over the shuffledtraitpairs array and create a new array with modified (named) objects
var StereotypeAssociations_traitpairs = shuffledtraitpairs.map(function(v) {
    return {
        trait1: v[0],
        trait2: v[1],
        traitpair: v[0].substr(0,3) + v[1].substr(0,3)
    };
});
// short form (arrow function) of above function:
//var StereotypeAssociations_traitpairs = shuffledtraitpairs.map(v => ({
//    trait1: v[0],
//    trait2: v[1],
//    traitpair: v[0].substr(0,3) + v[1].substr(0,3)}));

var StereotypeAssociations_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        /* check if first trait is a vowel */
        if (jsPsych.timelineVariable('trait1').startsWith("a") || 
            jsPsych.timelineVariable('trait1').startsWith("e") || 
            jsPsych.timelineVariable('trait1').startsWith("i") || 
            jsPsych.timelineVariable('trait1').startsWith("o") || 
            jsPsych.timelineVariable('trait1').startsWith("u") || 
            jsPsych.timelineVariable('trait1').startsWith("hon")){
            /* inject variables into text prompt */
            var text = 'How likely is an <u>'+jsPsych.timelineVariable('trait1')+'</u> '+ParGenSingular+' to be <u>'+jsPsych.timelineVariable('trait2')+'</u>?';
            return text;
        } else {
            var text = 'How likely is a <u>'+jsPsych.timelineVariable('trait1')+'</u> '+ParGenSingular+' to be <u>'+jsPsych.timelineVariable('trait2')+'</u>?';
            return text;
        }
    },
    choices: ['1-Not at all likely', '2', '3', '4-Neither likely nor unlikely', '5', '6', '7-Very likely'],
    data: {WhatWasRating: jsPsych.timelineVariable('traitpair')},
    css_classes: ['trial'],
};
var StereotypeAssociations_trials = {
    timeline: [StereotypeAssociations_trial],
    timeline_variables: StereotypeAssociations_traitpairs,
    randomize_order:true
}
/* push randomized stereotype association trials (with randomized order within each pair) onto timeline */
timeline.push(StereotypeAssociations_trials);

/* Q5 - Stereotype Endorsement */
var Q5_Endorsement_Instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'Thank you for sharing your impressions of how other people think about '+ParGenPlural+'.';
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
timeline.push(Q5_Endorsement_Instructions);

var Endorsement_general = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'Do you generally share the same views about '+ParGenPlural+' as other people?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">That is, do you generally agree or disagree with how other people see '+ParGenPlural+'?</p>';
        return pprompt;
    },
    choices: ['1-Strongly disagree', '2-Disagree', '3-Slightly disagree', '4-Neither agree nor disagree', '5-Slightly agree', '6-Agree', '7-Strongly agree'],
    data: {WhatWasRating:'Endorsement_general'},
    css_classes: ['trial'],
};
var Endorsement_ideal = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = 'Do you generally share the same views about the ideal '+ParGenSingular+' as other people?';
        return text;
    },
    prompt: function() {
        var pprompt = '<p style="font-weight:normal;">That is, do you generally agree or disagree with how other people see the <u>ideal</u> '+ParGenSingular+'?</p>';
        return pprompt;
    },
    choices: ['1-Strongly disagree', '2-Disagree', '3-Slightly disagree', '4-Neither agree nor disagree', '5-Slightly agree', '6-Agree', '7-Strongly agree'],
    data: {WhatWasRating:'Endorsement_ideal'},
    css_classes: ['trial'],
};
var Q5_Endorsement_block = {
    timeline: [
        Endorsement_general,
        Endorsement_ideal,
    ],
    randomize_order: true
};
/* push randomized Q5 endorsement blocks to timeline */
timeline.push(Q5_Endorsement_block);

/* Q6 - Open-ended question about Ideals */
var Q6_OpenEnded_Ideal = {
    type: jsPsychSurveyText,
    preamble: function() {
        var text = 'How do you think other people in your society define the ideal '+ParGenSingular+'?';
        return text;
    },
    questions: [
        {prompt: 'In your own words, please describe what other people think of as the ideal '+ParGenSingular+'.', rows:8, columns:70, required: true, name:'OpenEnded_DescribeIdeal'},
    ],
    data: {WhatWasRating: 'OpenEnded_ideal'},
    css_classes: ['trial'],
};
var Q6_OpenEnded_AgeRace = {
    type: jsPsychSurveyText,
    preamble: function() {
        var text = 'How do you think other people in your society define the ideal '+ParGenSingular+'?';
        return text;
    },
    questions: [
        {prompt: 'Thinking about how other people define the ideal '+ParGenSingular+', what are some of '+ParGenPossessive+' characteristics? What is '+ParGenPossessive+' <i>age</i> and <i>race</i>?', rows:5, columns:70, required:true, name:'OpenEnded_DescribeAgeRace'},
    ],
    data: {WhatWasRating: 'OpenEnded_AgeRace'},
    css_classes: ['trial'],
};
/* push Q6 open-ended questions to timeline */
timeline.push(Q6_OpenEnded_Ideal);
timeline.push(Q6_OpenEnded_AgeRace);

/* Q7 to Q16 - ten blocks to be randomized */
/* Q7 - Global Identity scale */
var Q7_GlobalIdentity_Instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = "We would like to know a little about you and how you view your situation.<p style='font-weight:normal;'>Here are some thoughts that most people have about themselves at one time or another.<br><br>Please read each sentence and select the number which shows how often the sentence is true of you.<br><br>Don't spend a lot of time thinking about your response. There are no right or wrong answers.</p>How often is this true of you?";
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
var GlobalIdentity_qs = [
    {question: "I change my opinion of myself a lot", gi:"GlobalIdentity_1r", reversed:1},
    {question: "I've got a clear idea of what I want to be", gi:"GlobalIdentity_2", reversed:0},
    {question: "I feel mixed up", gi:"GlobalIdentity_3r",reversed:1},
    {question: "The important things in life are clear to me", gi:"GlobalIdentity_4",reversed:0},
    {question: "I've got it together", gi:"GlobalIdentity_5",reversed:0},
    {question: "I know what kind of person I am", gi:"GlobalIdentity_6",reversed:0},
    {question: "I can't decide what I want to do with my life", gi:"GlobalIdentity_7r",reversed:1},
    {question: "I like myself and am proud of what I stand for", gi:"GlobalIdentity_8",reversed:0},
    {question: "I find I have to keep up a front when I'm with people", gi:"GlobalIdentity_9r",reversed:1},
    {question: "I don't really feel involved", gi:"GlobalIdentity_10r",reversed:1}
]
var GlobalIdentity_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = "<p style='font-weight:normal;'>How often is this true of you?</p>"+jsPsych.timelineVariable('question');
        return text;
    },
    choices: ['1-Hardly ever true', '2-Occasionally true', '3-About half the time', '4-Usually true', '5-Almost always true'],
    data: {WhatWasRating: jsPsych.timelineVariable('gi'),
           Reversed: jsPsych.timelineVariable('reversed')},
    css_classes: ['trial'],
};
var GlobalIdentity_trials = {
    timeline: [GlobalIdentity_trial],
    timeline_variables: GlobalIdentity_qs,
    randomize_order:true
};
/* append instructions to start of array */
var Q7_GlobalIdentity_block = {
    timeline: [
        Q7_GlobalIdentity_Instructions,
        GlobalIdentity_trials
    ]
};

/* Q8 - Gender Typicality scale */
var Q8_GenderTypicality_Instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = "Different "+ParGenPlural+" have a range of feelings about how <u>typical</u> they are in comparison to <u>other "+ParGenPlural+"</u>.<p style='font-weight:normal;'>Please read each statement and indicate your agreement with it.<br><br>There are no right or wrong answers, so please answer honestly.</p>";
        return text;
    },
    choices: ['NEXT'],
    data: {WhatWasRating:'INSTRUCTIONS'},
    css_classes: ['instructions'],
    post_trial_gap: 100,
    on_finish: function() {
        url = "https://script.google.com/macros/s/AKfycbzCipgh2sWsYpawQ8WT4,reversed:1},r9WQSYVCZe5dEQiyrvBNqoJRdUrS_BLLtvXYfOJK2kkskBySQ/exec";
        jsPsychSheet.uploadPartialData(url, jsPsych.data.get().csv());
    }
};
var GenderTypicality_qs = [
    {question: "I feel just like "+ParGenPlural+" my age.", gt:"GenderTypicality_1"},
    {question: "I feel I fit in with other "+ParGenPlural+".", gt:"GenderTypicality_2"},
    {question: "I think I am a good example of other "+ParGenPlural+".", gt:"GenderTypicality_3"},
    {question: "I feel that what I like to do in my spare time is similar to what most "+ParGenPlural+" like to do in their spare time.", gt:"GenderTypicality_4"},
    {question: "I feel that the things I am good at are similar to what most "+ParGenPlural+" are good at.", gt:"GenderTypicality_5"},
    {question: "I feel that my personality is similar to most "+ParGenPlural+"'s personalities.", gt:"GenderTypicality_6"}
]
var GenderTypicality_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = jsPsych.timelineVariable('question');
        return text;
    },
    choices: ['1-Strongly disagree', '2-Disagree', '3-Slightly disagree', '4-Neither agree nor disagree', '5-Slightly agree', '6-Agree', '7-Strongly agree'],
    data: {WhatWasRating: jsPsych.timelineVariable('gt')},
    css_classes: ['trial'],
};
var GenderTypicality_trials = {
    timeline: [GenderTypicality_trial],
    timeline_variables: GenderTypicality_qs,
    randomize_order:true
};
/* append instructions to start of array */
var Q8_GenderTypicality_block = {
    timeline: [
        Q8_GenderTypicality_Instructions,
        GlobalIdentity_trials
    ]
};

/* Q9 - Importance of Being Prototypical */
var Q9_PrototypeImportance_Instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = "Think about how your society defines the ideal "+ParGenSingular+".<p style='font-weight:normal;'>Using the 1-9 scale on the next page, please indicate how important each statement is to you.<br><br>Please be open and honest in your response.</p>";
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
var PrototypeImportance_qs = [
    {question: "How important is it for you personally to be similar to the ideal "+ParGenSingular+"?", pi:"PrototypeImportance_1"},
    {question: "To what extent is being similar to the ideal "+ParGenSingular+" an important part of who you are?", pi:"PrototypeImportance_2"}
]
var PrototypeImportance_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = jsPsych.timelineVariable('question');
        return text;
    },
    choices: ['1-Not at all important', '2', '3', '4', '5-Somewhat important', '6', '7', '8', '9-Extremely important'],
    data: {WhatWasRating: jsPsych.timelineVariable('pi')},
    css_classes: ['trial'],
};
var PrototypeImportance_trials = {
    timeline: [PrototypeImportance_trial],
    timeline_variables: PrototypeImportance_qs,
    randomize_order:true
};
/* append instructions to start of array */
var Q9_PrototypeImportance_block = {
    timeline: [
        Q9_PrototypeImportance_Instructions,
        PrototypeImportance_trials
    ]
};

/* Q10-Q13 - Well-being measures (random ordering nested with broader randomization of blocks) */
/* Q10 - Well-being - Satisfaction with Life Scale */
var Q10_Wellbeing_SWLS_Instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = "Below are five statements with which you may agree or disaree.<p style='font-weight:normal;'>Using the 1-7 scale, indicate your agreement with each item by clicking the appropriate option.</p><i>Please be open and honest in your response.</i>";
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
var Wellbeing_SWLS_qs = [
    {question: "In most ways my life is close to my ideal.", swls:"WB_SWLS_1"},
    {question: "The conditions of my life are excellent.", swls:"WB_SWLS_2"},
    {question: "I am satisfied with my life.", swls:"WB_SWLS_3"},
    {question: "So far I have gotten the important things I want in life.", swls:"WB_SWLS_4"},
    {question: "If I could live my life over, I would change almost nothing.", swls:"WB_SWLS_5"}
]
var Wellbeing_SWLS_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = jsPsych.timelineVariable('question');
        return text;
    },
    choices: ['1-Strongly disagree', '2-Disagree', '3-Slightly disagree', '4-Neither agree nor disagree', '5-Slightly agree', '6-Agree', '7-Strongly agree'],
    data: {WhatWasRating: jsPsych.timelineVariable('swls')},
    css_classes: ['trial'],
};
var Wellbeing_SWLS_trials = {
    timeline: [Wellbeing_SWLS_trial],
    timeline_variables: Wellbeing_SWLS_qs,
    randomize_order:true
};
/* append instructions to start of array */
var Q10_Wellbeing_SWLS_block = {
    timeline: [
        Q10_Wellbeing_SWLS_Instructions,
        Wellbeing_SWLS_trials
    ]
};

/* Q11 - Well-being - General Anxiety Disorder (GAD-9) */
var Q11_Wellbeing_GAD7_Instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = "Over the <u>last 2 weeks</u>, how often have you been bothered by any of the following problems?";
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
var Wellbeing_GAD7_qs = [
    {question: "Feeling nervous, anxious, or on edge", gad:"WB_GAD7_1"},
    {question: "Not being able to stop or control worrying", gad:"WB_GAD7_2"},
    {question: "Worrying too much about different things", gad:"WB_GAD7_3"},
    {question: "Trouble relaxing", gad:"WB_GAD7_4"},
    {question: "Being so restless that it is hard to sit still", gad:"WB_GAD7_5"},
    {question: "Becoming easily annoyed or irritable", gad:"WB_GAD7_6"},
    {question: "Feeling afraid as if something awful might happen", gad:"WB_GAD7_7"},
]
var Wellbeing_GAD7_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = "Over the <u>last 2 weeks</u>, how often have you been bothered by any of the following problems?<br><br>"+jsPsych.timelineVariable('question');
        return text;
    },
    choices: ['0-Not at all', '1-Several days', '2-More than half the days', '3-Nearly every day'],
    data: {WhatWasRating: jsPsych.timelineVariable('gad')},
    css_classes: ['trial'],
};
var Wellbeing_GAD7_trials = {
    timeline: [Wellbeing_GAD7_trial],
    timeline_variables: Wellbeing_GAD7_qs,
    randomize_order:true
};
var Wellbeing_GAD7_severity = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "If you checked off <u>any</u> problems, how <u>difficult</u> have these problems made it for you to do your work, take care of things at home, or get along with other people?",
    choices: ['0-Not difficult at all', '1-Somewhat difficult', '2-Very difficult', '3-Extremely difficult'],
    data: {WhatWasRating: "WB_GAD7_Severity"},
    css_classes: ['trial'],
};
/* append instructions and severity question to array */
var Q11_Wellbeing_GAD7_block = {
    timeline: [
        Q11_Wellbeing_GAD7_Instructions,
        Wellbeing_GAD7_trials,
        Wellbeing_GAD7_severity
    ]
};

/* Q12 - Well-being - Patient Health Questionnaire Depression Scale (PHQ-8) */
var Q12_Wellbeing_PHQ8_Instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = "Over the <u>last 2 weeks</u>, how often have you been bothered by any of the following problems?";
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
var Wellbeing_PHQ8_qs = [
    {question: "Little interest or pleasure in doing things", phq:"WB_PHQ8_1"},
    {question: "Feeling down, depressed, or hopeless", phq:"WB_PHQ8_2"},
    {question: "Trouble falling or staying asleep, or sleeping too much", phq:"WB_PHQ8_3"},
    {question: "Feeling tired or having little energy", phq:"WB_PHQ8_4"},
    {question: "Poor appetite or overeating", phq:"WB_PHQ8_5"},
    {question: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down", phq:"WB_PHQ8_6"},
    {question: "Trouble concentrating on things", phq:"WB_PHQ8_7"},
    {question: "Moving or speaking so slowly that other people could have noticed, or the opposite - being so fidgety or restless that you have been moving around a lot more than usual", phq:"WB_PHQ8_8"},
]
var Wellbeing_PHQ8_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = "Over the <u>last 2 weeks</u>, how often have you been bothered by any of the following problems?<br><br>"+jsPsych.timelineVariable('question');
        return text;
    },
    choices: ['0-Not at all', '1-Several days', '2-More than half the days', '3-Nearly every day'],
    data: {WhatWasRating: jsPsych.timelineVariable('phq')},
    css_classes: ['trial'],
};
var Wellbeing_PHQ8_trials = {
    timeline: [Wellbeing_PHQ8_trial],
    timeline_variables: Wellbeing_PHQ8_qs,
    randomize_order:true
};
var Wellbeing_PHQ8_severity = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "If you checked off <u>any</u> problems, how <u>difficult</u> have these problems made it for you to do your work, take care of things at home, or get along with other people?",
    choices: ['0-Not difficult at all', '1-Somewhat difficult', '2-Very difficult', '3-Extremely difficult'],
    data: {WhatWasRating: "WB_PHQ8_Severity"},
    css_classes: ['trial'],
    on_finish: function() {
        url = "https://script.google.com/macros/s/AKfycbzCipgh2sWsYpawQ8WT4r9WQSYVCZe5dEQiyrvBNqoJRdUrS_BLLtvXYfOJK2kkskBySQ/exec";
        jsPsychSheet.uploadPartialData(url, jsPsych.data.get().csv());
    }
};
/* append instructions and severity question to array */
var Q12_Wellbeing_PHQ8_block = {
    timeline: [
        Q12_Wellbeing_PHQ8_Instructions,
        Wellbeing_PHQ8_trials,
        Wellbeing_PHQ8_severity
    ]
};

/* Setup randomization for well-being measures (from Q10 to Q12) */ 
var Q10Q11Q12_blocks_unshuffled = [
    Q10_Wellbeing_SWLS_block,
    Q11_Wellbeing_GAD7_block,
    Q12_Wellbeing_PHQ8_block
];

/* use jsPsych.randomization.shuffle to randomize the order of the three blocks, then add the procedures to the timeline in random order */
var Q10Q11Q12_blocks_randomized = jsPsych.randomization.shuffle(Q10Q11Q12_blocks_unshuffled);

/* push randomized Q10, Q11, and Q12 blocks to timeline - NOTE TO SELF how to preserve order of this block within broader shuffled set*/
timeline.push(Q10Q11Q12_blocks_randomized[0]);
timeline.push(Q10Q11Q12_blocks_randomized[1]);
timeline.push(Q10Q11Q12_blocks_randomized[2]);

/* Q13 - Inclusion of Other in Self */
var Q13_InclusionOtherinSelf_Instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = "This next set of questions is about how much your sense of self is wrapped up in other "+ParGenPlural+".<p style='font-weight:normal;'>Thinking about how much your personal identity overlaps with other "+ParGenPlural+", please do your best to honestly evaluate yourself.";
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
var InclusionOtherinSelf_trial = {
    type: jsPsychHtmlButtonResponse,
    /* show image instead of button choices */
    button_html: '<img src=%choice%></img>',
    stimulus: function(){
        var text = "Please select the image that best represents the relationship between <u>yourself</u> and <span style='color:#2980b9;'><u> "+ParGenPlural+" in general</u></span>";
        return text;
    },
    choices: function(){
        if (pg==0){
            var pics = [
                'img/ios_women_0.png',
                'img/ios_women_1.png',
                'img/ios_women_2.png',
                'img/ios_women_3.png',
                'img/ios_women_4.png',
                'img/ios_women_5.png',
                'img/ios_women_6.png',
                'img/ios_women_7.png'];
            return pics;
        } else if (pg==1){
            var pics = [
                'img/ios_men_0.png',
                'img/ios_men_1.png',
                'img/ios_men_2.png',
                'img/ios_men_3.png',
                'img/ios_men_4.png',
                'img/ios_men_5.png',
                'img/ios_men_6.png',
                'img/ios_men_7.png'];
            return pics;
        };
    },
    data: {WhatWasRating: 'IncluOtherSelf'},
    css_classes: ['trial'],
};
/* append instructions to start of array */
var Q13_InclusionOtherinSelf_block = {
    timeline: [
        Q13_InclusionOtherinSelf_Instructions,
        InclusionOtherinSelf_trial
    ]
};

/* Q14 - Social Desirability Measures */
var Q14_SocialDesirability_Instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Please read each statement and select the number which shows how often the statement is true of you.",
    choices: ['NEXT'],
    data: {WhatWasRating:'INSTRUCTIONS'},
    css_classes: ['instructions'],
    post_trial_gap: 100,
    on_finish: function() {
        url = "https://script.google.com/macros/s/AKfycbzCipgh2sWsYpawQ8WT4r9WQSYVCZe5dEQiyrvBNqoJRdUrS_BLLtvXYfOJK2kkskBySQ/exec";
        jsPsychSheet.uploadPartialData(url, jsPsych.data.get().csv());
    }
};
var SocialDesirability_qs = [
    {question: "I care a lot about how other people think of me.", sd:"SocialDesirability_1"},
    {question: "I often agree with statements that I think are socially desirable even if they are not true for me.", sd:"SocialDesirability_2"}
]
var SocialDesirability_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = jsPsych.timelineVariable('question');
        return text;
    },
    choices: ['1-Not at all true', '2', '3', '4-Somewhat true', '5', '6', '7-Very true'],
    data: {WhatWasRating: jsPsych.timelineVariable('sd')},
    css_classes: ['trial'],
};
var SocialDesirability_trials = {
    timeline: [SocialDesirability_trial],
    timeline_variables: SocialDesirability_qs,
    randomize_order:true
};
/* append instructions to start of array */
var Q14_SocialDesirability_block = {
    timeline: [
        Q14_SocialDesirability_Instructions,
        SocialDesirability_trials
    ]
};

/* Q15 - Meta-Perceptions of Gender Identity */
var Q15_MetaPerceptions_Instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Thinking about how other people see you <u>in general</u> (not one specific person or group of people), please indicate how others view you.",
    choices: ['NEXT'],
    data: {WhatWasRating:'INSTRUCTIONS'},
    css_classes: ['instructions'],
    post_trial_gap: 100,
    on_finish: function() {
        url = "https://script.google.com/macros/s/AKfycbzCipgh2sWsYpawQ8WT4r9WQSYVCZe5dEQiyrvBNqoJRdUrS_BLLtvXYfOJK2kkskBySQ/exec";
        jsPsychSheet.uploadPartialData(url, jsPsych.data.get().csv());
    }
};
var MetaPerceptions_qs = [
    {question: "To what extent do other people view you as similar to a <u>typical</u> "+ParGenSingular+"?", meta:"MetaPercept_typical", choiceword:"typical"},
    {question: "To what extent do other people view you as gender-conforming? That is, expressing your gender in a way that aligns with societal norms?", meta:"MetaPercept_genderconform", choiceword:"gender-conforming"},
    {question: "To what extent do other people view you as similar to the <u>ideal</u> "+ParGenSingular+"?", meta:"MetaPercept_ideal", choiceword:"similar"},
    {question: "To what extent do other people view your gender the way you want them to?", meta:"MetaPercept_selfaligned", choiceword:""}
]
var MetaPerceptions_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = jsPsych.timelineVariable('question');
        return text;
    },
    choices: function(){
        var choicetext = ['1-Not at all '+jsPsych.timelineVariable(choiceword), '2', '3', '4-Somewhat '+jsPsych.timelineVariable(choiceword), '5', '6', '7-Very '+jsPsych.timelineVariable(choiceword)];
        return choicetext;
    },
    data: {WhatWasRating: jsPsych.timelineVariable('meta')},
    css_classes: ['trial'],
};
var MetaPerceptions_trials = {
    timeline: [MetaPerceptions_trial],
    timeline_variables: MetaPerceptions_qs,
    randomize_order:true
};
/* append instructions to start of array */
var Q15_MetaPerceptions_block = {
    timeline: [
        Q15_MetaPerceptions_Instructions,
        MetaPerceptions_trials
    ]
};

/* Q16 - First and Third Order Measures of Femininity and Masculinity */
var FirstThirdOrder_qs = [
    {question: "Feminine", meta:"fem", choiceword:"feminine"},
    {question: "Masculine", meta:"masc", choiceword:"masculine"},
]
var FirstOrder_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = "In general, how do you see yourself? <p style='font-weight:normal;'>Please answer using both the feminine and masculine scales.</p>"+jsPsych.timelineVariable('question');
        return text;
    },
    choices: function(){
        var choicetext = ['1-Not at all '+jsPsych.timelineVariable(choiceword), '2', '3', '4-Somewhat '+jsPsych.timelineVariable(choiceword), '5', '6', '7-Very '+jsPsych.timelineVariable(choiceword)];
        return choicetext;
    },
    data: {WhatWasRating: 'FirstOrder_'+jsPsych.timelineVariable('meta')},
    css_classes: ['trial'],
};
var ThirdOrder_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        var text = "In general, how do <u>most people</u> people see you?<p style='font-weight:normal;'>Please answer using both the feminine and masculine scales.</p>"+jsPsych.timelineVariable('question');
        return text;
    },
    choices: function(){
        var choicetext = ['1-Not at all '+jsPsych.timelineVariable(choiceword), '2', '3', '4-Somewhat '+jsPsych.timelineVariable(choiceword), '5', '6', '7-Very '+jsPsych.timelineVariable(choiceword)];
        return choicetext;
    },
    data: {WhatWasRating: 'ThirdOrder_'+jsPsych.timelineVariable('meta')},
    css_classes: ['trial'],
};
var FirstThirdOrder_trials = {
    timeline: [
        FirstOrder_trial,
        ThirdOrder_trial],
    timeline_variables: FirstThirdOrder_qs,
    randomize_order:true
};

/* Q16 - Ingroup Identification Scale */
var Q16_IngroupIdentification_Instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "Please indicate to what extent you agree or disagree with the following statements.",
    choices: ['NEXT'],
    data: {WhatWasRating:'INSTRUCTIONS'},
    css_classes: ['instructions'],
    post_trial_gap: 100,
    on_finish: function() {
        url = "https://script.google.com/macros/s/AKfycbzCipgh2sWsYpawQ8WT4r9WQSYVCZe5dEQiyrvBNqoJRdUrS_BLLtvXYfOJK2kkskBySQ/exec";
        jsPsychSheet.uploadPartialData(url, jsPsych.data.get().csv());
    }
};
var IngroupId_qs = [
    {question: "I often think about the fact that I am a "+ParGenSingular+".", ii:"IngroupId_1", question_nb: "I often think about the fact that I am "+customg+"."},
    {question: "The fact that I am a "+ParGenSingular+ "is an important part of my identity.", ii:"IngroupId_2", question_nb: "The fact that I am "+customg+" is an important part of my identity."},
    {question: "Being a "+ParGenSingular+" is an important part of how I see myself.", ii:"IngroupId_3", question_nb: "Being "+customg+" is an important part of how I see myself."},
]
var IngroupIdentification_trial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function(){
        if (customg=="null"){
            var text = jsPsych.timelineVariable('question');
            return text;
        } else {
            var text = jsPsych.timelineVariable('question_nb');
            return text;
        }
    },
    choices: ['1-Strongly disagree', '2-Disagree', '3-Slightly disagree', '4-Neither agree nor disagree', '5-Slightly agree', '6-Agree', '7-Strongly agree'],
    data: {WhatWasRating: jsPsych.timelineVariable('ii')},
    css_classes: ['trial'],
};
var IngroupIdentification_trials = {
    timeline: [IngroupIdentification_trial],
    timeline_variables: IngroupId_qs,
    randomize_order:true
};
/* append instructions to start of array */
var Q16_IngroupIdentification_block = {
    timeline: [
        Q16_IngroupIdentification_Instructions,
        IngroupIdentification_trials
    ]
};

/* Set up randomization from blocks Q7 to Q16 */
var Q7toQ16_blocks_unshuffled = [
    Q7_GlobalIdentity_block,
    Q8_GenderTypicality_block,
    Q9_PrototypeImportance_block,
    Q13_InclusionOtherinSelf_block,
    Q14_SocialDesirability_block,
    Q15_MetaPerceptions_block,
    Q16_IngroupIdentification_block,
];
/* use jsPsych.randomization.shuffle to randomize the order of the two blocks, then add the procedures to the timeline in random order */
var Q7toQ16_blocks_randomized = jsPsych.randomization.shuffle(Q7toQ16_blocks_unshuffled);
/* push randomized blocks to timeline */
timeline.push(Q7toQ16_blocks_randomized[0]);
timeline.push(Q7toQ16_blocks_randomized[1]);
timeline.push(Q7toQ16_blocks_randomized[2]);
timeline.push(Q7toQ16_blocks_randomized[3]);
timeline.push(Q7toQ16_blocks_randomized[4]);
timeline.push(Q7toQ16_blocks_randomized[5]);
timeline.push(Q7toQ16_blocks_randomized[6]);

/* start experiment */
jsPsych.run(timeline);