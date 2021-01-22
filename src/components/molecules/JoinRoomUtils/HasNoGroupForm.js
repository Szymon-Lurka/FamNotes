import React from 'react';
import Input from '../../atoms/Input/Input';
import {
    WarningInput,
    WarningLabel,
} from '../../../views/styles/JoinRoomStyles';


const HasNoGroupForm = ({ isFailed, onChange, onBlur, value }) => {
    return (
        <>
            {isFailed ? (
                <WarningLabel>
                    Tag jest niepoprawny!
                    <WarningInput
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="Wpisz tag"
                        name="tag"
                    />
                </WarningLabel>
            ) : (
                    <Input
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="Wpisz tag"
                        name="tag"
                    />
                )}
        </>
    )
};

export default HasNoGroupForm;