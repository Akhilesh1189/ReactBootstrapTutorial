import React from 'react';
 class Login extends React.Component {
  constructor(props) {
       super(props)
       this.state = {
          openDeleteModal: false,
          activeItemName: '', //state property to hold item name
          activeItemId: null, //state property to hold item id
       }
    }

    openModalWithItem(item) {
       this.setState({
          openDeleteModal: true,
          activeItemName: item.name,
          activeItemId: item.id
       })
    }

    render() {

   

    return (
     <div>
       <h1>Hello World:</h1>
     </div>
    )
    }
}
export default Login;