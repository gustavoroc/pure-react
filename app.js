const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation)
    ])
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {className: 'title'}, "React is rendered"),
        React.createElement(Person, { name: 'Yihua', occupation: 'Instructor'}, null),
        React.createElement(Person, { name: 'Andrei', occupation: 'Lead instructor'}, null),
        React.createElement(Person, { name: 'Gustavo', occupation: 'Student'}, null)
    ])
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(App));