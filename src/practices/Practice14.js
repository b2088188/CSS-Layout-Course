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
				<input
					type='checkbox'
					id='side-menu-switch'
					css={`
						display: none;
						&:checked + div {
							transform: translateX(0);
						}
						&:checked + div .fa {
							transform: scale(-1);
						}
					`}
				/>
				<div
					css={`
						background: linear-gradient(0deg, #3381b0, #c2196c);
						padding: 5rem 1rem;
						display: grid;
						grid-template-rows: min-content;
						grid-gap: 5rem 0;
						box-shadow: 10px 0 10px rgba(33, 66, 85, 0.5);
						position: relative;
						transform: translateX(-100%);
						transition: transform 0.3s;
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
					<label
						htmlFor='side-menu-switch'
						css={`
							position: absolute;
							width: 4rem;
							height: 8rem;
							background: rgba(33, 66, 85);
							color: #fff;
							right: -40px;
							top: 0;
							bottom: 0;
							margin: auto;
							line-height: 8rem;
							text-align: center;
							font-size: 3rem;
							border-radius: 0 10px 10px 0;
						`}
					>
						<i className='fa fa-angle-right'></i>
					</label>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Practice13;
