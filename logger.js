export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('prevState', prevState)
        console.log('Arguments', args);
        const nextState = reducer(prevState, action, args)
        console.groupEnd()
        console.log('nextState', nextState)
        return nextState
    }
}