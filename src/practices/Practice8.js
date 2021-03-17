import React from 'react';
import styled from 'styled-components/macro';

const Practice8 = () => {
	return (
		<header
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				background: linear-gradient(180deg, #f17, #a1a);
			`}
		>
			<div
				css={`
					width: 120rem;
					margin: auto;
				`}
			>
				<nav
					css={`
						display: grid;
						justify-content: center;
						grid-template-columns: repeat(2, max-content) min-content repeat(2, max-content);
						align-items: center;
						grid-gap: 0 2.5rem;
					`}
				>
					<a
						href='#'
						css={`
							text-decoration: none;
							color: #fff;
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
						RWD原來是這樣系列
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Practice8;
