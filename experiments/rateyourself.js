/* initialize jsPsych */
var jsPsych = initJsPsych({
    default_iti: 50,
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
/* instructions */
var welcome = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-size:22px;font-weight:bold;">Think about yourself in general.<br> Please do your best to honestly evaluate yourself on the following traits.</p>',
    choices: ['NEXT'],
    data: {WhatWasRating:'INSTRUCTIONS'},
    post_trial_gap: 100
};
timeline.push(welcome);

var RateYourself_com = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-weight:bold;">How competent are you? That is, how capable are you at doing things in general?</p>',
    choices: ['1-Not at all competent', '2', '3', '4-Neutral', '5', '6', '7-Very competent'],
    data: {WhatWasRating:'RateYourself_com'}
};

var RateYourself_int = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-weight:bold;">How intelligent are you? That is, how easily do you learn or understand new things or problems in general?</p>',
    choices: ['1-Not at all intelligent', '2', '3', '4-Neutral', '5', '6', '7-Very intelligent'],
    data: {WhatWasRating:'RateYourself_int'}
};

var RateYourself_war = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-weight:bold;">How warm are you? That is, how kind and loving are you in general?</p>',
    choices: ['1-Not at all warm', '2', '3', '4-Neutral', '5', '6', '7-Very warm'],
    data: {WhatWasRating:'RateYourself_war'}
};

var RateYourself_fri = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-weight:bold;">How friendly are you? That is, how sociable and pleasant are you in general?</p>',
    choices: ['1-Not at all friendly', '2', '3', '4-Neutral', '5', '6', '7-Very friendly'],
    data: {WhatWasRating:'RateYourself_fri'}
};

var RateYourself_hon = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-weight:bold;">How honest are you? That is, how sincere and truthful are you in general?</p>',
    choices: ['1-Not at all honest', '2', '3', '4-Neutral', '5', '6', '7-Very honest'],
    data: {WhatWasRating:'RateYourself_hon'}
};

var RateYourself_tru = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-weight:bold;">How trustworthy are you? That is, how much can you be relied upon as honest and truthful in general?</p>',
    choices: ['1-Not at all trustworthy', '2', '3', '4-Neutral', '5', '6', '7-Very trustworthy'],
    data: {WhatWasRating:'RateYourself_tru'}
};

var RateYourself_hea = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-weight:bold;">How healthy are you? That is, how is your physical and mental condition in general?</p>',
    choices: ['1-Not at all healthy', '2', '3', '4-Neutral', '5', '6', '7-Very healthy'],
    data: {WhatWasRating:'RateYourself_hea'}
};

var RateYourself_att = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-weight:bold;">How attractive are you? That is, how physically appealing do you look to people in general?</p>',
    choices: ['1-Not at all attractive', '2', '3', '4-Neutral', '5', '6', '7-Very attractive'],
    data: {WhatWasRating:'RateYourself_att'}
};

var RateYourself_dom = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-weight:bold;">How dominant are you? That is, how powerful, controlling, or commanding are you in general?</p>',
    choices: ['1-Not at all dominant', '2', '3', '4-Neutral', '5', '6', '7-Very dominant'],
    data: {WhatWasRating:'RateYourself_dom'}
};

var RateYourself_str = {
    type: jsPsychHtmlButtonResponse,
    stimulus: '<p style="font-weight:bold;">How physically strong are you? That is, how capable are you of doing physically demanding tasks in general?</p>',
    choices: ['1-Not at all strong', '2', '3', '4-Neutral', '5', '6', '7-Very strong'],
    data: {WhatWasRating:'RateYourself_str'}
};

/* define task list */
var TaskList = {
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
timeline.push(TaskList);

/* start experiment */
jsPsych.run(timeline);