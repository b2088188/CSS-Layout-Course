import React from 'react';
import styled from 'styled-components/macro';

function Practice23() {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
			`}
		>
			<div
				css={`
					margin: 10rem 0;
				`}
			>
				<div
					css={`
						position: relative;
						max-width: 120rem;
						margin: auto;
					`}
				>
					<h1
						css={`
							max-width: 40rem;
							padding: 1.5rem;
							background: #eee;
							position: absolute;
							top: 0;
							bottom: 0;
							left: 0;
							right: 0;
							margin: auto;
							display: flex;
							justify-content: center;
							align-items: center;
						`}
					>
						CSS Coke is awesome
					</h1>
					<div
						css={`
							& > p {
								line-height: 1.6;
								margin-bottom: 2rem;
								column-count: 2;
								column-gap: 46rem;
							}
						`}
					>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit facere
							ratione, porro quo asperiores explicabo necessitatibus recusandae suscipit.
							Maxime tenetur optio quaerat inventore aliquid molestiae, dicta tempore eaque,
							debitis natus adipisci vel eligendi vero, iusto nobis voluptas. Nisi pariatur
							molestias itaque doloribus, voluptatum animi, a totam numquam nam qui.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit facere
							ratione, porro quo asperiores explicabo necessitatibus recusandae suscipit.
							Maxime tenetur optio quaerat inventore aliquid molestiae, dicta tempore eaque,
							debitis natus adipisci vel eligendi vero, iusto nobis voluptas. Nisi pariatur
							molestias itaque doloribus, voluptatum animi, a totam numquam nam qui.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit facere
							ratione, porro quo asperiores explicabo necessitatibus recusandae suscipit.
							Maxime tenetur optio quaerat inventore aliquid molestiae, dicta tempore eaque,
							debitis natus adipisci vel eligendi vero, iusto nobis voluptas. Nisi pariatur
							molestias itaque doloribus, voluptatum animi, a totam numquam nam qui.
						</p>
					</div>
				</div>
				<div
					css={`
						max-width: 120rem;
						margin: auto;
						display: flex;
					`}
				>
					<h1
						css={`
							flex: 0 0 40rem;
							padding: 1.5rem;
							font-size: 5rem;
							color: #aaa;
							position: relative;
							&:after {
								content: '';
								display: block;
								border: solid 2.5rem #eee;
								height: 15rem;
								width: 15rem;
								position: absolute;
								bottom: 0;
								left: 2.5rem;
								z-index: -1;
							}
						`}
					>
						CSS Coke is awesome
					</h1>
					<div
						css={`
							flex: 0 0 80rem;
							order: -1;
							column-count: 2;
							column-gap: 2rem;
							& > p {
								margin-bottom: 1rem;
							}
							& > p:first-child:first-letter {
								font-size: 4rem;
								padding-right: 1rem;
								float: left;
							}
						`}
					>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit facere
							ratione, porro quo asperiores explicabo necessitatibus recusandae suscipit.
							Maxime tenetur optio quaerat inventore aliquid molestiae, dicta tempore eaque,
							debitis natus adipisci vel eligendi vero, iusto nobis voluptas. Nisi pariatur
							molestias itaque doloribus, voluptatum animi, a totam numquam nam qui.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit facere
							ratione, porro quo asperiores explicabo necessitatibus recusandae suscipit.
							Maxime tenetur optio quaerat inventore aliquid molestiae, dicta tempore eaque,
							debitis natus adipisci vel eligendi vero, iusto nobis voluptas. Nisi pariatur
							molestias itaque doloribus, voluptatum animi, a totam numquam nam qui.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur fugit facere
							ratione, porro quo asperiores explicabo necessitatibus recusandae suscipit.
							Maxime tenetur optio quaerat inventore aliquid molestiae, dicta tempore eaque,
							debitis natus adipisci vel eligendi vero, iusto nobis voluptas. Nisi pariatur
							molestias itaque doloribus, voluptatum animi, a totam numquam nam qui.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Practice23;
