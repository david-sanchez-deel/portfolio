'use strict'

const constants = {
  stage: {
    instance: null,
    width: 800,
    height: 800,
    columns: 40,
    rows: 40,
    squareWidth: 0,
    squareHeight: 0,
  },
};
constants.stage.squareWidth = constants.stage.width / constants.stage.columns;
constants.stage.squareHeight = constants.stage.height / constants.stage.rows;
export default constants
