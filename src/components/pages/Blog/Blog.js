import React from 'react';
import './Blog.css';

const Blog = () => {
	return (
		<div className="Blog-content">
			<div className="Project">
				<table className="Table-Style">
					<tr>
						<th>Project Name</th>
						<th>Description</th>
						<th>Technologies Used</th>
						<th>Deployment</th>
					</tr>
						<td>HOPE APP</td>
						<td>App to keep track of individual donations in $$ and Hours</td>
						<td>React, Node, JSX, Chart, Axiios, Sequelize</td>
						<td><a href="https://shielded-retreat-54823.herokuapp.com/" target="_blank">https://shielded-retreat-54823.herokuapp.com/</a></td>
					<tr>
					</tr>
				</table>
			</div>
		</div>
	);
};

export default Blog;