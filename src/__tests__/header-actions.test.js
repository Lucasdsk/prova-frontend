import React from 'react'
import HeaderActions from './../components/header-actions'

describe("<HeaderActions />", () => {
  it("Render HeaderActions", () => {
    const HeaderActionsComponent = shallow(<HeaderActions />)
    expect(HeaderActionsComponent).toMatchSnapshot()
  })

  it("Number of notifications should match with the value passed by prop 'notificationCount'", () => {
    const HeaderActionsComponent = shallow(<HeaderActions notificationCount={3} />)
    expect(HeaderActionsComponent.find('.notifications-icon__counter').text()).toBe('3')
  })
})