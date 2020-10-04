import React from 'react';
import { Header } from 'semantic-ui-react';
import Layout from './Components/Layout'



export default class App extends React.Component  {

    constructor(props) {
      super(props);
      this.wrapper = React.createRef();
      this.state = {
        data : [],
        filters: {
          year : null,
          land_success : null,
          launch_success : null
        }
      };
    }

    componentWillMount() {
        this.renderMyData();
    }

    handleClick=(event)=>{
      const filters = this.state.filters;
      const key =event.target.getAttribute("data");
      const value = event.target.innerText;
      filters[key]= value;
      this.renderMyData();

    }

    renderMyData(){
      const filters= this.state.filters;
      let params = "";
      params += filters.year ? `launch_year=${filters.year}&` :"";
      params += filters.land_success ? `land_success=${filters.land_success.toLowerCase()}&` :"";
      params += filters.launch_success ? `launch_success=${filters.launch_success.toLowerCase()}` :"";
      const url = `https://api.spaceXdata.com/v3/launches?limit=100&${params}`

      
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({ data : responseJson })
            })
            .catch((error) => {
              console.error(error);
            });
    }

    render(){
        return(
            <div ref={this.wrapper} className="App">
              <Header as='h2' textAlign='left'>SpaceX Launch Programs</Header>
              <Layout filters={this.state.filters}data={this.state.data} param={this}></Layout>

            </div>
        );
    }
}