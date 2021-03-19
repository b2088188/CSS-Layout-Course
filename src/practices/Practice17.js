import React from 'react';
import styled from 'styled-components/macro';

const Practice17 = () => {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				min-height: 100vh;
				background: #489eaa;
			`}
		>
			<div
				css={`
					width: 60rem;
					height: 50rem;
					margin: auto;
					display: flex;
					justify-content: center;
					align-items: center;
					background: rgba(0, 0, 0, 0.5);
					border-radius: 10px;
					border: solid 10px #fff;
					box-shadow: 0 0 30px #000;
					backdrop-filter: blur(5px);
				`}
			>
				<form
					css={`
						width: 40rem;
						color: #fff;
						display: flex;
						flex-direction: column;
						& > *:not(:last-child) {
							margin-bottom: 2.5rem;
						}
					`}
				>
					<h2 css={``}>會員登入</h2>
					<div
						css={`
							display: flex;
							flex-direction: column;
						`}
					>
						<label
							htmlFor='user_id'
							css={`
								line-height: 3;
							`}
						>
							{' '}
							帳號
						</label>
						<input
							type='text'
							id='user_id'
							css={`
								border: solid 1px #aaa;
								line-height: 3;
								border-radius: 5px;
							`}
						/>
					</div>
					<div
						css={`
							display: flex;
							flex-direction: column;
						`}
					>
						<label
							htmlFor='password'
							css={`
								line-height: 3;
							`}
						>
							密碼
						</label>
						<input
							type='password'
							id='password'
							css={`
								border: solid 1px #aaa;
								line-height: 3;
								border-radius: 5px;
							`}
						/>
					</div>
					<div
						css={`
							display: flex;
							margin-top: 2.5rem;
						`}
					>
						<button
							css={`
								flex: 1;
								margin-right: 1rem;
								border-radius: 5px;
								font-size: 2rem;
								border: none;
								background: #6ab4fe;
								color: #fff;
								padding: 1rem 0;
							`}
						>
							登入
						</button>
						<button
							css={`
								flex: 1;
								color: #fff;
								border-radius: 5px;
								font-size: 2rem;
								border: none;
								background: #6ab4fe;
								padding: 1rem 0;
							`}
						>
							註冊
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Practice17;
