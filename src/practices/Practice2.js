import React from 'react';
import styled from 'styled-components/macro';

const Practice2 = () => {
	return (
		<div
			css={`
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
				align-content: center;
				font-family: 'Noto Sans TC', sans-serif;
			`}
		>
			<div
				css={`
					position: relative;
				`}
			>
				<img
					css={`
						width: 100%;
					`}
					src='https://picsum.photos/500/400?random=10'
					alt=''
				/>
				<div
					css={`
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						padding: 2rem;
						background: rgba(0, 0, 0, 0.6);
						display: flex;
						flex-direction: column;
						justify-content: center;
						opacity: 0;
						transition: opacity 0.25s;
						&:after {
							content: '';
							background: #fff;
							display: inline-block;
							height: 0.1rem;
							width: 0.1rem;
							transition: width 0.5s;
						}
						&:hover {
							opacity: 1;
							&:after {
								width: 100%;
							}
						}
					`}
				>
					<h2
						css={`
							font-size: 3.2rem;
							color: #ff0;
							font-weight: 500;
						`}
					>
						金魚都能懂的這個畫面怎麼切 : 互動圖文卡片
					</h2>
					<p
						css={`
							font-size: 2rem;
							color: #fff;
							font-weight: 100;
						`}
					>
						互動圖文卡片是我們在網頁中經常見到的另一種稀飯版，不會切你就遜掉囉。
					</p>
				</div>
			</div>
			<div
				css={`
					position: relative;
				`}
			>
				<img
					css={`
						width: 100%;
					`}
					src='https://picsum.photos/500/400?random=10'
					alt=''
				/>
				<div
					css={`
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						padding: 2rem;
						background: rgba(0, 0, 0, 0.6);
						display: flex;
						flex-direction: column;
						justify-content: center;
						opacity: 0;
						transition: opacity 0.25s;
						&:after {
							content: '';
							background: #fff;
							display: inline-block;
							height: 0.1rem;
							width: 0.1rem;
							transition: width 0.5s;
						}
						&:hover {
							opacity: 1;
							&:after {
								width: 100%;
							}
						}
					`}
				>
					<h2
						css={`
							font-size: 3.2rem;
							color: #ff0;
							font-weight: 500;
						`}
					>
						金魚都能懂的這個畫面怎麼切 : 互動圖文卡片
					</h2>
					<p
						css={`
							font-size: 2rem;
							color: #fff;
							font-weight: 100;
						`}
					>
						互動圖文卡片是我們在網頁中經常見到的另一種稀飯版，不會切你就遜掉囉。
					</p>
				</div>
			</div>
			<div
				css={`
					position: relative;
				`}
			>
				<img
					css={`
						width: 100%;
					`}
					src='https://picsum.photos/500/400?random=10'
					alt=''
				/>
				<div
					css={`
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						padding: 2rem;
						background: rgba(0, 0, 0, 0.6);
						display: flex;
						flex-direction: column;
						justify-content: center;
						opacity: 0;
						transition: opacity 0.25s;
						&:after {
							content: '';
							background: #fff;
							display: inline-block;
							height: 0.1rem;
							width: 0.1rem;
							transition: width 0.5s;
						}
						&:hover {
							opacity: 1;
							&:after {
								width: 100%;
							}
						}
					`}
				>
					<h2
						css={`
							font-size: 3.2rem;
							color: #ff0;
							font-weight: 500;
						`}
					>
						金魚都能懂的這個畫面怎麼切 : 互動圖文卡片
					</h2>
					<p
						css={`
							font-size: 2rem;
							color: #fff;
							font-weight: 100;
						`}
					>
						互動圖文卡片是我們在網頁中經常見到的另一種稀飯版，不會切你就遜掉囉。
					</p>
				</div>
			</div>
			<div
				css={`
					position: relative;
				`}
			>
				<img
					css={`
						width: 100%;
					`}
					src='https://picsum.photos/500/400?random=10'
					alt=''
				/>
				<div
					css={`
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						padding: 2rem;
						background: rgba(0, 0, 0, 0.6);
						display: flex;
						flex-direction: column;
						justify-content: center;
						opacity: 0;
						transition: opacity 0.25s;
						&:after {
							content: '';
							background: #fff;
							display: inline-block;
							height: 0.1rem;
							width: 0.1rem;
							transition: width 0.5s;
						}
						&:hover {
							opacity: 1;
							&:after {
								width: 100%;
							}
						}
					`}
				>
					<h2
						css={`
							font-size: 3.2rem;
							color: #ff0;
							font-weight: 500;
						`}
					>
						金魚都能懂的這個畫面怎麼切 : 互動圖文卡片
					</h2>
					<p
						css={`
							font-size: 2rem;
							color: #fff;
							font-weight: 100;
						`}
					>
						互動圖文卡片是我們在網頁中經常見到的另一種稀飯版，不會切你就遜掉囉。
					</p>
				</div>
			</div>
		</div>
	);
};

export default Practice2;
