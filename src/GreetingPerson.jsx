


function GreetingPerson() {

    let myStudents = ['Z', 'Fab', 'Ethan', 'Owen', 'Sharica']

    return(
    <>
        <ul>
            {
                myStudents.map((student, index) => {
                    return(
                        <li key={index}>{student}</li>
                    )
                })
            }
        </ul>
    </>
    )
}

export default GreetingPerson