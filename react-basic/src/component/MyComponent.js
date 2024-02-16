import Proptypes from 'prop-types';

function MyComponent(/* props */ {name, phone, age}) {

  // console.log(props);

  // let name = "홍길동";
  // let phone = "010-1234-5678";


  // let name = props.name;
  // let phone = props.phone;
  // let age = props.age;

  return (
    <div>
      자식 컴포넌트<br/>
      변수값: {name}<br/>
      변수값: {phone}<br/>
      변수값: {age}<br/>
    </div>

  )
}

// props의 기본값 설정
// 컴포넌트명.defaultProps = {}
MyComponent.defaultProps = {
  phone : "010-0000-0000",
  age: 0
}

// props의 타입검증
// 컴포넌트명.proTypes = {}
MyComponent.propTypes = {
  name : Proptypes.string,
  age : Proptypes.number.isRequired, // 꼭 필수로 주세요
  phone : Proptypes.string
}

export default MyComponent