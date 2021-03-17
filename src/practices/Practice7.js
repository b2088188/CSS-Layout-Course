import React from 'react';
import styled from 'styled-components/macro';

const Practice7 = () => {
	return (
		<header
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				background: linear-gradient(180deg, #63e, #a1a);
			`}
		>
			<div
				css={`
					width: 120rem;
					margin: auto;
					display: grid;
					grid-template-columns: [icon-start] min-content [icon-end space-start-1] 1fr [space-end-1 nav-start] auto [nav-end space-start-2] 1fr [space-end-2 search-start] auto [search-end];
					align-items: center;
				`}
			>
				<a
					href=''
					css={`
						width: 10rem;
					`}
				>
					<img
						css={`
							width: inherit;
						`}
						src='https://cdn0.techbang.com/system/images/452264/original/3487db5a5e99a1edb03c3a02c05377bf.png?1533022751'
						alt=''
					/>
				</a>
				<nav
					css={`
						display: grid;
						grid-column: nav-start / nav-end;
						grid-template-columns: repeat(4, max-content);
						grid-gap: 2.5rem;

						justify-items: center;
					`}
				>
					<a
						href='#'
						css={`
							text-decoration: none;
							color: #fff;
							position: relative;
							transform: translateY(0);
							transition: transform 0.25s;
							&:before {
								content: '';
								position: absolute;
								width: 0;
								height: 1px;
								background: #fff;
								top: 100%;
								left: 50%;
								right: 50%;

								transition: all 0.25s;
							}
							&:hover {
								transform: translateY(-5px);
							}
							&:hover:before {
								width: 100%;
								left: 0;
								right: 0;
							}
						`}
					>
						金魚都能懂系列
					</a>
					<a
						href='#'
						css={`
							text-decoration: none;
							color: #fff;
						`}
					>
						暴力網頁入門系列
					</a>
					<a
						href='#'
						css={`
							text-decoration: none;
							color: #fff;
						`}
					>
						CSS可樂系列
					</a>
					<a
						href='#'
						css={`
							text-decoration: none;
							color: #fff;
						`}
					>
						RWD原來這樣系列
					</a>
				</nav>
				<form
					css={`
						grid-column: search-start / search-end;
						& > * {
							border: none;
							background-color: #fff;
							padding: 0.5rem 1rem;
							&:focus {
								outline: none;
							}
						}
					`}
				>
					<input
						type='search'
						css={`
							border-radius: 20rem 0 0 20rem;
						`}
					/>
					<button
						css={`
							border-radius: 0 20rem 20rem 0;
						`}
					>
						<i className='fa fa-search'></i>
					</button>
				</form>
			</div>
		</header>
	);
};

export default Practice7;
