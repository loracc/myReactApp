import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () =>{
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Jess" time="Today 8:00PM" avatarImage={faker.image.avatar()} commentContent="Nice post blog!"/>
      </ApprovalCard>    
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));