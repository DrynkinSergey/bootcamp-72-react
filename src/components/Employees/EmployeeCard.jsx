import s from './Employee.module.css'
export const EmployeeCard = ({ id, name, email, bio, skills }) => {
	return (
		<li className={s.userCard}>
			<h3>{name}</h3>
			<p>{email}</p>
			<p>{bio}</p>
			<ul className={s.skillList}>
				{skills.map(skill => (
					<li className={s.skillLabel} key={skill}>
						{skill}
					</li>
				))}
			</ul>
			<button className={s.btn}>Delete</button>
		</li>
	)
}
