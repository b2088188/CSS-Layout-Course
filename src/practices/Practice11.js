import React from 'react';
import styled from 'styled-components/macro';

const Practice11 = () => {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				background: linear-gradient(-45deg, #fffaf0, #f8c3c1);
				min-height: 100vh;
			`}
		>
			<div
				css={`
					width: 100rem;
					margin: auto;
					padding: 7.5rem 0;
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
					grid-gap: 0 2.5rem;
				`}
			>
				<div
					css={`
						display: grid;
						background: #fff;
						border: solid 10px #f9cec2;
						border-radius: 20px;
						box-shadow: 1rem 2rem 5rem #f7b6a7;
						&:hover .fa {
							animation: ss 0.2s linear infinite alternate;
						}
						@keyframes ss {
							0% {
								transform: rotate(-10deg);
							}
							100% {
								transform: rotate(10deg);
							}
						}
					`}
				>
					<div
						css={`
							width: 15rem;
							height: 15rem;
							background: #fff;
							color: #f9cec2;
							justify-self: center;
							margin-top: -7.5rem;
							text-align: center;
							border-radius: 50%;
							position: relative;
							&:before {
								content: '';
								position: absolute;
								width: 100%;
								height: 100%;
								top: 0;
								left: 0;
								border-top: solid 10px #f9cec2;
								border-right: solid 10px #f9cec2;
								border-bottom: solid 10px transparent;
								border-left: solid 10px transparent;
								border-radius: 50%;
								transform: rotate(-45deg);
							}
						`}
					>
						<i
							className='fa fa-gavel'
							css={`
								font-size: 6rem;
								line-height: 15rem;
							`}
						></i>
					</div>
					<div
						css={`
							text-align: center;
							padding: 2rem 2rem 3rem;
						`}
					>
						<h3
							css={`
								color: #f5afac;
							`}
						>
							CSScoke
						</h3>
						<p
							css={`
								color: #ccc;
							`}
						>
							固定每周二晚上在 YouTube
							平台直播，偶爾會偷懶休息，內容從基礎入門到業界實務應有盡有，從技術到經驗無一不談，還有大師常來聊系列，免費讓你學到大師能力。
						</p>
					</div>
				</div>
				<div>
					<div>
						<i className='fa fa-thumbs-up'></i>
					</div>
					<div>
						<h3>CSScoke</h3>
						<p>
							固定每周二晚上在 YouTube
							平台直播，偶爾會偷懶休息，內容從基礎入門到業界實務應有盡有，從技術到經驗無一不談，還有大師常來聊系列，免費讓你學到大師能力。
						</p>
					</div>
				</div>
				<div>
					<div>
						<i className='fa fa-bell'></i>
					</div>
					<div>
						<h3>CSScoke</h3>
						<p>
							固定每周二晚上在 YouTube
							平台直播，偶爾會偷懶休息，內容從基礎入門到業界實務應有盡有，從技術到經驗無一不談，還有大師常來聊系列，免費讓你學到大師能力。
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Practice11;
