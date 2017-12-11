import React from 'react'
import UserDescription from './../components/user-description'

describe("<UserDescription>", () => {
  it("Render UserDescription", () => {
    const UserDescriptionComponent = shallow(<UserDescription />)
    expect(UserDescriptionComponent).toMatchSnapshot()
  })

  it("Should have a name", () => {
    const UserDescriptionComponent = shallow(<UserDescription name="Usuario" />)
    expect(UserDescriptionComponent.find('.user-description__name').text()).toBe('Usuario')
  })

  it("Should have options when the props 'showOptions', 'options' and the state 'optionsVisible' is 'true'", () => {
    const CustomOptions = () => (<div className="customOptions">Options</div>)
    const UserDescriptionComponent = shallow(<UserDescription
      name="Usuario"
      showOptions
      options={<CustomOptions />}
    />)
    
    expect(UserDescriptionComponent.find('.user-description__options-wrapper').length).toBe(1)
    UserDescriptionComponent.simulate('click')
    expect(UserDescriptionComponent.state().optionsVisible).toBe(true)
    expect(UserDescriptionComponent.find('.user-description__options-container').length).toBe(1)
    expect(UserDescriptionComponent.find('.user-description__options').length).toBe(1)
    expect(UserDescriptionComponent.contains(<CustomOptions/>)).toBe(true)
  })
})
