import React,{ createContext, useContext, useState } from 'react';

const Test =  createContext(); 

const TestContext = ({children}) => {

	const [route, setRoute] = useState("login");
	const [token, setToken] = useState("");
	const [refreshToken, setRrefreshToken] = useState("");

	return (
		<Test.Provider value={{ route, setRoute, token, setToken, refreshToken, setRrefreshToken }}>
			{children}
		</Test.Provider>
	)
}

export default TestContext;

export const TestState = () => {
	return useContext(Test);
}