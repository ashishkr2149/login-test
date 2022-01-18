import React,{ createContext, useContext, useState } from 'react';

const Test =  createContext(); 

const TestContext = ({children}) => {

	const [route, setRoute] = useState("login");

	return (
		<Test.Provider value={{ route,setRoute }}>
			{children}
		</Test.Provider>
	)
}

export default TestContext;

export const TestState = () => {
	return useContext(Test);
}