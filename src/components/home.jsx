export default function Home(props) {
    console.log(props, 'props')
    return (
      <div>
        <h1>Home - {props.title}</h1>
        <h2>Name: {props.name}</h2>
        <Profile name={props.name} />
      </div>
    )
}

export function Profile (props) {
  console.log('props', props)
  return (
    <div>
      <p>This is a profile Page {props.name}.</p>
    </div>
  )
}

export function Settings () {
  return (
    <div>
      <p>This is a Settings Page</p>
    </div>
  )
}