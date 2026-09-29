import  { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
  const submithandler = (e) => {
    e.preventDefault();

    let copyTask = [...task];
    copyTask.push({ title, details });
    setDetails("");
    setTitle("");
    setTask(copyTask);
  };

  function delete_task(idx) {
    let copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask)
   
  }

  return (
    <div className="w-screen h-screen  justify-center   lg:flex  ">
      <form
        action="text"
        className="flex flex-col justify-start items-start w-[90vw] sm:w-[50vw] py-2 gap-9 px-10 "
        onSubmit={(idx) => {
          submithandler(idx);
        }}
      >
        <h1 className="text-3xl font-bold ">Add Notes</h1>
        <input
          type="text"
          placeholder="enter your notes"
          className=" m-2 px-5 py-2 w-full  shadow-lg rounded ml:w-1/2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          placeholder="Enter details"
          className="m-2 px-5 py-2 w-full shadow-lg h-20 rounded ml:w-1/2"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
        <button className="bg-black shadow-lg text-white font-bold w-full rounded px-5 m-2 p-2   cursor-pointer ml:w-1/3">
          Add notes
        </button>
      </form>

      <div className="flex flex-col w-1/2 ml:w-[90%] sm:w-[90%] w-[100%] overflow-x-hidden max-h-[90%]  sm:h-[90%] ">
        <h1 className="font-bold text-3xl px-5 shadow-sm">Your notes</h1>
        <div className="sm:w-[90%] ml:h-[90%] flex flex-col p-2 items-center justify-start w-[90vw]  h-[90%] overflow-auto gap-5  m-5 rounded text-black">
          {task.map(function (e, idx) {
            return (
              <div
                key={idx}
                className="w-[90%] font-semibold relative  shadow-lg border-b-1 min-h-30  flex
             flex-col  p-4"
              >
                <span
                  onClick={() => {
                    delete_task(idx);
                  }}
                  className="absolute right-2 top-2 text-2xl font-extrabold cursor-pointer rounded-full "
                >
                  X
                </span>
                <h3 className="text-2xl font-bold box-border capitalize">
                  {e.title}
                </h3>
                <h6 className="text-sm font-semibold text-gray-600">
                  {e.details}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
