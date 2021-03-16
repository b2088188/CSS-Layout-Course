import React from 'react';
import styled from 'styled-components/macro';

const Practice3 = () => {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				width: 120rem;
				height: 100vh;
				background: #003;
				display: grid;
				grid-template-columns: repeat(3, 25rem);
				grid-gap: 0 2.5rem;
				margin: auto;
				justify-content: center;
				align-content: center;
			`}
		>
			<div
				css={`
					background: #fff;
					border: solid 1px #ccc;
					transform: translateY(0);
					transition: transform 0.5s;
					&:hover {
						transform: translateY(-5rem);
						& > div {
							background-image: linear-gradient(0deg, #fb8076, #feb85d);
						}
						& > div:before {
							border-left: solid 12.4rem #feb85d;
							border-right: solid 12.4rem #feb85d;
						}
						& h2 {
							color: #fff;
							border-bottom-color: #fff;
						}
						& p {
							color: #fff;
						}
					}
				`}
			>
				<img
					css={`
						width: 100%;
						vertical-align: middle;
					`}
					src='https://picsum.photos/300/300?random=10'
					alt=''
				/>
				<div
					css={`
						padding: 2rem;
						position: relative;
						&:before {
							position: absolute;
							content: '';
							width: 0;
							height: 0;
							top: 0;
							left: 0;

							border-top: solid 5rem transparent;
							border-left: solid 12.4rem #fff;
							border-right: solid 12.4rem #fff;
							transform: translateY(-100%);
						}
					`}
				>
					<h2
						css={`
							border-bottom: solid 1px #888;
							padding-bottom: 0.3rem;
							margin-bottom: 0.3rem;
							text-align: center;
							font-weight: 900;
						`}
					>
						舜澤
					</h2>
					<p
						css={`
							line-height: 1.6;
							font-weight: 300;
						`}
					>
						你好我叫舜澤，2019年畢業於南台科技大學，平時以寫網頁為興趣，最近專心補強切版方面應用，若有任何問題歡迎聯繫我。
					</p>
				</div>
			</div>
			<div
				css={`
					background: #fff;
					border: solid 1px #ccc;
				`}
			>
				<img
					css={`
						width: 100%;
					`}
					src='https://picsum.photos/300/300?random=20'
					alt=''
				/>
				<div>
					<h2
						css={`
							border-bottom: solid 1px #888;
							padding-bottom: 0.3rem;
							margin-bottom: 0.3rem;
						`}
					>
						舜澤
					</h2>
					<p
						css={`
							line-height: 1.6;
						`}
					>
						你好我叫舜澤，2019年畢業於南台科技大學，平時以寫網頁為興趣，最近專心補強切版方面應用，若有任何問題歡迎聯繫我。
					</p>
				</div>
			</div>
			<div
				css={`
					background: #fff;
					border: solid 1px #ccc;
				`}
			>
				<img
					css={`
						width: 100%;
					`}
					src='https://picsum.photos/300/300?random=30'
					alt=''
				/>
				<div>
					<h2
						css={`
							border-bottom: solid 1px #888;
							padding-bottom: 0.3rem;
							margin-bottom: 0.3rem;
						`}
					>
						舜澤
					</h2>
					<p
						css={`
							line-height: 1.6;
						`}
					>
						你好我叫舜澤，2019年畢業於南台科技大學，平時以寫網頁為興趣，最近專心補強切版方面應用，若有任何問題歡迎聯繫我。
					</p>
				</div>
			</div>
		</div>
	);
};

export default Practice3;
