import Progressbar from "../components/progressbar";
import myskills from "../components/myskills";

const CodingSkills = () => {
  return (
    <section className="py-5">
      <div className="dark:bg-green-900 bg-white p-10 rounded-xl bg-opacity-40 dark:bg-opacity-40">
        <h3 className="text-2xl py-1 font-medium dark:text-gray-200 text-gray-800">
          Coding Skills
        </h3>
        <p className="text-md py-2 leading-6 dark:text-gray-400 text-gray-600">
          This section is about my{" "}
          <span className="dark:text-green-600 text-blue-500">
            coding skills
          </span>
          , and the progress bar shows how much I've{" "}
          <span className="dark:text-green-600 text-blue-500">learned</span> or{" "}
          <span className="dark:text-green-600 text-blue-500">experienced</span>{" "}
          in that programming language or web technologies.
        </p>
      </div>
      <div className="text-center shadow-xl p-10 rounded-xl my-10 bg-white dark:bg-green-900 dark:bg-opacity-40 flex-2">
        {myskills.map((data, key) => {
          return (
            <Progressbar title={data.name} percent={data.progress} key={key} />
          );
        })}
      </div>
    </section>
  );
};

export default CodingSkills;
