const superagent = require('superagent')
//same as writing import superagent from 'superagent' in react

const getReddit = async () => {
    const response = await superagent.get('https://api.reddit.com/r/Planes/')
    .set('user-agent', 'node')

    const resObject = JSON.parse(response.text)
    //console.log(resObject.data.children.length)
    return resObject.data.children.lentgh
}

const main = async () => {
    const results = await getReddit()
    console.log(results)
}


main()
//getReddit()









// superagent.get('https://api.reddit.com/r/Planes/')
// .set('user-agent', 'node')
// .then(response => {
//     const resObject = JSON.parse(response.text)
    
//     console.log(resObject.data.children.length)
// })
// .catch(e => {
//     console.log(e)
// })

// superagent.get('https://api.reddit.com/r/Planes/')
// .set('user-agent', 'node')
// .then(response => {
//     console.log(response)
// })
// .catch(e => {
//     console.log(e)
// })