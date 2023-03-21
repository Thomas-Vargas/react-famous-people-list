const FamousPerson = (props) => {
    return (
        <p key={props.person.id}>{props.person.name} is famous for "{props.person.role}"</p>
    )
}

export default FamousPerson;