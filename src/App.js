import MyHome, {Profile, Settings} from './components/home'
import { MyTab } from './components/tab'

export default function App() {

  return (
    <div>
      <h1>Hello</h1>
      <MyHome name='Ravi' a={10} title='Page'  />
      <MyHome name='sunidhi' a={10} title='New Page' />
      <MyHome name='New User' a={10} title='New Home' />
      <MyTab />
    </div>
  )
}
