import { PropTypes } from 'prop-types';

export const Button = ({ name, icon, onClick, bg, bPad, color, bRad }) => {
    return (
        <button style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
            fontFamily: 'inherit',
            outline: 'none',
            border: 'none',
            fontSize: 'inherit',
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            cursor: 'pointer',
            transition: 'all 0.4s ease-in-out',
        }} onClick={onClick}>
            {icon} {name}
        </button>
    );
}

Button.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.func,
    onClick: PropTypes.func,
    bg: PropTypes.string,
    bPad: PropTypes.string,
    color: PropTypes.string,
    bRad: PropTypes.string,
}