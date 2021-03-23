import React from 'react';
import styled from 'styled-components/macro';

function Practice24() {
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
						max-width: 120rem;
						margin: auto;
						display: flex;
					`}
				>
					<h1
						css={`
							flex: 0 0 39rem;
							margin-left: 2rem;
							color: #aaa;
							font-size: 5rem;
							position: relative;
							&:before,
							&:after {
								content: '';
								position: absolute;
								border: solid 1.5rem #f1c555;
								width: 15rem;
								height: 15rem;
								top: 0;
								left: 0;
								z-index: -1;
							}
							&:before {
								transform: rotate(20deg);
							}
							&:after {
								transform: rotate(25deg);
							}
						`}
					>
						CSS Coke is awesome
					</h1>
					<div
						css={`
							order: -1;
							flex: 0 0 79rem;
							column-count: 2;
							column-gap: 2rem;
							box-shadow: 0 0 2rem rgba(70, 70, 70, 0.3);
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

				<div
					css={`
						padding: 5rem 0;
						max-width: 120rem;
						max-height: 40rem;
						margin: auto;
						display: flex;
					`}
				>
					<h1
						css={`
							flex: 0 0 39rem;
							margin-left: 2rem;
							color: #aaa;
							font-size: 5rem;
							transform: rotate(90deg);
							transform-origin: top left;
							position: relative;
							left: 39rem;
						`}
					>
						CSS Coke is awesome
					</h1>
					<div
						css={`
							flex: 0 0 79rem;
							column-count: 2;
							column-gap: 2rem;
							box-shadow: 0 0 2rem rgba(70, 70, 70, 0.3);
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

export default Practice24;
