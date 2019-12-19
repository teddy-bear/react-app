import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import ButtonToggle from '../components/Persons/ButtonToggle';
import person_removed from '../components/Persons/Person-removed';
import Section_top from '../components/Misc/SectionTop';
import Alert from '../components/Bootstrap/Alerts/Alert';
import Aux from '../components/Helpers/Auxiliary';
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
        restoreAvailable: false
    };

    getInitialPersonsCount = () => {
        const initialPersonsCount = this.state.persons.length;
        return initialPersonsCount;
    };

    /**
     * Restore previously deleted person
     */
    restorePerson = () => {
        let removedPerson = this.state.removedPerson;
        let persons = [...this.state.persons];
        let personsOriginal = this.getInitialPersonsCount();
        if (persons.length < 5) {
            persons.push(removedPerson);
            this.setState({
                persons: persons,
                restoreAvailable: true
            });
        } else {
            this.setState({
                restoreAvailable: false
            });
        }
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
            restoreNotification,
            removedPerson;

        // cant use ths to copy current data since it`s render is executed each time on stateChange
        // const originalPersons = [...this.state.persons];


        if (flag) {
            persons = (
                <div className='row'>
                    <Persons
                        persons_state={this.state.persons}
                        clicked={this.deleteItem}
                        changed={this.changeName}
                    />
                </div>
            );
        }

        if (this.state.removedPerson) {
            removedPerson = (
                <Alert cssClasses={'primary'}>{'Removed player: ' + this.state.removedPerson.name}</Alert>
            )
        }

        if (!this.state.restoreAvailable) {
            restoreNotification = (
                <Alert cssClasses={'info'}>No more players to restore</Alert>
            )
        }

        return (
            <Aux>
                <div className="team-wrapper">
                    <Section_top
                        dataTitle={'functional title'}
                        title='Our Team'
                        clicked={this.restorePerson}
                        toggle_click={this.togglePersonsView}
                        personsVisible={this.state.personsVisible}
                        restoreAvailable={this.state.restoreAvailable}
                    />
                    {persons}
                    {removedPerson}
                    {restoreNotification}
                </div>
            </Aux>
        );
    }

    // works for class based components
    componentDidMount() {
        console.log('componentDidMount done')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate done')
    }
}

export default App;
