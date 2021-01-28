import React from 'react'

const tweetsArr = Array.from(Array(101).keys())

function Feed({ value, index, content }) {
  return (
    <div style={{ marginTop: 60 }}>
      {value === index && (
        <div>
          <h1>{content}</h1>
          {tweetsArr.map((tweet, idx) => (
            <h3 key={idx}>{tweet}</h3>
          ))}
        </div>
      )}
    </div>
  )
}

export default Feed
