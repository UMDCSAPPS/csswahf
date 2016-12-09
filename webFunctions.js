//Marcelo McAndrew

//require dependencies
var Nightmare = require('nightmare');
//create new nightmare object
var nightmare = Nightmare({show:true});
var fs = require('fs')
var path = require('path')

//waft url
var wahf = "https://docs.google.com/forms/d/e/1FAIpQLSdaZ4hnJpch3y76n2_PcLGQEpQUjbDDstGgCGJ3AnzMlNBTTw/viewform"

//find JSON object
var contents = fs.readFileSync(path.resolve()+'/temp.json');

//parse contents e.g temp.fullname, temp.year
var temp = JSON.parse(contents);

  //go to the wahf form
  nightmare.goto(wahf)

    //take screenshot
    .screenshot('test.png')

    //Enter Name
    .type('input:nth-of-type(1)',temp.fullname)

    //Select year
    .click('label:nth-of-type('+temp.year+')')

    //insert the team leader
    .type('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(7) > div.freebirdFormviewerViewItemsTextItemWrapper > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input',temp.teamleader)

    //team leader contacted you yes
    .click('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(8) > div:nth-child(2) > div > content > div > label:nth-child(1) > div > div.docssharedWizToggleLabeledContent > div > span')

    //team leader contacted you in person
    .click('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(9) > div:nth-child(2) > div > content > div > label:nth-child(1) > div > div.docssharedWizToggleLabeledContent > div > span')

    //attended seminar yes
    .click('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(10) > div:nth-child(2) > div > content > div > label:nth-child(1) > div > div.docssharedWizToggleLabeledContent > div > span')

    //insert study hours
    .type('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(11) > div.freebirdFormviewerViewItemsTextItemWrapper > div > div.quantumWizTextinputPaperinputMainContent.exportContent > div > div.quantumWizTextinputPaperinputInputArea > input',temp.study)

    //quiz grades
    .type('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(12) > div.quantumWizTextinputPapertextareaEl.modeLight.freebirdFormviewerViewItemsTextLongText.freebirdThemedInput > div.quantumWizTextinputPapertextareaMainContent.exportContent > div.quantumWizTextinputPapertextareaContentArea.exportContentArea > textarea',temp.quizgrades)

    //did not miss class
    .click('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(13) > div:nth-child(2) > div > content > div > label:nth-child(2) > div > div.docssharedWizToggleLabeledContent > div > span')

    //did not miss assignments
    .click('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(15) > div:nth-child(2) > div > content > div > label:nth-child(2) > div > div.docssharedWizToggleLabeledContent > div > span')

    //insert estimate how you are doing this semester
    .type('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(17) > div.quantumWizTextinputPapertextareaEl.modeLight.freebirdFormviewerViewItemsTextLongText.freebirdThemedInput > div.quantumWizTextinputPapertextareaMainContent.exportContent > div.quantumWizTextinputPapertextareaContentArea.exportContentArea > textarea',temp.class)

    //changing major no
    .click('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewItemList > div:nth-child(18) > div:nth-child(2) > div > content > div > label:nth-child(2) > div > div.docssharedWizToggleLabeledContent > div > span')

    //submit
    //.click('#mG61Hd > div > div.freebirdFormviewerViewFormContent > div.freebirdFormviewerViewNavigationNavControls > div.freebirdFormviewerViewNavigationButtonsAndProgress > div > div > content > span')

  .end()

  .then(function (result) {
    // console.log(result)
  })
  .catch(function (error) {
    //console.error('Search failed:', error);
  });
