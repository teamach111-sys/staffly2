import { useState } from 'react';

export const SidebarButton = ({ label, active, onClick, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            style={{ position: 'relative', width: '100%' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button 
                onClick={onClick}
                style={{
                    padding: '12px',
                    backgroundColor: active || isHovered ? '#b38b6d' : '#c4a484',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    width: '100%',
                    textAlign: 'left',
                    marginBottom: '5px',
                    transition: '0.3s'
                }}
            >
                {label.toUpperCase()}
            </button>

            {/* Sub-menu appearing on hover to the right */}
            {children && isHovered && (
                <div style={{
                    position: 'absolute',
                    left: '100%',
                    top: '0',
                    backgroundColor: '#e0e0e0',
                    padding: '5px',
                    boxShadow: '4px 0px 10px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    zIndex: 100,
                    minWidth: '200px',
                    borderLeft: '2px solid black'
                }}>
                    {children}
                </div>
            )}
        </div>
    );
};

export const SubMenuButton = ({ label, onClick }) => (
    <button 
        onClick={onClick}
        style={{
            padding: '10px',
            backgroundColor: '#b38b6d',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: 'bold',
            textAlign: 'left'
        }}
    >
        {label}
    </button>
);

export const SpaceSelector = ({ spaces, onSelect, currentSpace }) => (
    <select 
        value={currentSpace?.id || ''} 
        onChange={(e) => onSelect(spaces.find(s => s.id == e.target.value))}
        style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #b38b6d', cursor: 'pointer' }}
    >
        {spaces?.map(space => (
            <option key={space.id} value={space.id}>{space.city} - {space.space_name}</option>
        ))}
    </select>
);