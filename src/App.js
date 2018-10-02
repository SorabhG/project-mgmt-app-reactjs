import React, {Component} from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import Todos from './Components/Todos1';
import AddProject from "./Components/AddProject";
import "./App.css";


class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            todos: []
        }
    }


    componentWillMount() {
        this.getProjects();
        this.getTodos();
    }

    handleAddProject(incomingProjectRequest) {
        /*console.log(project)*/
        let tempState = this.state.projects;
        tempState.push(incomingProjectRequest);
        this.setState({projects: tempState});

    }

    handleDeleteProject(id){
        let tempProperty1 = this.state.projects;
        let index = tempProperty1.findIndex(x => x.id === id);
        tempProperty1.splice(index,1);
        this.setState({projects: tempProperty1});
    }

    getTodos(){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            datatype: 'json',
            cache: false,
            success: function (data) {
                this.setState({todos: data}, function () {
                    console.log(this.state);
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }
        })

    }
    getProjects(){
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: 'Business Website',
                    category: 'Web Design'
                },
                {
                    id: uuid.v4(),
                    title: 'Social Site',
                    category: 'Mobile Development'
                },
                {
                    id: uuid.v4(),
                    title: 'Ecommmerce Shopping Cart',
                    category: 'Web Dev'
                }
            ]
        });

    }
    componentDidMount(){
        this.getTodos();
    }

    render() {
        return (
            <div className="OptionalApp" >

                <AddProject className="AddProject_content" addProjectProperty={this.handleAddProject.bind(this)}/>
                <Projects  projectProperties={this.state.projects} onDelete2={this.handleDeleteProject.bind(this)}/>
                <Todos todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
