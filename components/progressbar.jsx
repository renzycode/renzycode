const Progressbar = (props) => {
  return (
    <div className="">
      <div className="mb-1 text-lg font-medium text-black flex dark:text-gray-200">{props.title}</div>
      <div className="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          style={{ width: props.percent }}
          className="bg-gradient-to-r dark:from-my-dark-blue from-green-200 to-blue-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
        >
          {" "}
          {props.percent}
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
