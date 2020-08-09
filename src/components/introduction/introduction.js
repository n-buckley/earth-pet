import React from 'react'; 

export default function Introduction(props) {
    const { text="unavalable" } = props;
    const [count, setCount] = useState(0)

    function clicked() {
        setCount(count+1)
    }

    return(
        <div>
            <div>Hi, how are you today</div>
            <div>{count}</div>
            <button onClick={clicked}>click me</button>
        </div>
    );
};
