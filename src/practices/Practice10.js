import React from 'react';
import styled from 'styled-components/macro';

const Practice10 = () => {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				display: grid;
				grid-template-rows: auto auto;
				grid-template-columns: repeat(4, 1fr);
			`}
		>
			<div
				css={`
					position: relative;
					grid-row: 1/-1;
					grid-column: 1 / span 2;
					width: 100%;
					height: 100%;
					object-fit: cover;
				`}
			>
				<img
					src='https://picsum.photos/500/500?random=10'
					alt=''
					css={`
						width: 100%;
						height: 100%;
					`}
				/>
				<div
					css={`
						position: absolute;
						top: 0;
						display: flex;
						flex-direction: column;
						align-items: center;
					`}
				>
					<h3>金魚都懂切版</h3>
					<p>
						金魚都懂的這個網頁怎麼切，是鐵人賽的主題，主要訴求在簡單快速的將一個網頁畫面完成，但也由於時間有限，所以沒有處理RWD部分，留給廣大網友腦補囉。
					</p>
				</div>
			</div>
			<div
				css={`
					position: relative;
					grid-row: 1/2;
					grid-column: 3 / 4;
					width: 100%;
					height: 100%;
					object-fit: cover;
				`}
			>
				<img
					src='https://picsum.photos/500/500?random=20'
					alt=''
					css={`
						width: 100%;
						height: 100%;
					`}
				/>
				<div
					css={`
						position: absolute;
						top: 0;
						display: flex;
						flex-direction: column;
						align-items: center;
					`}
				>
					<h3>金魚都懂切版</h3>
					<p>
						金魚都懂的這個網頁怎麼切，是鐵人賽的主題，主要訴求在簡單快速的將一個網頁畫面完成，但也由於時間有限，所以沒有處理RWD部分，留給廣大網友腦補囉。
					</p>
				</div>
			</div>
			<div
				css={`
					position: relative;
					grid-row: 1/2;
					grid-column: 4 / 5;
					width: 100%;
					height: 100%;
					object-fit: cover;
				`}
			>
				<img
					src='https://picsum.photos/500/500?random=30'
					alt=''
					css={`
						width: 100%;
						height: 100%;
					`}
				/>
				<div
					css={`
						position: absolute;
						top: 0;
						display: flex;
						flex-direction: column;
						align-items: center;
					`}
				>
					<h3>金魚都懂切版</h3>
					<p>
						金魚都懂的這個網頁怎麼切，是鐵人賽的主題，主要訴求在簡單快速的將一個網頁畫面完成，但也由於時間有限，所以沒有處理RWD部分，留給廣大網友腦補囉。
					</p>
				</div>
			</div>
			<div
				css={`
					position: relative;
					grid-row: 2/3;
					grid-column: 3 / 4;
					width: 100%;
					height: 100%;
					object-fit: cover;
				`}
			>
				<img
					src='https://picsum.photos/500/500?random=40'
					alt=''
					css={`
						width: 100%;

						height: 100%;
					`}
				/>
				<div
					css={`
						position: absolute;
						top: 0;
						display: flex;
						flex-direction: column;
						align-items: center;
					`}
				>
					<h3>金魚都懂切版</h3>
					<p>
						金魚都懂的這個網頁怎麼切，是鐵人賽的主題，主要訴求在簡單快速的將一個網頁畫面完成，但也由於時間有限，所以沒有處理RWD部分，留給廣大網友腦補囉。
					</p>
				</div>
			</div>
			<div
				css={`
					width: 100%;
					height: 100%;
					object-fit: cover;
					position: relative;
					grid-row: 2/3;
					grid-column: 4/ 5;
				`}
			>
				<img
					src='https://picsum.photos/500/500?random=50'
					alt=''
					css={`
						width: 100%;
						height: 100%;
					`}
				/>
				<div
					css={`
						position: absolute;
						top: 0;
						display: flex;
						flex-direction: column;
						align-items: center;
					`}
				>
					<h3>金魚都懂切版</h3>
					<p>
						金魚都懂的這個網頁怎麼切，是鐵人賽的主題，主要訴求在簡單快速的將一個網頁畫面完成，但也由於時間有限，所以沒有處理RWD部分，留給廣大網友腦補囉。
					</p>
				</div>
			</div>
		</div>
	);
};

export default Practice10;
