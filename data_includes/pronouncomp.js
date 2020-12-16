var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle(startsWith("cond")))));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
    },
    "AcceptabilityJudgment", {
        as: ["1", "2"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
        hasCorrect: true
    },
    "FlashSentence", {
        transfer: "click"
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    //["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],

    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).

    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],

    // The first question will be chosen if the first sentence from the previous two items is chosen;
    // the second question will be chosen if the second sentence from the previous pair of items is chosen.
    [["cond-UO",1], "AcceptabilityJudgment", {s: "Jake went to the library with Sarah. She checked out books about daxes."},
                     "Question",       {q: "Who checked out books about daxes?",
                                  as: ["Jake?",
                                       "Sarah?",
                                       "Someone else?"]}],
    [["cond-UO",2], "AcceptabilityJudgment", {s: "Susan played tag with Phillip. He dashed across the reak."},
                     "Question",       {q: "Who dashed across the reak?",
                                  as: ["Susan?",
                                       "Phillip?",
                                       "Someone else?"]}],
     [["cond-UO",3], "AcceptabilityJudgment", {s: "Bruce went to the store with Emily. She bought some blicks. "},
                     "Question",       {q: "Who bought some blicks?",
                                  as: ["Bruce?",
                                       "Emily?",
                                       "Someone else?"]}],
     [["cond-UO",4], "AcceptabilityJudgment", {s: "Elizabeth is running track with Derek. He tripped on some daxes."},
                     "Question",       {q: "Who tripped on some daxes?",
                                  as: ["Elizabeth?",
                                       "Derek?",
                                       "Someone else?"]}],
    [["cond-US",1], "AcceptabilityJudgment", {s: "Jake went to the library with Sarah. He checked out books about daxes."},
                     "Question",       {q: "Who checked out books about daxes?",
                                  as: ["Jake?",
                                       "Sarah?",
                                       "Someone else?"]}],
     [["cond-US",2], "AcceptabilityJudgment", {s: "Susan played tag with Phillip. She dashed across the reak."},
                     "Question",       {q: "Who dashed across the reak?",
                                  as: ["Susan?",
                                       "Phillip?",
                                       "Someone else?"]}],
     [["cond-US",3], "AcceptabilityJudgment", {s: "Bruce went to the store with Emily. He bought some blicks."},
                     "Question",       {q: "Who bought some blicks?",
                                  as: ["Bruce?",
                                       "Emily?",
                                       "Someone else?"]}],
     [["cond-US",4], "AcceptabilityJudgment", {s: "Elizabeth is running track with Derek. She tripped on some daxes."},
                     "Question",       {q: "Who tripped on some daxes?",
                                  as: ["Elizabeth?",
                                       "Derek?",
                                       "Someone else?"]}],
   [["cond-AA",1], "AcceptabilityJudgment", {s: "Jake went to the library with Sarah. She checked out books about daxes."},
                     "Question",       {q: "Who checked out books about daxes?",
                                  as: ["Jake?",
                                       "Sarah?",
                                       "Someone else?"]}],
    [["cond-AB",1], "AcceptabilityJudgment", {s: "Jake went to the library with Sarah. He checked out books about daxes."},
                     "Question",       {q: "Who checked out books about daxes?",
                                  as: ["Jake?",
                                       "Sarah?",
                                       "Someone else?"]}],

];
