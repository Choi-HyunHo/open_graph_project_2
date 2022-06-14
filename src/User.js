import styled from 'styled-components'

const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  padding: 16px;
`

const UserInfo = styled.div`
  margin: 0 5px;
`

const User = ({ left, right }) => {
  return (
    <UserContainer>
      <UserInfo>
        <h4>{left}</h4>
      </UserInfo>
      <UserInfo>
        <h4>{right}</h4>
      </UserInfo>
    </UserContainer>
  )
}

export default User
