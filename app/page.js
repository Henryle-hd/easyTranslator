import AllWords from "./components/allWords"

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 " >
      <h2 className="text-center">easyTranslator 🧑‍💻</h2>

      <div className="w-[40%]">
        <AllWords />
      </div>
      
      
    </div>
  )
}

export default page
