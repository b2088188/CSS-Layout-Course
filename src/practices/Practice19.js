import React from 'react';
import styled from 'styled-components/macro';

const Practice19 = () => {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				min-height: 100vh;
				background: #edece1;
			`}
		>
			<div
				css={`
					width: 96rem;
					margin: 5rem auto;
				`}
			>
				<h1>金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎 系列</h1>
				<p>金魚都能懂的系列教學，是 Amos 針對網頁設計新手所設計的一套入門教學影片</p>
				<ul
					css={`
						margin-top: 5rem;
						display: grid;
						grid-template-rows: 7rem 7rem;
						grid-template-columns: 1fr 5rem 5rem 1fr;
						grid-auto-rows: 7rem;
						align-items: center;
					`}
				>
					<div
						css={`
							align-self: stretch;
							grid-row: 1 / span 5;
							grid-column: 2/3;
							border-right: solid 1px #ccc;
						`}
					></div>
					<li
						css={`
							height: 80%;
							grid-row: 1 / span 2;
							grid-column: 1/2;
						`}
					>
						<a
							href='#'
							css={`
								text-decoration: none;
								background: #fff;
								border: solid 1px #aaa;
								display: block;
								position: relative;
								padding: 2rem;
								border-radius: 10px;
								box-shadow: 3px 3px 5px #888;
								&:hover {
									background: #6fa5f6;
								}
								&:hover > * {
									color: #fff;
								}
								&:before {
									content: '';
									display: inline-block;
									position: absolute;
									width: 5rem;
									height: 1px;
									background: #aaa;
									right: -5rem;
									top: 0;
									bottom: 0;
									margin: auto;
								}
								&:after {
									content: '';
									display: inline-block;
									position: absolute;
									width: 2rem;
									height: 2rem;
									border-radius: 50%;
									background: #aaa;
									right: -6rem;
									top: 0;
									bottom: 0;
									margin: auto;
								}
							`}
						>
							<h2
								css={`
									color: #333;
								`}
							>
								圖文滿版區塊
							</h2>
							<p
								css={`
									color: #666;
								`}
							>
								本篇重點問題回顧:列出重點希望各位可以好好的將影片回放複習哦，另外幾個重點問題中，Amos
								已經有影片的會直接附上連結給各位參考取用。
							</p>
						</a>
					</li>
					<li
						css={`
							grid-row: 2 / 4;
							grid-column: 4/5;
							height: 80%;
						`}
					>
						<a
							href='#'
							css={`
								text-decoration: none;
								background: #fff;
								border: solid 1px #aaa;
								display: block;
								position: relative;
								padding: 2rem;
								border-radius: 10px;
								box-shadow: 3px 3px 5px #888;
								&:hover {
									background: #6fa5f6;
								}
								&:hover > * {
									color: #fff;
								}
								&:before {
									content: '';
									display: inline-block;
									position: absolute;
									width: 5rem;
									height: 1px;
									background: #ccc;
									left: -5rem;
									top: 0;
									bottom: 0;
									margin: auto;
								}
								&:after {
									content: '';
									display: inline-block;
									position: absolute;
									width: 2rem;
									height: 2rem;
									border-radius: 50%;
									background: #aaa;
									left: -6rem;
									top: 0;
									bottom: 0;
									margin: auto;
								}
							`}
						>
							<h2
								css={`
									color: #333;
								`}
							>
								圖文滿版區塊
							</h2>
							<p
								css={`
									color: #666;
								`}
							>
								本篇重點問題回顧:列出重點希望各位可以好好的將影片回放複習哦，另外幾個重點問題中，Amos
								已經有影片的會直接附上連結給各位參考取用。
							</p>
						</a>
					</li>
					<li
						css={`
							grid-row: 3 / span 2;
							grid-column: 1/2;
							height: 80%;
						`}
					>
						<a
							href='#'
							css={`
								text-decoration: none;
								background: #fff;
								border: solid 1px #aaa;
								display: block;
								position: relative;
								padding: 2rem;
								border-radius: 10px;
								box-shadow: 3px 3px 5px #888;
								&:hover {
									background: #6fa5f6;
								}
								&:hover > * {
									color: #fff;
								}
								&:before {
									content: '';
									display: inline-block;
									position: absolute;
									width: 5rem;
									height: 1px;
									background: #aaa;
									right: -5rem;
									top: 0;
									bottom: 0;
									margin: auto;
								}
								&:after {
									content: '';
									display: inline-block;
									position: absolute;
									width: 2rem;
									height: 2rem;
									border-radius: 50%;
									background: #aaa;
									right: -6rem;
									top: 0;
									bottom: 0;
									margin: auto;
								}
							`}
						>
							<h2
								css={`
									color: #333;
								`}
							>
								圖文滿版區塊
							</h2>
							<p
								css={`
									color: #666;
								`}
							>
								本篇重點問題回顧:列出重點希望各位可以好好的將影片回放複習哦，另外幾個重點問題中，Amos
								已經有影片的會直接附上連結給各位參考取用。
							</p>
						</a>
					</li>
					<li
						css={`
							grid-row: 4 / span 2;
							grid-column: 4/5;
						`}
					>
						<a
							href='#'
							css={`
								text-decoration: none;
								background: #fff;
								border: solid 1px #aaa;
								display: block;
								position: relative;
								padding: 2rem;
								border-radius: 10px;
								box-shadow: 3px 3px 5px #888;
								&:hover {
									background: #6fa5f6;
								}
								&:hover > * {
									color: #fff;
								}
								&:before {
									content: '';
									display: inline-block;
									position: absolute;
									width: 5rem;
									height: 1px;
									background: #ccc;
									left: -5rem;
									top: 0;
									bottom: 0;
									margin: auto;
								}
								&:after {
									content: '';
									display: inline-block;
									position: absolute;
									width: 2rem;
									height: 2rem;
									border-radius: 50%;
									background: #aaa;
									left: -6rem;
									top: 0;
									bottom: 0;
									margin: auto;
								}
							`}
						>
							<h2
								css={`
									color: #333;
								`}
							>
								圖文滿版區塊
							</h2>
							<p
								css={`
									color: #666;
								`}
							>
								本篇重點問題回顧:列出重點希望各位可以好好的將影片回放複習哦，另外幾個重點問題中，Amos
								已經有影片的會直接附上連結給各位參考取用。
							</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Practice19;
