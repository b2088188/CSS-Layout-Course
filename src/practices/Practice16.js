import React from 'react';
import styled from 'styled-components/macro';

const Practice16 = () => {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				min-height: 100vh;
				background: #546377;
				display: flex;
				align-items: center;
				justify-content: center;
			`}
		>
			<ol
				css={`
					width: 120rem;
					display: grid;
					justify-content: center;
					grid-template-columns: repeat(3, max-content 100px) max-content;

					& > *:not(:last-child):before {
						content: '';
						position: absolute;
						width: 100px;
						height: 5px;
						background-color: #43cea2;
						box-shadow: 0 0 0 3px #fff;
						top: 0;
						bottom: 0;
						margin: auto;
						left: 200px;
					}
				`}
			>
				<li
					css={`
						display: grid;
						justify-items: center;
						align-items: center;
						grid-template-rows: 10rem 10rem;
						grid-template-columns: 20rem;
						border-radius: 50%;
						background: linear-gradient(0deg, #185a9d, #43cea2);
						color: #fff;
						box-shadow: 0 0 0 4px #fff;
						position: relative;
						font-size: 3rem;
						${({ active }) =>
							active
								? `
							& ~ li {
								background:linear-gradient(9deg,#999,#ccc);
							}	
							& ~ li:before {
								background-color:#999 !important;
							}
						`
								: null}
					`}
				>
					<i
						className='fa fa-file-text'
						aria-hidden='true'
						css={`
							font-size: 6rem;
							margin-bottom: 6px;
						`}
					></i>
					收到訂單
				</li>
				<li
					css={`
						grid-column: 3/4;
						display: grid;
						justify-items: center;
						align-items: center;
						grid-template-rows: 10rem 10rem;
						grid-template-columns: 20rem;
						border-radius: 50%;
						background: linear-gradient(0deg, #185a9d, #43cea2);
						color: #fff;
						box-shadow: 0 0 0 4px #fff;
						position: relative;
						font-size: 3rem;
					`}
				>
					<i
						className='fa fa-archive'
						aria-hidden='true'
						css={`
							font-size: 6rem;
							margin-bottom: 6px;
						`}
					></i>
					撿貨中
				</li>
				<li
					css={`
						grid-column: 5/6;
						display: grid;
						justify-items: center;
						align-items: center;
						grid-template-rows: 10rem 10rem;
						grid-template-columns: 20rem;
						border-radius: 50%;
						background: linear-gradient(0deg, #185a9d, #43cea2);
						color: #fff;
						box-shadow: 0 0 0 4px #fff;
						position: relative;
						font-size: 3rem;
					`}
				>
					<i
						className='fa fa-truck'
						aria-hidden='true'
						css={`
							font-size: 6rem;
							margin-bottom: 6px;
						`}
					></i>
					運送中
				</li>
				<li
					css={`
						grid-column: 7/8;
						display: grid;
						justify-items: center;
						align-items: center;
						grid-template-rows: 10rem 10rem;
						grid-template-columns: 20rem;
						border-radius: 50%;
						background: linear-gradient(0deg, #185a9d, #43cea2);
						color: #fff;
						box-shadow: 0 0 0 4px #fff;
						position: relative;
						font-size: 3rem;
					`}
				>
					<i
						className='fa fa-check-circle'
						aria-hidden='true'
						css={`
							font-size: 6rem;
							margin-bottom: 6px;
						`}
					></i>
					已送達
				</li>
			</ol>
		</div>
	);
};

export default Practice16;
