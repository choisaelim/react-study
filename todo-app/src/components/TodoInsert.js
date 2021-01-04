import React, {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';

const TodoInsert = () => {
    const [value, setValue] = useState('');


    return (
        <form className="TodoInsert" >
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;