import React from 'react';
import styled from 'styled-components/macro';

const Practice5 = () => {
	return (
		<div
			css={`
				background: linear-gradient(135deg, rgb(200, 100, 0), rgb(255, 100, 100)) fixed center
					center / 100% 100%;
				min-height: 100vh;
			`}
		>
			<div
				css={`
					width: 100rem;
					margin: auto;
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));

					grid-gap: 0 2rem;
				`}
			>
				<div
					css={`
						display: grid;
						grid-template-columns: repeat(2, 1fr);
					`}
				>
					<div>
						<img
							css={`
								width: 100%;
								height: 100%;
								object-fit: cover;
							`}
							src='https://picsum.photos/400/400?random=10'
							alt=''
						/>
					</div>
					<div>
						<h2>金魚都能懂的網頁入門</h2>
						<p>年度最佳網頁入門教學影片，輕鬆學會網頁製作，原始碼原來如此有趣阿。</p>
						<a
							href='#'
							css={`
								text-decoration: none;
								border: solid 1px #ccc;
							`}
						>
							more
						</a>
					</div>
				</div>
				<div
					css={`
						display: grid;
						grid-template-columns: repeat(2, 1fr);
						box-shadow: 0 1rem 3rem rgba(160, 20, 20, 0.5);
					`}
				>
					<div>
						<img
							css={`
								width: 100%;
								height: 100%;
								object-fit: cover;
							`}
							src='https://picsum.photos/400/400?random=20'
							alt=''
						/>
					</div>
					<div
						css={`
							background: #fff;
							padding: 1rem;
							display: flex;
							flex-direction: column;
						`}
					>
						<h2
							css={`
								margin-bottom: 0.4rem;
							`}
						>
							金魚都能懂的網頁入門
						</h2>
						<p>年度最佳網頁入門教學影片，輕鬆學會網頁製作，原始碼原來如此有趣阿。</p>
						<a
							css={`
								align-self: flex-end;
							`}
							href='#'
							css={`
								margin-top: auto;
								text-decoration: none;
								border: solid 1px #ccc;
								border-radius: 20rem;
								padding: 0.5rem 1rem;
								color: #aaa;
								transition: color 0.25s, background 0.25s;
								&:hover {
									background: #ccc;
									color: #fff;
								}
							`}
						>
							more
						</a>
					</div>
				</div>
				<div
					css={`
						display: grid;
						grid-template-columns: repeat(2, 1fr);
					`}
				>
					<div>
						<img
							css={`
								width: 100%;
								height: 100%;
								object-fit: cover;
							`}
							src='https://picsum.photos/400/400?random=30'
							alt=''
						/>
					</div>
					<div>
						<h2>金魚都能懂的網頁入門</h2>
						<p>年度最佳網頁入門教學影片，輕鬆學會網頁製作，原始碼原來如此有趣阿。</p>
						<a href='#'>more</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Practice5;
