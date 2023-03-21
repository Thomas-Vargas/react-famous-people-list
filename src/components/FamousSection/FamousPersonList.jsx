import FamousPerson from "./FamousPerson"

const FamousPersonList = (props) => {
    return (
        <ul>
          {/* TODO: Render the list of famous people */}
          {props.people.map(person => {
            return (
              <FamousPerson key={person.id} person={person} />
            )
          })}
        </ul>
    )
}

export default FamousPersonList