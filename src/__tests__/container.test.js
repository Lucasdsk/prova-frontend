import React from 'react'
import Container from './../components/container'

describe('<Container />', () => {
  
  it("Render Container", () => {
    const ContainerComponent = shallow(<Container />)
    expect(ContainerComponent).toMatchSnapshot()
  })

  it("Should render a children when it's passed", () => {
    const ContainerComponent = shallow(<Container>
      <p>Children</p>
    </Container>)
    expect(ContainerComponent.find('p').length).toBe(1)
  })

  describe("Test classNames according prop passed", () => {
    it("Shouldn't have class 'container--primary' when 'primary' prop is 'false", () => {
      const ContainerComponent = shallow(<Container primary={false} />)
      expect(ContainerComponent.hasClass('container--primary')).toBe(false)
    })

    it("Should have class 'container--fluid' when have 'fluid' prop", () => {
      const ContainerComponent = shallow(<Container fluid />)
      expect(ContainerComponent.hasClass('container--fluid')).toBe(true)
    })

    it("Should have class 'container--no-borders' when have 'noBorders' prop", () => {
      const ContainerComponent = shallow(<Container noBorders />)
      expect(ContainerComponent.hasClass('container--no-borders')).toBe(true)
    })

    it("Should have class 'container--no-border-top' when have 'noBorderTop' prop", () => {
      const ContainerComponent = shallow(<Container noBorderTop />)
      expect(ContainerComponent.hasClass('container--no-border-top')).toBe(true)
    })

    it("Should have class 'container--no-border-right' when have 'noBorderRight' prop", () => {
      const ContainerComponent = shallow(<Container noBorderRight />)
      expect(ContainerComponent.hasClass('container--no-border-right')).toBe(true)
    })

    it("Should have class 'container--no-border-bottom' when have 'noBorderBottom' prop", () => {
      const ContainerComponent = shallow(<Container noBorderBottom />)
      expect(ContainerComponent.hasClass('container--no-border-bottom')).toBe(true)
    })

    it("Should have class 'container--no-border-left' when have 'noBorderLeft' prop", () => {
      const ContainerComponent = shallow(<Container noBorderLeft />)
      expect(ContainerComponent.hasClass('container--no-border-left')).toBe(true)
    })

  })
})