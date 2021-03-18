import React from 'react';
import styled from 'styled-components/macro';

const Practice13 = () => {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				min-height: 100vh;
				background: #546377;
			`}
		>
			<div
				css={`
					display: grid;
					grid-template-rows: 100vh;
					grid-template-columns: 30rem 1fr;
				`}
			>
				<div
					css={`
						background: linear-gradient(0deg, #3381b0, #c2196c);
						padding: 5rem 1rem;
						display: grid;
						grid-template-rows: min-content;
						grid-gap: 5rem 0;
						box-shadow: 10px 0 10px rgba(33, 66, 85, 0.5);
					`}
				>
					<form
						css={`
							display: flex;
							border: solid 1px rgba(255, 255, 255, 0.4);
							border-radius: 10rem;
							& > * {
								border: none;
								padding: 5px 10px;
								background: none;
								color: #fff;
							}

							& > *:focus {
								outline: none;
							}
						`}
					>
						<input
							type='search'
							placeholder='請輸入關鍵字'
							css={`
								flex: 1;
							`}
						/>
						<button>
							<i className='fa fa-search' aria-hidden='true'></i>
						</button>
					</form>
					<nav
						css={`
							display: grid;
							grid-template-rows: min-content;
							grid-auto-rows: min-content;

							& > *:not(:first-child) {
								border-top: solid 1px rgba(255, 255, 255, 0.4);
							}
						`}
					>
						<a
							href='#'
							css={`
								padding: 1rem;
								color: #fff;
								text-decoration: none;
								&:hover i {
									transform: scale(1);
									margin-right: 0;
								}
							`}
						>
							<i
								className='fa fa-users'
								aria-hidden='true'
								css={`
									margin-right: -1.1rem;
									transform: scale(0);
									transition: transform 0.3s, margin-right 0.3s;
								`}
							></i>
							鐵人賽
						</a>
						<a
							css={`
								padding: 1rem;
								color: #fff;
								text-decoration: none;
							`}
							href='#'
						>
							<i className='fa fa-gavel' aria-hidden='true'></i> 暴力班
						</a>
						<a
							css={`
								padding: 1rem;
								color: #fff;
								text-decoration: none;
							`}
							href='#'
						>
							<i className='fa fa-object-group' aria-hidden='true'></i> RWD 這樣子
						</a>
						<a
							css={`
								padding: 1rem;
								color: #fff;
								text-decoration: none;
							`}
							href='#'
						>
							<i className='fa fa-globe' aria-hidden='true'></i> 金魚網頁
						</a>
						<a
							css={`
								padding: 1rem;
								color: #fff;
								text-decoration: none;
							`}
							href='#'
						>
							<i className='fa fa-cutlery' aria-hidden='true'></i> 金魚切版
						</a>
					</nav>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Practice13;
