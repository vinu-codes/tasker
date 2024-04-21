import styled, { css } from 'styled-components'
import { media } from '@common/Theme/media'

const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${media.sm`
  max-width: 480px;
  margin: 0 auto;`}
  ${media.md`
  width: 100%;
  margin: 0 auto;
  max-width: 768px;`}
  ${media.lg`
  max-width: 1024px;`}
`

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 5px 1.5rem rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 100%;
  h4.category-label {
    margin: 0;
    font-weight: normal;
    padding-bottom: 8px;
    &:first-letter {
      text-transform: uppercase;
    }
  }
  button {
    margin-left: auto;
  }
  h3.heading {
    margin: 0;
    font-weight: normal;
    font-size: 20px;
  }
`

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0 8px 0;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    transform: rotate(180deg) scale(1.5);
    cursor: pointer;
    path {
      fill: black;
    }
  }
`

const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const List = styled.li`
  user-select: none;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid black;
  padding: 8px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 8px;
  border-radius: 12px;
  /* border-bottom: 0; */
  &:last-child {
    border-bottom: 1px solid black;
  }
  &:hover {
    background: #e0e0e0;
  }
  &:first-of-type {
    margin-top: 0;
  }
  button {
    cursor: pointer;
  }
  span.label {
    margin-left: 8px;
  }
  span.date-label {
    font-size: 12px;
    line-height: 1.5;
    color: grey;
    padding: 1px 0 0 8px;
  }
  span.check-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    svg.CHECKBOX {
      rect {
        stroke: black;
      }
    }
  }
`

const LabelArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-left: 8px;
`

const Controls = styled.div`
  display: flex;
  margin-left: auto;
  button.detail-button {
    border-radius: 50%;
    margin-left: 8px;
    svg {
      transform: rotate(90deg);
      path {
        fill: black;
      }
    }
  }
  svg.MORE {
    path {
      stroke: black;
    }
  }
`

const CategoryGroup = styled.div`
  margin-bottom: 16px;
`

const StyledSpan = styled.span`
  display: inline-block;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 2px;
  border-radius: 4px 4px 0 0;
  ${(props) =>
    props.dynamicColor &&
    css`
      background-color: ${props.dynamicColor};
    `}
`
export {
  HomeWrapper,
  HomeContainer,
  HeadingContainer,
  Group,
  List,
  IconContainer,
  Controls,
  CategoryGroup,
  StyledSpan,
  LabelArea,
  Heading,
}
