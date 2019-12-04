const REPLACE_TABLE = {
  addCardLink: 'components.Card',
  customLaneHeader: 'components.LaneHeader',
  newLaneTemplate: 'components.NewLaneSection',
  newCardTemplate: 'components.NewCardForm',
  children: 'components.Card',
  customCardLayout: 'components.Card',
  addLaneTitle: '`t` function with key "Add another menu"',
  addCardLink: '`t` function with key "Click to add menu child"',
}

const warn = (prop) => {
  const use = REPLACE_TABLE[prop]
  console.warn(`react-trello-menu property '${prop}' is removed. Use '${use}' instead. More - https://github.com/andreioprisan/react-trello-menu/blob/master/UPGRADE.md`)
}

export default (props) => {
  Object.keys(REPLACE_TABLE).forEach((key) => {
    if (props.hasOwnProperty(key)) {
      warn(key)
    }
  })
}
