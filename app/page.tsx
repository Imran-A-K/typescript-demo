import Image from "next/image";
import Child from "./_components/Child";
import Button from "./_components/Button";
import State from "./_components/State";
import RefHook from "./_components/RefHook";
import Reducer from "./_components/Reducer";
import ContextChild from "./_components/ContextChild";
import GenericListComponent from "./_components/GenericComponents/GenericListComponent";
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
     <Child name={"Child"} ><div className="bg-blue-500">
      
      Children</div></Child>
      <hr />

      <Button outline name="test" >Button</Button>
      <State />
      <RefHook></RefHook>
      <Reducer />
      <ContextChild />
      <GenericListComponent< { id:number; name: string; age?:number } >
      items={[
        {id: 1, name: "Tom"},
        {id: 2, name: "Harry"},
      ]}
      getKey={item => item.id}
      renderItem={item => <div>{item.name}</div>}
      />
    </main>
  ) ;
}
