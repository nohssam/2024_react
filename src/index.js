import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Ex01 from './step09_list/Ex01';
import Ex02 from './step09_list/Ex02';
import NameForm from './step10_form/NameForm';
import SelectForm from './step10_form/SelectForm';
import MultiSelectForm from './step10_form/MultiSelectForm';
import CheckBoxsForm from './step10_form/CheckBoxsForm';
import RadioButtons from './step10_form/RadioButtons';
import SignUpForm from './step10_form/SignUpForm';
import Calc from './step11_SharedState/Calc';
import Calc2 from './step11_SharedState/Calc2';
import Calc3 from './step11_SharedState/Calc3';
import Calc4 from './step11_SharedState/Calc4';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Clock
//  UI를 업데이트하는 유일한 방법은 새로운 엘리먼트를 생성하고 이를 root.render()로 전달하는 것
// setInterval(() => {
//     root.render(
//       <React.StrictMode>
//         <Clock />
//       </React.StrictMode>
//     );
// }, 1000);

root.render(
   <React.StrictMode>
      {/* <Library /> */}
      {/* <CommnetList />  */}
      {/* <Welcome name="Sara" /> */}
      {/* <Welcome name="Cahal" /> */}
      {/* <Welcome name="Edite" />  */}      
      {/* <NotificationList /> */}
      {/* <Count /> */}

      {/* <Customer id="nojm73@naver.com" name="noh" orders={['A001', 'B002', 'C003']} /> */}
      {/* <BookList books={Books}/> */}
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      {/* <Counter3 /> */}
      {/* <Counter4 /> */}
      {/* <SmartHome /> */}
      {/* <SmartHome2 /> */}
      {/* <TextInput /> */}
      {/* <VideoExam /> */}
      {/* <Sample01 /> */}
      {/* <Sample02 /> */}
      {/* <Sample03 /> */}
      {/* <Sample04 /> */}
      {/* <Sample05 /> */}
      {/* <Ex01 isLoggedIn=""/> => false */}
      {/* <Ex01 isLoggedIn="내용"/> => true */}
      {/* <Ex01 isLoggedIn={false}/> */}
      {/* <Ex02 isLoggedIn={true}/> */}
      {/* <Ex03 /> */}
      {/* <Ex04 msg={[]} />   */}
       {/* <Ex04 msg={[1,2]} />  */}
       {/* <Ex05 /> */}
       {/* <Ex06 /> */}
      {/* <Ex07 /> */}
      {/* <Ex01 arr={[1,2,3,4,5]} /> */}
      {/* <Ex02 /> */}
      {/* <NameForm /> */}
      {/* <SelectForm /> */}
      {/* <MultiSelectForm /> */}
      {/* <CheckBoxsForm /> */}
      {/* <RadioButtons />  */}
      {/* <SignUpForm /> */}
      {/* <Calc /> */}
      {/* <Calc2 />   */}
      {/* <Calc3 /> */}
      <Calc4 />

   </React.StrictMode>
);
reportWebVitals();
