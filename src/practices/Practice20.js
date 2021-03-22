import React from 'react';
import styled from 'styled-components/macro';

const Practice20 = () => {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				min-height: 100vh;
				background: #edece1;
			`}
		>
			<ul
				css={`
					width: 96rem;
					margin: auto;

					display: grid;
					grid-template-columns: repeat(4, 24rem);
					grid-template-rows: 24rem;
					grid-auto-rows: 24rem;
					grid-gap: 1rem;
					transform: rotate(45deg);
					& > *:hover {
						color: #fff;
						background: #000;
					}
				`}
			>
				<li
					css={`
						background: #3ed0cd;
						grid-row: 1/2;
						grid-column: 3/4;
						display: flex;
						justify-content: center;
						align-items: center;
						& > * {
							transform: rotate(-45deg);
							font-size: 3rem;
						}
					`}
				>
					<span>text</span>
				</li>
				<li
					css={`
						background: #b2e086;
						grid-row: 1/2;
						grid-column: 4/5;
						display: flex;
						justify-content: center;
						align-items: center;
						& > * {
							transform: rotate(-45deg);
							font-size: 3rem;
						}
					`}
				>
					<span>text</span>
				</li>
				<li
					css={`
						background: #ef8899;
						grid-row: 2/3;
						grid-column: 2/3;
						display: flex;
						justify-content: center;
						align-items: center;
						& > * {
							transform: rotate(-45deg);
							font-size: 3rem;
						}
					`}
				>
					<span>text</span>
				</li>
				<li
					css={`
						background: #fc7b51;
						grid-row: 2/3;
						grid-column: 3/4;
						display: flex;
						justify-content: center;
						align-items: center;
						& > * {
							transform: rotate(-45deg);
							font-size: 3rem;
						}
					`}
				>
					<span>text</span>
				</li>
				<li
					css={`
						background: #2fccf9;
						grid-row: 2/3;
						grid-column: 4/5;
						display: flex;
						justify-content: center;
						align-items: center;
						& > * {
							transform: rotate(-45deg);
							font-size: 3rem;
						}
					`}
				>
					<span>text</span>
				</li>
				<li
					css={`
						background: #5f539b;
						grid-row: 3/4;
						grid-column: 1/2;
						display: flex;
						justify-content: center;
						align-items: center;
						& > * {
							transform: rotate(-45deg);
							font-size: 3rem;
						}
					`}
				>
					<span>text</span>
				</li>
				<li
					css={`
						background: #fce920;
						grid-row: 3/4;
						grid-column: 2/3;
						display: flex;
						justify-content: center;
						align-items: center;
						& > * {
							transform: rotate(-45deg);
							font-size: 3rem;
						}
					`}
				>
					<span>text</span>
				</li>
				<li
					css={`
						background: #7cc85c;
						grid-row: 3/4;
						grid-column: 3/4;
						display: flex;
						justify-content: center;
						align-items: center;
						& > * {
							transform: rotate(-45deg);
							font-size: 3rem;
						}
					`}
				>
					<span>text</span>
				</li>
				<li
					css={`
						background: #ffa55e;
						grid-row: 4/5;
						grid-column: 2/3;
						display: flex;
						justify-content: center;
						align-items: center;
						& > * {
							transform: rotate(-45deg);
							font-size: 3rem;
						}
					`}
				>
					<span>text</span>
				</li>
			</ul>
		</div>
	);
};

export default Practice20;
