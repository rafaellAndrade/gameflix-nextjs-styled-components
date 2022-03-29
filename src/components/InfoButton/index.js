import styled from 'styled-components';

export default styled.button`
  display: flex;
  align-items: center; 
  justify-content: flex-start;
  width: 110px;
  height: 30px;
  background-color: rgba(0, 0, 0, .50);
  border: none;
  color: white;
  border: 1px solid gray;

  padding:15px 10px;
  margin-right: 15px;
  font-size: 12px;

  cursor: pointer;
  transition: .3s ease all;
  :hover {
    background-color: white;
    color: black;
  }

  span {    
    padding-left: 10px;
  }
  
`;