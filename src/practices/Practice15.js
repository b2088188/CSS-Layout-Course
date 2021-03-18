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
						&:checked + div .fa-angle-right {
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
					<ul
						css={`
							display: grid;
							grid-template-rows: min-content;
							grid-auto-rows: min-content;

							& > *:not(:first-child) {
								border-top: solid 1px rgba(255, 255, 255, 0.4);
							}
						`}
					>
						<li
							css={`
								position: relative;
								&:hover > a {
									background: rgba(0, 0, 0, 0.5);
								}
								&:hover .fa {
									margin-right: 0;
									transform: scale(1);
								}
								&:hover > ul {
									display: block;
								}
							`}
						>
							<Anchor>
								<Icon className='fa fa-users' />
								鐵人賽
							</Anchor>
							<ul
								css={`
									display: none;
									position: absolute;
									top: 5px;
									left: 104%;
									width: 100%;
									background: rgba(255, 255, 255, 0.2);
									box-shadow: 5px 5px 10px rgba(33, 66, 85, 0.5);
									& > *:not(:first-child) {
										border-top: solid 1px rgba(255, 255, 255, 0.4);
									}
								`}
							>
								<li>
									<Anchor>金魚都能懂的網頁設計入門</Anchor>
								</li>
								<li>
									<Anchor>金魚都能懂的 CSS 選取器</Anchor>
								</li>
								<li>
									<Anchor>金魚都能懂的這個網頁畫面怎麼切</Anchor>
								</li>
								<li>
									<Anchor>連續30天的超實務網頁設計的垂直置中教學</Anchor>
								</li>
							</ul>
						</li>
						<li>
							<Anchor>
								<Icon className='fa fa-gavel' />
								暴力班
							</Anchor>
						</li>
						<li>
							<Anchor>
								<Icon className='fa fa-object-group' />
								RWD 這樣子
							</Anchor>
						</li>
						<li>
							<Anchor>
								<Icon className='fa fa-globe' />
								金魚網頁
							</Anchor>
						</li>
						<li>
							<Anchor>
								<Icon className='fa fa-cutlery' />
								金魚切版
							</Anchor>
						</li>
					</ul>
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

function Anchor({ children }) {
	return (
		<a
			href='#'
			css={`
				display: block;
				padding: 1rem;
				color: #fff;
				text-decoration: none;
				&:hover {
					background: rgba(0, 0, 0, 0.5);
				}
				&:hover i {
					transform: scale(1);
					margin-right: 0;
				}
			`}
		>
			{children}
		</a>
	);
}

function Icon({ className }) {
	return (
		<i
			className={className}
			aria-hidden='true'
			css={`
				margin-right: -1.1rem;
				transform: scale(0);
				transition: transform 0.3s, margin-right 0.3s;
			`}
		></i>
	);
}

export default Practice13;
