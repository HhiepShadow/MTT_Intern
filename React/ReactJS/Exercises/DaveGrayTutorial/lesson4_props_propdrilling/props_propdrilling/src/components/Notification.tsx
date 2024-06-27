import React from "react";

const Notification = ({ length }: { length: number }) => {
    return (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'navy',
            color: 'white',
        }}
    >
            {length ? `${length} list items` : 'Your list is empty'}
        </div>
    );
};

export default Notification;
