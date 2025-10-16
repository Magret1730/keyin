import React from 'react'

const AdviceList = ({Advices, count, setCount, fetchAdvices}) => {
    return (
        <div>
            <label htmlFor="count">Number of advice slips: </label>
            <input
                id="count"
                type="number"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                min="1"
                max="20"
            />

        <button onClick={() => fetchAdvices()} style={{ marginLeft: '1rem' }}>
            Refresh
        </button>

        <ul>
            {Advices.map((advice, index) => (
                <li key={index}>{advice}</li>
            ))}
        </ul>
        </div>
    )
}

export default AdviceList;