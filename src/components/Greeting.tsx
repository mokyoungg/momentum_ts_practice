import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const USER_LS = 'user_name';

const Greeting: React.FC = () => {
  const [showing, setShowing] = useState<boolean>(true);
  const [name, setName] = useState<string>('');
  const [submit, setSubmit] = useState<boolean>(false);

  useEffect(() => {
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser) {
      setShowing(false);
    } else {
      setShowing(true);
      setName('');
    }
  }, [submit]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.length > 0) {
      localStorage.setItem(USER_LS, name);
      setSubmit(true);
    }
  };

  const deleteName = () => {
    localStorage.removeItem(USER_LS);
    setSubmit(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const renderGreeting = (): string | null => {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser) {
      return `Hello ${currentUser}`;
    } else {
      return null;
    }
  };

  return (
    <GreetingWrap>
      <GreetingForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="What is your name?"
          onChange={handleChange}
          value={name}
          showing={showing}
        />
      </GreetingForm>
      <GreetingMessage showing={showing}>
        {renderGreeting()}
        <button onClick={() => deleteName()}>Change Name</button>
      </GreetingMessage>
    </GreetingWrap>
  );
};

export default Greeting;

const GreetingWrap = styled.div``;

const GreetingForm = styled.form``;

const Input = styled.input`
  display: ${({ showing }: { showing: boolean }) =>
    showing ? 'block' : 'none'};
  width: 300px;
  margin: 0 auto;
  height: 50px;
  font-size: 20px;
  color: #ffffff;
  background: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid #ffffff;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ffffff;
  }
  :-ms-input-placeholder {
    color: #ffffff;
  }
  &:focus {
    outline: none;
    background: transparent;
  }
`;

const GreetingMessage = styled.p`
  font-size: 35px;
  font-weight: bold;
  width: 500px;
  margin: 0 auto;
  text-align: center;

  display: ${({ showing }: { showing: boolean }) =>
    showing ? 'none' : 'flex'};
  justify-content: space-around;
  color: #ffffff;
`;
