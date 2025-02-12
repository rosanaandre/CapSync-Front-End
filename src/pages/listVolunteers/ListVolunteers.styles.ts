import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;

  .box {
    display: flex;
    flex-direction: column;
    width: 40%;

    margin: 0 auto;
  }

  h1 {
    padding-bottom: 18px;
    border-bottom: 1px solid #e4e4e4;
    text-align: center;
  }

  label {
    margin-top: 36px;

  }

  .filter-input {
    background-color: #e4e4e4;
    display: flex;
    align-items: center;
    padding: 8px 15px;
    border-radius: 8px;
    width: 600px;

    input {
      background-color: transparent;
      flex: 1;
      height: 40px;
      border: 0;
      padding: 0 8px;
      color: #000;
      font-size: 16px;

      &:focus {
        outline: none;
      }
    }
  }
`;

export const Table = styled.div`

  .table {
    font-size: 22px;

    margin: 72px 0 15px 0;
    font-weight: bold;
    padding: 10px 40px;

    border-bottom: 1px solid #333;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    :nth-child(2) {
      margin-left: 4.2rem;
    }
  }
`;
