import React from 'react';
import styled from 'styled-components/macro';

const Practice6 = () => {
	return (
		<footer
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				background: linear-gradient(-20deg, #3f5494, #08c7a5);
			`}
		>
			<div
				css={`
					width: 120rem;
					margin: auto;
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
					grid-gap: 0 2.5rem;
				`}
			>
				<div
					css={`
						display: grid;
					`}
				>
					<h4
						css={`
							padding: 1rem 0;
							border-bottom: dotted 1px #fff;
							font-size: 2.4rem;
							color: #fff;
						`}
					>
						關於暴力課程
					</h4>
					<nav
						css={`
							display: grid;
							grid-gap: 2.5rem 0;
							align-items: start;
							padding: 1rem 0;
						`}
					>
						<a
							href='#'
							css={`
								color: #fff;
								line-height: 1.4;
								text-decoration: none;
								&:hover {
									color: #fa0;
								}
							`}
						>
							<i className='fa fa-angle-right'></i> 課程目標
						</a>
						<a
							href='#'
							css={`
								color: #fff;
								line-height: 1.4;
								text-decoration: none;
								&:hover {
									color: #fa0;
								}
							`}
						>
							<i className='fa fa-angle-right'></i>教學理念
						</a>
						<a
							href='#'
							css={`
								color: #fff;
								line-height: 1.4;
								text-decoration: none;
								&:hover {
									color: #fa0;
								}
							`}
						>
							<i className='fa fa-angle-right'></i>課程宗旨
						</a>
					</nav>
				</div>
				<div>
					<h4>關於暴力課程</h4>
					<nav>
						<a href='#'>
							<i className='fa fa-angle-right'></i>暴力網頁入門班
						</a>
						<a href='#'>
							<i className='fa fa-angle-right'></i>RWD網頁深入理解
						</a>
						<a href='#'>
							<i className='fa fa-angle-right'></i>CSS3互動畫面設計
						</a>
						<a href='#'>
							<i className='fa fa-angle-right'></i>Bootstrap框架實務
						</a>
					</nav>
				</div>
				<div>
					<h4>關於暴力課程</h4>
					<nav>
						<a href='#'>
							<i className='fa fa-angle-right'></i>網站建置顧問
						</a>
						<a href='#'>
							<i className='fa fa-angle-right'></i>網站設計建置
						</a>
						<a href='#'>
							<i className='fa fa-angle-right'></i>網站規劃
						</a>
						<a href='#'>
							<i className='fa fa-angle-right'></i>企業教育訓練
						</a>
					</nav>
				</div>
				<div
					css={`
						display: grid;
						grid-template-rows: min-content;
					`}
				>
					<h4
						css={`
							padding: 1rem 0;
							border-bottom: dotted 1px #fff;
							font-size: 2.4rem;
							color: #fff;
						`}
					>
						訂閱電子報
					</h4>
					<form
						css={`
							padding: 1rem 0;
							display: grid;
							grid-template-columns: 1fr max-content;
							align-items: center;
							& > * {
								border: none;
								padding: 0.5rem 1rem;
							}
						`}
					>
						<input type='text' />
						<button
							css={`
								color: #70f6df;
								background: #3e5293;
							`}
						>
							訂閱
						</button>
					</form>
				</div>
			</div>
			<div
				css={`
					text-align: center;
					margin: 15rem 0;
					padding: 1rem 0;
					background: #3e5293;
					color: #70f6df;
				`}
			>
				Copyright &copy; 2021 金魚都能懂得這個網頁畫面怎麼切
			</div>
		</footer>
	);
};

export default Practice6;
