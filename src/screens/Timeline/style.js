import styled from "styled-components";

const TimelineWrapper = styled.div`
	width: 930px;
	height: 100%;
	padding-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 800px) {
		width: 100vw;
		max-width: 100vw;
		padding-top: 20px;
	}
`;

const NewPostContainer = styled.div`
	border: 2px solid white;
	width: 611px;
	height: 209px;
	margin-bottom: 29px;
	border-radius: 11px;

	@media screen and (max-width: 800px) {
		width: 100vw;
		height: 164px;
	}
`;

const PostsContainer = styled.div`
	margin-right: 25px;

	@media screen and (max-width: 800px) {
		margin-right: 0px;
	}
`;

const TrendingContainer = styled.div`
	width: 301px;
	height: 406px;
	border: 2px solid red;
	border-radius: 11px;

	@media screen and (max-width: 800px) {
		display: none;
	}
`;

const MainContainer = styled.div`
	display: flex;
`;

export { MainContainer, TrendingContainer, PostsContainer, NewPostContainer, TimelineWrapper };
