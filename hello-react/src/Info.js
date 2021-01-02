import React, {useReducer} from 'react';
import useInputs from './useInputs';

function reducer (state, action){
    console.log(action.value);
    return {
        ...state,
        [action.name] : action.value
    };
}
const Info = () => {
    // const [state, dispatch] = useReducer(reducer, {
    //     name : '',
    //     nickname: ''
    // });

    const [state, onChange] = useInputs({
        name : '',
        nickname: ''
    });

    const {name, nickname} = state;

    //replaced by useInputs
    // const onChange = e => {
    //     dispatch(e.target);
    // }


    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');

    // useEffect(() => {
    //     console.log('effect');
    //     return () => {
    //         console.log('cleanup');
    //     }
    // },[name]); //when name changed
    //clean up > effect 순서

    // const onChangeName = e => {
    //     setName(e.target.value);
    // }

    // const onChangeNickName = e => {
    //     setNickname(e.target.value);
    // }
    return (
        <div>
            <div>
                <input value={name} onChange={onChange}/>
                <input value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b> name : </b>{name}
                </div>
                <div>
                    <b> nickname : </b>{nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;