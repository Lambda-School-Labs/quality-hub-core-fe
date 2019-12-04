// Libraries
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

//Icons
// import grid from '../../../globalIcons/grid.svg';
import favicon from '../../../globalIcons/favicon.svg';
import Icon from '../../../globalIcons/Icon';
import { ICONS } from '../../../globalIcons/iconConstants';

const GridDropdown = props => {
	const node = useRef();
	const [open, setOpen] = useState(false);

	const handleOutsideClick = e => {
		if (node.current.contains(e.target)) {
			return;
		}
		setOpen(false);
	};

	useEffect(() => {
		if (open) {
			document.addEventListener('mousedown', handleOutsideClick);
		} else {
			document.removeEventListener('mousedown', handleOutsideClick);
		}
	}, [open]);

	return (
		<div ref={node}>
			<div className='grid-menu grid-icon' onClick={() => setOpen(!open)}>
				<Icon icon={ICONS.GRID} width={24} height={24} />
			</div>

			{open && (
				<div className='dropdown-grid-content dropdown-icons'>
					<div className='test-css-grid'>
						<Link to='/' className='box' onClick={() => setOpen(false)}>
							<img
								src={favicon}
								height='24px'
								width='24px'
								alt='ResumeQ icon'
							/>
							<p>CodingQ</p>
						</Link>

						<Link to='/interviewq' className='box' onClick={() => setOpen(false)}>
							<Icon icon={ICONS.INTERVIEWQ} width={24} height={24} />
							<p>InterviewQ</p>
						</Link>

						<Link to='/' className='box' onClick={() => setOpen(false)}>
							<Icon icon={ICONS.RESUMEQ} width={24} height={22} />
							<p>ResumeQ</p>
						</Link>

						<Link to='/' className='box' onClick={() => setOpen(false)}>
							<Icon icon={ICONS.DESIGNQ} width={24} height={20} />
							<p>DesignQ</p>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default GridDropdown;
