import React from 'react';
import styled from 'styled-components/macro';

const Practice12 = () => {
	return (
		<div
			css={`
				min-height: 100vh;
				display: flex;
				align-items: center;
				font-family: 'Noto Sans TC', sans-serif;
				background: linear-gradient(90deg, #3d5894, #08c7a5);
			`}
		>
			<div
				css={`
					width: 80rem;
					margin: auto;
				`}
			>
				<table
					css={`
						background: #fff;
						border: double 3px #666;
						width: 100%;
						border-radius: 10px;
					`}
				>
					<caption
						css={`
							caption-side: bottom;
							text-align: right;
							padding: 1rem 0;
							color: #ccc;
						`}
					>
						CSS coke 範例一覽表:資料來源-
						<a
							href='https://www.youtube.com/c/csscoke'
							css={`
								color: #eee;
							`}
						>
							CSS coke YouTube 頻道
						</a>
					</caption>
					<thead
						css={`
							background: #333;
							color: #fff;
							& th:first-child {
								border-radius: 7px 0 0 0;
							}
							& th:last-child {
								border-radius: 0 7px 0 0;
							}
						`}
					>
						<tr>
							<th
								scope='col'
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								基礎版面
							</th>
							<th
								scope='col'
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								破格式版面
							</th>
							<th
								scope='col'
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								滿版
							</th>
							<th
								scope='col'
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								選單
							</th>
							<th
								scope='col'
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								表單
							</th>
							<th
								scope='col'
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								表格
							</th>
						</tr>
					</thead>
					<tbody
						css={`
							& tr:nth-child(even) {
								background: #ffa;
							}
						`}
					>
						<tr
							css={`
								&:hover {
									background: #fee;
								}
							`}
						>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								<a
									href='#'
									css={`
										color: #777;
									`}
								>
									圖文滿版
								</a>
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								交錯漂浮版
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								圖文滿版
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								導覽列
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								敬請期待
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								表格怎麼切
							</td>
						</tr>
						<tr>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								互動圖文卡片
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								破格式設計
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								超通用橫式版面
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								變化你的導覽列
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								敬請期待
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								敬請期待
							</td>
						</tr>
						<tr>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								人員介紹卡片
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								敬請期待
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								敬請期待
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								網站麵包屑
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							></td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							></td>
						</tr>
						<tr>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								超通用橫式版面
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							></td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							></td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								敬請期待
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							></td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							></td>
						</tr>
						<tr>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							>
								網頁頁尾
							</td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							></td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							></td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							></td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							></td>
							<td
								css={`
									border: solid 1px #666;
									padding: 0.6rem 1rem;
								`}
							></td>
						</tr>
						<tr>
							<Td>方塊酥版面</Td>
							<Td></Td>
							<Td></Td>
							<Td></Td>
							<Td></Td>
							<Td></Td>
						</tr>
					</tbody>
					<tfoot
						css={`
							& td:first-child {
								border-radius: 0 0 0 7px;
							}
							& td:last-child {
								border-radius: 0 0 7px 0;
							}
						`}
					>
						<tr>
							<Td>備註</Td>
							<Td>以上資料經 CSS coke 同意轉貼</Td>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	);
};

function Td({ children }) {
	return (
		<td
			css={`
				border: solid 1px #666;
				padding: 0.6rem 1rem;
			`}
			colspan='5'
		>
			{children}
		</td>
	);
}

export default Practice12;
