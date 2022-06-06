import styled from 'styled-components'

const Wrapper = styled.section`{

.form {

}
.faqs {
	width: 100%;
	max-width: 768px;
	margin: 0 auto;
	padding: 15px;
}

.faqs .faq {
	margin: 15px;
	padding: 15px;
	background-color: #FFF;
	border-radius: 8px;
	//box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
.faqs .faq .faq-question {
	position: relative;
	font-size: 20px;
	padding-right: 80px;

	transition: all 0.4s ease;
}

.faqs .faq .faq-question::hover {
	content: '';
	position: absolute;
	top: 50%;
	right: 0px;
	transform: translateY(-50%);
	width: 30px;
	height: 30px;

	//background-image: url('../images/arrow-down-mint.svg');
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;

	transition: all 0.4s ease-out;
}

.faqs .faq .faq-answer {
	opacity: 0;
	max-height: 0;
	overflow-y: hidden;
	transition: all 0.4s ease-out;
}

.faqs .faq.open .faq-question {
	margin-bottom: 15px;
}

.faqs .faq.open .faq-question::hover {
	transform: translateY(-50%) rotate(180deg);
}

.faqs .faq.open .faq-answer {
	max-height: 1000px;
	opacity: 1;
}

// .add-question {
// 	//width: 100%;
// 	//max-width: 768px;
// 	margin: 0 auto;
// 	padding: 15px;
// 	margin: 15px;
// 	padding: 15px;
// 	background-color: #FFF;
// 	border-radius: 8px;
// 	//box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
// 	position: relative;
// 	font-size: 20px;
// 	padding-right: 80px;

// 	transition: all 0.4s ease;
// }
.created-by {
	font-weight: bolder;
	background: var(--primary-100);
	margin-right: 10px;
	padding: 3px 3px;
	border-radius: 7px;
}
.answered-by {
	font-weight: bolder;
	background: var(--green-light);
	margin-right: 10px;
	padding: 3px 3px;
	border-radius: 7px;
}

}
`
export default Wrapper