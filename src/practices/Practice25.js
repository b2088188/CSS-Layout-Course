import React from 'react';
import styled from 'styled-components/macro';

function Practice25() {
	return (
		<div
			css={`
				font-family: 'Noto Sans TC', sans-serif;
			`}
		>
			<div
				css={`
					margin: 5rem 0;
				`}
			>
				<div
					css={`
						padding: 5rem 0;
						max-width: 120rem;
						max-height: 40rem;
						margin: auto;
						display: flex;
						box-shadow: 0 0 2rem rgba(70, 70, 70, 0.3);
						justify-content: flex-end;
						position: relative;
						overflow: hidden;
					`}
				>
					<h1
						css={`
							color: #fff;
							text-shadow: 6px 6px 0px rgba(200, 200, 200, 0.5);
							font-size: 13rem;
							position: absolute;
							top: 0;
							left: 0;
							line-height: 0.8;
						`}
					>
						CSS Coke is awesome
					</h1>
					<div
						css={`
							flex: 0 0 60rem;
							column-count: 2;
							column-gap: 2rem;
							position: relative;
							z-index: 1;

							padding: 1.5rem;
							& > p {
								margin-bottom: 1rem;
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
