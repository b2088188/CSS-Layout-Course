import React from 'react';
import styled from 'styled-components/macro';

function Practice21() {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				min-height: 100vh;
			`}
		>
			<div
				css={`
					min-height: 70rem;
					background: url(https://www.rd.com/wp-content/uploads/2019/05/American-shorthair-cat-scaled.jpg)
						no-repeat center top/ cover;
				`}
			></div>
			<div
				css={`
					position: relative;
					&:after {
						content: '';
						display: block;
						position: absolute;
						width: 20rem;
						height: 20rem;
						background: #fff;
						top: 0;
						left: 50%;
						transform: translate(-30%, -50%);
						border-radius: 50%;
						box-shadow: 17.8rem 0 0 3rem #fff, 32.7rem 3.4rem 0 0 #fff, 48rem 0.9rem 0 0 #fff,
							69rem 7.1rem 0 6rem #fff, 88rem 0 0 8.9rem #fff, -17.8rem 0 0 3rem #fff,
							-32.7rem 3.4rem 0 2rem #fff, -48rem 0.9rem 0 6rem #fff,
							-69rem 7.1rem 0 6rem #fff, -88rem 0 0 8.9rem #fff, -110rem 5rem 0 8.9rem #fff,
							10rem 0 0 5.6rem rgba(0, 0, 0, 0.5), 29.8rem 1rem 0 5.6rem rgba(0, 0, 0, 0.5),
							54rem -4rem 0 5rem rgba(0, 0, 0, 0.5), 74rem -3rem 0 3rem rgba(0, 0, 0, 0.5),
							88rem -10rem 0 8rem rgba(0, 0, 0, 0.5), 100rem 0 0 8rem rgba(0, 0, 0, 0.5),
							-6rem 0 0 5.6rem rgba(0, 0, 0, 0.5), -29.8rem 1rem 0 5.6rem rgba(0, 0, 0, 0.5),
							-54rem -4rem 0 5rem rgba(0, 0, 0, 0.5), -74rem -3rem 0 3rem rgba(0, 0, 0, 0.5),
							-78rem -7rem 0 8rem rgba(0, 0, 0, 0.5), -120rem 0 0 8rem rgba(0, 0, 0, 0.5);
					}
					&:before {
						content: '';
						position: absolute;
						width: 100%;
						height: 20rem;
						background: #fff;
						z-index: 1;
						top: 0;
						left: 0;
					}
				`}
			>
				<div
					css={`
						display: flex;
						margin: auto;
						max-width: 120rem;
						padding: 10rem 0;
					`}
				>
					<div
						css={`
							flex: 0 0 57rem;
							margin: 0 1.5rem;
							z-index: 2;
						`}
					>
						<h2
							css={`
								margin-bottom: 1.5rem;
							`}
						>
							金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎 系列
						</h2>
						<p
							css={`
								line-height: 1.7;
								margin-bottom: 1.6rem;
							`}
						>
							金魚都能懂的系列教學，是 Amos
							針對網頁設計新手所設計的一套入門教學影片金魚都能懂的系列教學，是 Amos
							針對網頁設計新手所設計的一套入門教學影片金魚都能懂的系列教學，是 Amos
							針對網頁設計新手所設計的一套入門教學影片
						</p>
						<p
							css={`
								line-height: 1.7;
							`}
						>
							金魚都能懂的系列教學，是 Amos
							針對網頁設計新手所設計的一套入門教學影片金魚都能懂的系列教學，是 Amos
							針對網頁設計新手所設計的一套入門教學影片金魚都能懂的系列教學，是 Amos
							針對網頁設計新手所設計的一套入門教學影片
						</p>
					</div>
					<div
						css={`
							flex: 0 0 57rem;
							margin: 0 1.5rem;
							z-index: 2;
						`}
					>
						<h2
							css={`
								margin-bottom: 1.5rem;
							`}
						>
							金魚都能懂的這個網頁畫面怎麼切 - 金魚都能懂了你還怕學不會嗎 系列
						</h2>
						<p
							css={`
								line-height: 1.7;
								margin-bottom: 1.6rem;
							`}
						>
							金魚都能懂的系列教學，是 Amos
							針對網頁設計新手所設計的一套入門教學影片金魚都能懂的系列教學，是 Amos
							針對網頁設計新手所設計的一套入門教學影片金魚都能懂的系列教學，是 Amos
							針對網頁設計新手所設計的一套入門教學影片
						</p>
						<p
							css={`
								line-height: 1.7;
							`}
						>
							金魚都能懂的系列教學，是 Amos
							針對網頁設計新手所設計的一套入門教學影片金魚都能懂的系列教學，是 Amos
							針對網頁設計新手所設計的一套入門教學影片金魚都能懂的系列教學，是 Amos
							針對網頁設計新手所設計的一套入門教學影片
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Practice21;
