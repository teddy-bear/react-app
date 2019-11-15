import React, {Component} from 'react';
import Persons from '../components/Persons/Persons';
import ButtonToggle from '../components/Persons/ButtonToggle';
import person_removed from '../components/Persons/Person-removed';
import Section_top from '../components/Misc/SectionTop';
import Alert from '../components/Bootstrap/Alerts/Alert';
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

        return (
            <div className="team-wrapper">
                <Section_top
                    title='Our Team'
                    clicked={this.restorePerson}
                    btn_text={'Restore persons'}
                    toggle_click={this.togglePersonsView}
                    personsVisible={this.state.personsVisible}
                />
                {persons}
                {removedPerson}
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount done')
    }
}

export default App;
