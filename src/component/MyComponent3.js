import React from "react";

// 클래스형 컴포넌트
class MyComponent3 extends React.Component {

  // 클래스형에서는 props를 사용하기 전에 생성자의 매개변수를 통해서 초기화해주는 작업
  constructor(props) {
    super(props); // 부모클래스와 연결
    this.props = props; // 나의 멤버변수에 props를 저장한다.
  }
  
  // 렌더 함수 오버라이드
  render() {

    let {age} = this.props;

    return (
      <div>
        이거슨 클래스형 컴포넌트 {age}
      </div>
    )

  }
}

export default MyComponent3