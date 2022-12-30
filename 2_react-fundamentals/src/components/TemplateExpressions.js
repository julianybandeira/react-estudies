const TemplateExpressions = () => {
    const name= "Juliany"
    const data = {
        age:33,
        job: "Programmer"
    }

    return(
        <div>
            <h1>Hello {name}, jow are you?</h1>
            <h2>You work as {data.job}</h2>
        </div>
    )
}
export default TemplateExpressions;