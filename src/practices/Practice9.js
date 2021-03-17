import React from 'react';
import styled from 'styled-components/macro';

const Practice9 = () => {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				padding: 1rem 0;
				background: #562870;
				min-height: 100vh;
			`}
		>
			<ol
				css={`
					width: 90%;
					margin: auto;
					display: grid;
					grid-template-columns: repeat(6, max-content);
					grid-gap: 0 2.5rem;
					& > *:not(:last-child):after {
						content: '>';
						color: #fff;
						display: inline-block;
						margin-left: 2rem;
					}
				`}
			>
				<li>
					<a
						href='#'
						css={`
							text-decoration: none;
							color: #fff;
							&:hover {
								color: #ff0;
							}
						`}
					>
						CSS可樂
					</a>
				</li>
				<li>
					<a
						href='#'
						css={`
							text-decoration: none;
							color: #fff;
							&:hover {
								color: #ff0;
							}
						`}
					>
						CSS教學
					</a>
				</li>
				<li>
					<a
						href='#'
						css={`
							text-decoration: none;
							color: #fff;
							&:hover {
								color: #ff0;
							}
						`}
					>
						金魚系列
					</a>
				</li>
				<li>
					<a
						href='#'
						css={`
							text-decoration: none;
							color: #fff;
							&:hover {
								color: #ff0;
							}
						`}
					>
						切版技巧
					</a>
				</li>
				<li>
					<a
						href='#'
						css={`
							text-decoration: none;
							color: #fff;
							&:hover {
								color: #ff0;
							}
						`}
					>
						Flex
					</a>
				</li>
				<li>
					<a
						href='#'
						css={`
							text-decoration: none;
							color: #fff;
							&:hover {
								color: #ff0;
							}
						`}
					>
						麵包屑
					</a>
				</li>
			</ol>
		</div>
	);
};

export default Practice9;
