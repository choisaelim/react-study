import React , {useState} from 'react';

const EventPracticeFunction = () => {
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');

    // const onChangeUserName = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);

    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const {username, message} = form;

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
    }

    const onClick = () => {
        alert(username + ' : ' + message);
        // setUsername('');
        // setMessage('');
        setForm({
            username: '',
            message: ''
        });
    };

    const onKeyPress = e => {
        if(e.key === 'Enter'){
            onClick();
        }
    };


    return (
        <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="username"
                    placeholder = "User name"
                    value={username}
                    onChange={onChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder = "Input Something"
                    value={message}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                />
                <button onClick={onClick}>Confirm</button>
            </div>
    );
};

export default EventPracticeFunction;