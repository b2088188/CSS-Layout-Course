import React from 'react';
import styled from 'styled-components/macro';

function Practice22() {
	return (
		<div>
			<div
				css={`
					max-width: 120rem;
					margin: auto;
					display: flex;
					padding: 10rem 0;
				`}
			>
				<h1
					css={`
						text-align: end;
						flex: 0 0 40rem;
						background: #d5c7b9;
						padding: 0 1.5rem;
						&:after {
							content: '';
							display: block;
							width: 6.4rem;
							height: 4px;
							background: #000;
							margin-left: auto;
						}
					`}
				>
					CSS Coke is awesome
				</h1>
				<div
					css={`
						padding: 1.5rem;
						flex: 0 0 80rem;
						column-count: 2;
						column-gap: 3rem;
					`}
				>
					<p>
						Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolorum
						cupiditate deleniti commodi ad ratione eius, veniam. Porro, sunt. Assumenda ipsa
						nihil ducimus necessitatibus praesentium quibusdam laborum nobis aliquam
						doloremque eaque quam doloribus hic tempora voluptates non, repudiandae veritatis
						impedit tenetur, totam ex inventore temporibus dolore aspernatur? Quis recusandae,
						optio?
					</p>
					<p>
						Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolorum
						cupiditate deleniti commodi ad ratione eius, veniam. Porro, sunt. Assumenda ipsa
						nihil ducimus necessitatibus praesentium quibusdam laborum nobis aliquam
						doloremque eaque quam doloribus hic tempora voluptates non, repudiandae veritatis
						impedit tenetur, totam ex inventore temporibus dolore aspernatur? Quis recusandae,
						optio?
					</p>
				</div>
			</div>
		</div>
	);
}

export default Practice22;
