import React, {Component} from 'react';
import Person from '../Person/Person';
import ButtonToggle from '../Person/ButtonToggle';
import person_removed from '../Person/Person-removed';
import './App.css';

class App extends Component {
    // todo: how to create initial state copy on component load
    state = {
        persons: [
            {id: '111', className: 'col-4', name: 'Max', age: 28},
            {id: '22', className: 'col-4', name: 'Manu', age: 29},
            {id: '33', className: 'col-4', name: 'Stephanie', age: 26},
            {id: '444', className: 'col-4', name: 'Mike', age: 22},
            {id: '55', className: 'col-4', name: 'Ann', age: 11}
        ],
        personsVisible: true,
        removedPerson: '',
    };

    /**
     * Restore previously deleted person
     */
    restorePerson = () => {
        let removedPerson = this.state.removedPerson;
        let persons = [...this.state.persons];
        persons.push(removedPerson);
        this.setState({
            persons: persons
        });
    };

    /**
     * Hide clicked card
     * @param index
     */
    deleteItem = (index) => {
        let personsCurrent = [...this.state.persons];
        let personCurrent = personsCurrent[index];
        // remove target person
        personsCurrent.splice(index, 1);
        this.showDeleted(personCurrent);

        this.setState({
            persons: personsCurrent,
        })
    };

    /**
     * Toggle cards visibility
     */
    togglePersonsView = () => {
        const isVisible = this.state.personsVisible;
        this.setState({
            personsVisible: !isVisible
        })
    };

    /**
     * Display notification on person removal
     * @param removedPerson
     * todo: add setTimeout to hide block automatically
     */
    showDeleted = (removedPerson) => {
        this.setState({
            removedPerson: removedPerson
        });
    };

    /**
     * Update name on the card
     * @param event
     * @param id
     */
    changeName = (event, id) => {

        // find player ID
        const currentPersonIndex = this.state.persons.findIndex(person => {
            return person.id === id;
        });

        // copy persons to the local array
        const personsLocal = [...this.state.persons];

        // find target person inside local scope
        const currentPerson = personsLocal[currentPersonIndex];

        // take name form the input value
        currentPerson.name = event.target.value;

        this.setState({
            persons: personsLocal
        })
    };

    render() {
        let flag = this.state.personsVisible,
            persons,
            removedPerson,
            btnCLasses = 'btn btn-success';

        if (this.state.personsVisible) {
            btnCLasses = 'btn btn-danger';
        }
        // cant use ths to copy current data since it`s render is executed each time on stateChange
        // const originalPersons = [...this.state.persons];


        if (flag) {
            persons = (
                <div className='row'>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            className={person.className}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            click={() => this.deleteItem(index)}
                            changed={(event) => this.changeName(event, person.id)}>
                            {person.content}
                        </Person>
                    })}
                </div>
            );
        }

        if (this.state.removedPerson) {
            removedPerson = (
                <div className="alert alert-warning" role="alert">{this.state.removedPerson.name}</div>
            )
        }


        return (
            <div className="team-wrapper">
                <div className="section-top">
                    <div className="row">
                        <div className="col-9">
                            <h1> Our players</h1>
                        </div>
                        <div className="col-3">
                            <div className="btn-group" role="group">
                                <button className="btn btn-info" onClick={this.restorePerson}>
                                    Restore persons
                                </button>
                                <ButtonToggle className={btnCLasses} click={this.togglePersonsView}>
                                    {this.state.personsVisible ? 'Hide players' : 'Show players'}
                                </ButtonToggle>
                            </div>
                        </div>
                    </div>
                </div>
                {persons}
                {removedPerson}
            </div>
        );
    }
}

export default App;
