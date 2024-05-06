Blockly.JavaScript['external_dataset'] = function (block) {
    // Retrieve the entered file name from the block's field
    var fileName = block.getFieldValue('FILENAME');
    // Print the file name to the console
    console.log('File name entered:', fileName);
    // Return the file name as the block's output
   // return fileName;
    var code = 'console.log(fileName);';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.javascript.ORDER_NONE];

};
// javascript.javascriptGenerator.forBlock['external_dataset'] = function(block, generator) {
//     var text_name = block.getFieldValue('NAME');
//     // TODO: Assemble javascript into code variable.
//     var code = '...';
//     // TODO: Change ORDER_NONE to the correct strength.
//     return [code, Blockly.javascript.ORDER_NONE];
//   };