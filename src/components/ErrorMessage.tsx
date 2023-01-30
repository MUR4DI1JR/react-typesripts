import React from 'react';

interface ErrorMesssageProps {
    error: string
}

const ErrorMessage = ({error}: ErrorMesssageProps) => {
    return (
        <p className="text-center text-red-600">{error}</p>
    );
};

export default ErrorMessage;