
class Student extends React.Component {
    render() {
      return (
        <li className="reactc">
          <div>
            <b>Name:</b> {this.props.name}
            <button onClick={() => handleTranfer(member)} >Tranfer</button>
          </div>
          <div>
            <b>Age:</b> {this.props.age}
          </div>
        </li>
      );
      
    }
    
  }
  
class StudentList extends React.Component {
    
  constructor(props) {
    
      super(props);
      
      this.state = {
        
        students: [
          { empId: 1, name: "Đinh Tuấn Anh", age: "20" },
          { empId: 2, name: "Ngụy Minh Thắng", age: "19" },
          { empId: 3, name: "Nguyễn Anh Thư", age: "20" }
        ]
      };
      
    }
    
  
    render() {
      // Array of <Employee>
      var listItems = this.state.students.map(e => (
        <Student name={e.name} age={e.age} />
      ));
      return (
          <ul className="student-list">
            <h1>list member of React class</h1>
             {listItems}
          </ul>
        );
    }
  }
  class StudentList2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        students: [
          { empId: 1, name: "Ngô Huỳnh Đức", age: "20" },
          { empId: 2, name: "Nguyễn Mạnh Dũng", age: "19" },
          { empId: 3, name: "Nguyễn Đăng Quý", age: "20" }
        ]
      };
    }
  
    render() {
      // Array of <Employee>
      var listItems = this.state.students.map(e => (
        <Student name={e.name} age={e.age} />
      ));
      return (
          <ul className="student-list">
            <h1>list member of Java class</h1>
             {listItems}
          </ul>
        );
    }
  }
  
 
  // Render
  ReactDOM.render(<StudentList />, document.getElementById("studentlist1"));
  ReactDOM.render(<StudentList2 />, document.getElementById("studentlist2"));