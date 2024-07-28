import { autorun, getDependencyTree, observable, trace } from 'mobx'
import './App.css'
import { Message } from './models/Message'

function App() {
  const message: Message = new Message("Foo", {name: "Michel"}, ["Joe", "Sara"])

  const disposer = autorun(() => {
    console.log(`Updated message title: ${message.title}`);
    trace();
  });

  message.updateTitle("Bar");
  disposer();

  // console.log(getDependencyTree(disposer));

  // let title: string = observable({ message.title, });
  // autorun(() => {
  //   console.log(title);
  // });
  // message.updateTitle("Bar");

  return (
    <>
      
    </>
  )
}

export default App
