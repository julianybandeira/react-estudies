const Challenge = () =>{

    
    const firstNumber= 5
    const secondNumber = 8
    

    const handleSum = () =>{
        const sum = firstNumber + secondNumber

        return console.log(sum)
    } 

    return(
        <div>
            <div>Primeiro número é {firstNumber}</div>
            <div>O segundo número é {secondNumber}</div>
            <button onClick={handleSum}>Soma no Console</button>
        </div> 
    )
}
export default Challenge;