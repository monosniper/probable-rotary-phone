import React, {useEffect, useState} from "react";

const CryptoButton = ({name, icon, onClick, crypto}) => {
    const [isActive, setIsActive] = useState(name === crypto)

    useEffect(() => {
        setIsActive(name === crypto)
    }, [crypto])

    return <div onClick={() => onClick(name)} className={'crypto-btn ' + (isActive ? 'active' : '')}>
        <div className={'crypto-btn__icon'}><img
            src={icon}
            alt={name}
        /></div>
        <div className={'crypto-btn__name'}>{name}</div>
    </div>
}

export default CryptoButton