import React from 'react';
import styled from 'styled-components/macro';
import { applyStyleModifiers } from 'styled-components-modifiers';

const Practice18 = () => {
	return (
		<div
			css={`
				background: #d3effb;
				font-family: 'Noto Sans TC', sans-serif;
				min-height: 100vh;
				display: flex;
				justify-content: center;
				align-items: center;
			`}
		>
			<div
				css={`
					width: 50rem;
					padding: 2rem;
					box-shadow: 0 0 10px #3e92cc;
					background: #f4f5f7;
					& > *:not(:last-child) {
						margin-bottom: 2rem;
					}
				`}
			>
				<div
					css={`
						display: flex;
					`}
				>
					<div
						css={`
							flex: 0 0 6rem;
							text-align: center;
						`}
					>
						<div
							css={`
								width: 100%;
								height: 6rem;
								border-radius: 50%;
								overflow: hidden;
							`}
						>
							<img
								src='https://ichef.bbci.co.uk/images/ic/1200x675/p08njsbv.jpg'
								alt=''
								css={`
									width: 100%;
									height: 100%;
									object-fit: cover;
								`}
							/>
						</div>
						<div>Alvee</div>
					</div>
					<TextArea modifiers='remote'>Hello 你好嗎</TextArea>
				</div>
				<div
					css={`
						display: flex;
					`}
				>
					<div
						css={`
							text-align: center;
							flex: 0 0 6rem;
						`}
					>
						<div
							css={`
								width: 100%;
								height: 6rem;
								border-radius: 50%;
								overflow: hidden;
							`}
						>
							<img
								src='https://pyxis.nymag.com/v1/imgs/654/1f1/08de774c11d89cb3f4ecf600a33e9c8283-24-keanu-reeves.rsquare.w700.jpg'
								alt=''
								css={`
									width: 100%;
									height: 100%;
									object-fit: cover;
								`}
							/>
						</div>
						<div>Amos</div>
					</div>
					<TextArea modifiers='local'>Hello 你好嗎</TextArea>
				</div>
			</div>
		</div>
	);
};

const TEXT_MODIFIERS = {
	remote: () => `
	margin: 0 8rem 0 2rem;
	background: #fff;
	color: #a1b4c5;
	&:before{
		border-right:solid 10px #fff;
		left:-10px;
	}
	`,
	local: () => `
	order: -1;
	background: #3e92cc;
	color: #fff;
	margin: 0 2rem 0 8rem;
	margin-left: auto;
	&:before{
		border-left:solid 10px #3e92cc;
		right:-10px;
	}
	`
};

function TextArea({ children, className }) {
	return (
		<div
			className={className}
			css={`
				padding: 1.6rem;
				border-radius: 1rem;
				position: relative;
				align-self: flex-start;
				&:before {
					content: '';
					position: absolute;
					top: 10px;
					border-top: solid 10px transparent;
					border-bottom: solid 10px transparent;
				}
			`}
		>
			{children}
		</div>
	);
}
TextArea = styled(TextArea)`
	${applyStyleModifiers(TEXT_MODIFIERS)}
`;

export default Practice18;
