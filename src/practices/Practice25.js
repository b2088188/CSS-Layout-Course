import React from 'react';
import styled from 'styled-components/macro';

function Practice25() {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
				background: #000;
				min-height: 100vh;
			`}
		>
			<div
				css={`
					padding: 5rem 0;
				`}
			>
				<div
					css={`
						padding: 5rem 0;
						max-width: 120rem;
						max-height: 40rem;
						margin: auto;
						display: flex;
						flex-direction: column;
					`}
				>
					<h1
						css={`
							color: #f00;
							font-size: 8rem;
							line-height: 0.8;
							align-self: center;
							margin-bottom: 5rem;
						`}
					>
						CSS Coke is awesome
					</h1>
					<div
						css={`
							color: #fff;

							& > p:not(:last-child) {
								margin-bottom: 2.5rem;
							}
							& > p:first-child:first-letter {
								font-size: 4rem;
								float: left;
								padding-right: 1rem;
							}
						`}
					>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Nulla natus in totam
							nostrum tempora voluptatum hic architecto amet optio nam laudantium, modi illum
							eius rem quod animi temporibus, quibusdam, odit. Ipsa, voluptatem sequi
							praesentium a id quas reiciendis unde consequatur ipsam laudantium, hic
							voluptatibus, et cum iure ab assumenda quae.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Nulla natus in totam
							nostrum tempora voluptatum hic architecto amet optio nam laudantium, modi illum
							eius rem quod animi temporibus, quibusdam, odit. Ipsa, voluptatem sequi
							praesentium a id quas reiciendis unde consequatur ipsam laudantium, hic
							voluptatibus, et cum iure ab assumenda quae.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Nulla natus in totam
							nostrum tempora voluptatum hic architecto amet optio nam laudantium, modi illum
							eius rem quod animi temporibus, quibusdam, odit. Ipsa, voluptatem sequi
							praesentium a id quas reiciendis unde consequatur ipsam laudantium, hic
							voluptatibus, et cum iure ab assumenda quae.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Practice25;
