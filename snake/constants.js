'use strict'

const constants = {
  stage: {
    width: 400,
    height: 400,
    columns: 10,
    rows: 10,
    squareWidth: 0,
    squareHeight: 0,
  },
};
constants.stage.squareWidth = constants.stage.width / constants.stage.columns;
constants.stage.squareHeight = constants.stage.height / constants.stage.rows;
export default constants
