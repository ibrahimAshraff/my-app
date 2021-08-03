

export default Card = (props) => {
    return (
        <section style={props.style}>
            {props.children}
        </section>
    )
}