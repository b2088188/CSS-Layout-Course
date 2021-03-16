import React from 'react';
import styled from 'styled-components/macro';

const Practice1 = () => {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				height: 100vh;
				background-color: #ccc;
				background: linear-gradient(115deg, #7bf 50%, transparent 50%) center center / 100% 100%,
					url('https://picsum.photos/1200/600?random=10') right center / auto 100%;
			`}
		>
			<div
				css={`
					height: 100%;
					width: 120rem;
					margin: auto;
				`}
			>
				<div
					css={`
						height: 100%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: flex-start;
					`}
				>
					<h1
						css={`
							font-size: 8rem;
							border-bottom: solid 0.1rem #333;
							font-weight: 900;
						`}
					>
						金魚都能懂的
						<small
							css={`
								display: block;
								font-size: 5.3rem;
								font-weight: 700;
							`}
						>
							這個畫面怎麼切
						</small>
					</h1>
					<h2
						css={`
							font-size: 5rem;
							font-weight: 700;
						`}
					>
						圖文滿版區塊
					</h2>
					<p
						css={`
							font-size: 2rem;
							font-weight: 300;
						`}
					>
						這畫面實在常見，在各種樣版網站可說是設計常客
						<br />
						金魚切不出來實在說不過去阿
					</p>
				</div>
			</div>
		</div>
	);
};

export default Practice1;
